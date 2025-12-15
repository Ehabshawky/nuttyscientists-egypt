"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const { t } = useTranslation();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      aria-label={
        mounted
          ? isDarkMode
            ? t("lightMode")
            : t("darkMode")
          : t("themeToggle")
      }
    >
      {mounted ? (
        isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        // Placeholder to avoid SSR/Client mismatch
        <span className="inline-block h-5 w-5" aria-hidden="true" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
