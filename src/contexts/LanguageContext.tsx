"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window === "undefined") return "en";
    const cookieMatch = document.cookie
      .split("; ")
      .find((c) => c.startsWith("language="));
    const cookieLanguage = cookieMatch?.split("=")[1];
    return (localStorage.getItem("language") ||
      cookieLanguage ||
      "en") as string;
  });

  useEffect(() => {
    const savedLanguage = language;
    i18n.changeLanguage(savedLanguage);
    // Update HTML attributes for RTL support
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLanguage;
    // Ensure a cookie is set so SSR matches the client initial language
    if (typeof document !== "undefined") {
      document.cookie = `language=${savedLanguage}; path=/; max-age=${
        60 * 60 * 24 * 365
      }`;
    }
  }, [i18n, language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    // Set a cookie so server-side rendering can pick the language at request time
    if (typeof document !== "undefined") {
      document.cookie = `language=${newLanguage}; path=/; max-age=${
        60 * 60 * 24 * 365
      }`; // 1 year
    }

    // Update HTML attributes for RTL support
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
