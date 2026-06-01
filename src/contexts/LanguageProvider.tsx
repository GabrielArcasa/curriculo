import { useEffect, useMemo, useState, type ReactNode } from "react";
import { contentByLanguage, type Language } from "../data/content";
import { LanguageContext, type LanguageContextValue } from "./language-context";

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage === "pt" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      content: contentByLanguage[language],
      language,
      toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
