// app/components/ClientScripts.tsx
"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // الكشف عن دعم اللمس
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    document.documentElement.classList.toggle("touch", isTouch);
    document.documentElement.classList.toggle("no-touch", !isTouch);

    // الكشف عن تقليل الحركة
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    document.documentElement.classList.toggle(
      "reduced-motion",
      prefersReducedMotion.matches
    );

    // استماع للتغييرات في تفضيلات الحركة
    prefersReducedMotion.addEventListener("change", (e) => {
      document.documentElement.classList.toggle("reduced-motion", e.matches);
    });

    // إضافة فئة عند التمرير
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      document.documentElement.classList.add("scrolling");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.documentElement.classList.remove("scrolling");
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    // إضافة فئة عند تحميل الصفحة
    document.documentElement.classList.add("loaded");

    // تحسين الوصول بلوحة المفاتيح
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.documentElement.classList.add("keyboard-navigation");
      }
    };

    const handleMouseDown = () => {
      document.documentElement.classList.remove("keyboard-navigation");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    // إصلاح ارتفاع 100vh على الجوال
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    // منع Double Tap Zoom على الجوال
    let lastTouchEnd = 0;
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("touchend", handleTouchEnd, { passive: false });

    // التنظيف
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
      document.removeEventListener("touchend", handleTouchEnd);
      prefersReducedMotion.removeEventListener("change", () => {});
    };
  }, []);

  return null; // هذا مكون للـ scripts فقط
}