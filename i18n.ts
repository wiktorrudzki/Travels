import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { pl, en } from "./assets/locales";
import "intl-pluralrules";

export const defaultNS = "common";

export const resources = {
  pl: {
    common: pl.common,
  },
  en: {
    common: en.common,
  },
} as const;

export const ns = Object.keys(pl);

const locales = Localization.getLocales();

i18n.use(initReactI18next).init({
  lng: locales.length > 0 ? locales[0].languageCode || "" : "pl",
  fallbackLng: "pl",
  defaultNS,
  resources: {
    pl: {
      common: {
        siema: "dadsad",
      },
    },
    en: {
      common: {
        siema: "dadsad",
      },
    },
  },
  ns,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
