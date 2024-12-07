import { MODEL } from "@/constants/chat";
import { Conversation, GoogleOrganicResult } from "@/types/chat";
import axios from "axios";
import OpenAI from "openai";

import { ChatCompletion, ChatCompletionMessageParam } from "openai/resources";

const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_CUSTOM_SEARCH_ID = process.env.EXPO_PUBLIC_GOOGLE_CUSTOM_SEARCH_ID;

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const concatWithSystemMessage = (
  conversation: Conversation,
  message: string
) =>
  [{ role: "system", content: message } as ChatCompletionMessageParam].concat(
    conversation
  );

export const addUserMessageToConversation = (
  conversation: Conversation,
  message: string
) => conversation.concat({ role: "user", content: message });

export const isValidJSON = <T extends {}>(text?: string | null): T | false => {
  try {
    return JSON.parse(text || "");
  } catch (e) {
    return false;
  }
};

export const removeAfterLastDash = (text: string) => {
  const lastDashIndex = text.lastIndexOf("-");

  if (lastDashIndex === -1) {
    return text;
  }

  return text.slice(0, lastDashIndex);
};

type GoogleSearchResult = {
  snippet: string;
};

const searchSerpApi = async (query: string) => {
  let output = "";

  try {
    const params = {
      engine: "google",
      q: query,
      location: "Poland",
      api_key:
        "cf1ed0ebbbba834e6f3511f0d1fe9d9ffea18c92e1b6a4125154c7bc1fe92679",
    };

    const response = await axios.get("https://serpapi.com/search", { params });

    const results = response.data;

    if (results && results.organic_results.length >= 10) {
      results.organic_results
        .slice(0, 10)
        .forEach((item: GoogleOrganicResult) => {
          output += `Pozycja: ${item.position}\n`;
          output += `Tytuł: ${item.title}\n`;
          output += `Snippet: ${item.snippet}\n`;
          output += `Link: ${item.link}\n`;
          output += `Źródło: ${item.source}\n`;
          output += "-".repeat(40) + "\n";
        });

      return output;
    } else {
      console.log("No results found.");
    }
  } catch (error) {
    console.error("Error fetching data from SerpApi:", error);
  }
};

export const googleSearch = async (
  query: string
): Promise<GoogleSearchResult[]> => {
  // cf1ed0ebbbba834e6f3511f0d1fe9d9ffea18c92e1b6a4125154c7bc1fe92679
  const url = `https://serpapi.com/search.json?q=${query}?&location=Poland&hl=pl&gl=pl&google_domain=google.pl`;
  try {
    const response = await axios.get(url);
    console.group(response);
    return response.data.items || [];
  } catch (error) {
    console.error("Błąd podczas wyszukiwania w Google:", error);
    return [];
  }
};

export const generateResponseWithRag = async (
  query: string
): Promise<string> => {
  console.log("query", query);
  const searchResults = await searchSerpApi(query);

  if (searchResults === undefined) {
    return "Niestety, nie znalazłem żadnych informacji na ten temat.";
  }

  return searchResults;
};

export const extractMessage = (completion: ChatCompletion) =>
  completion.choices[0].message.content;

export const createCompletion = (messages: ChatCompletionMessageParam[]) =>
  openai.chat.completions.create({
    model: MODEL,
    max_tokens: 1000,
    temperature: 0,
    messages,
  });
