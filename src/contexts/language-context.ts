import { createContext, useContext } from "react";
import type { Language, PortfolioContent } from "../data/content";

export interface LanguageContextValue {
  content: PortfolioContent;
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
