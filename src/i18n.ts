import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

// Sync document lang attribute on initial load and whenever language changes
const updateDocumentLanguage = (lng: string) => {
    document.documentElement.lang = lng;
};

// Set language on initial load
updateDocumentLanguage(i18n.language || "en");

// Update language dynamically on changes
i18n.on("languageChanged", (lng) => {
    updateDocumentLanguage(lng);
});

export default i18n;