"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { i18n } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center space-x-2"
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">
        {mounted ? (
          i18n.language === "en" ? (
            "AR"
          ) : (
            "EN"
          )
        ) : (
          <span
            className="inline-block w-6 h-4 bg-gray-300 dark:bg-gray-600 rounded"
            aria-hidden="true"
          />
        )}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
