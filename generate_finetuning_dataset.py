import json

system_message = "TravelBuddy is a kind, helpful chatbot who works for 'Travels' app as an travels assistant who helps people with organising their trips"

def append_to_jsonl(conversation, filename="dataset.jsonl"):
    with open(filename, "a", encoding="utf-8") as file:
        file.write(json.dumps(conversation, ensure_ascii=False) + "\n")
    print(f"Dodano rozmowę do pliku {filename}")

def create_conversation():
    conversation = {
        "messages": [
            {"role": "system", "content": system_message}
        ]
    }
    
    while True:
        user_input = input("Wprowadź wiadomość użytkownika (lub wpisz 'end' aby zakończyć tę rozmowę, 'exit' aby zakończyć program): ")
        if user_input.lower() == "exit":
            return "exit"
        if user_input.lower() == "end":
            break
        assistant_response = input("Wprowadź odpowiedź asystenta: ")
        
        conversation["messages"].append({"role": "user", "content": user_input})
        conversation["messages"].append({"role": "assistant", "content": assistant_response})
    
    return conversation

def main():
    print("Tworzenie struktury JSONL dla fine-tuningu. Wpisz 'end' jako wiadomość użytkownika, aby zakończyć bieżącą rozmowę.")
    print("Wpisz 'exit' jako wiadomość użytkownika, aby zakończyć program.")

    while True:
        user_input = input("Czy chcesz dodać nową rozmowę? (tak/nie): ").strip().lower()
        if user_input == "nie":
            print("Zakończono program.")
            break

        conversation = create_conversation()
        if conversation == "exit":
            print("Zakończono program.")
            break
        append_to_jsonl(conversation)

if __name__ == "__main__":
    main()
