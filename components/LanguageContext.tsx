import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { content, Lang } from "@/lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)["en"] };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: content.en,
});

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "th") {
        setLangState(saved);
      } else if (navigator.language?.toLowerCase().startsWith("th")) {
        setLangState("th");
      }
    } catch {
      // storage unavailable — keep default
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
