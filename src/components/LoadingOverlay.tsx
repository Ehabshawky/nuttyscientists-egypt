// app/components/LoadingOverlay.tsx - نسخة مبسطة
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // تأخير بسيط لإظهار الـ animation
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback بعد 3 ثواني
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      id="loading-overlay"
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center transition-opacity duration-500"
      aria-hidden="true"
      role="presentation"
    >
      {/* اللوجو مع animation */}
      <div className="relative mb-8">
        {/* حلقة الدوران */}
        <div className="absolute -inset-4 border-4 border-nutty-blue/20 border-t-nutty-blue rounded-full animate-spin"></div>
        
        {/* اللوجو */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/Nutt Logo.png"
            alt="Nutty Scientists Logo"
            width={160}
            height={160}
            className="w-full h-full object-contain animate-pulse"
            priority
          />
        </div>
      </div>

      {/* النص */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Nutty Scientists
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Where Science Meets Fun!
        </p>
      </div>

      {/* نقاط تحميل */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-nutty-blue rounded-full animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          ></div>
        ))}
      </div>
    </div>
  );
}