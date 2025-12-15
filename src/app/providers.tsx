// app/providers.tsx
"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import Chatbot from "../components/sections/Chatbot";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
