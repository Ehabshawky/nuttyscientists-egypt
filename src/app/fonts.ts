// app/fonts.ts
import { 
  El_Messiri, 
  Cairo, 
  Almarai, 
  Tajawal, 
  Noto_Sans_Arabic,
  IBM_Plex_Sans_Arabic,

} from 'next/font/google';
import { Poppins, Inter, Roboto, Open_Sans } from 'next/font/google';

// Use ReturnType to derive the NextFont type since it's not exported directly
type NextFont = ReturnType<typeof Poppins>;

// ===========================================
// Type Definitions
// ===========================================

export type FontLanguage = 'ar' | 'en';
export interface FontConfig {
  font: NextFont;
  className: string;
  fallback: string;
  variable: string;
}

// ===========================================
// Arabic Fonts (Optimized for Performance)
// ===========================================

/**
 * El Messiri - Primary Arabic font (only one with preload)
 */
export const elMessiri = El_Messiri({
  subsets: ['arabic', 'latin'],
  variable: '--font-el-messiri',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
});

/**
 * Cairo - Secondary Arabic font (no preload for performance)
 */
export const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '500', '700'], // Reduced weights for better performance
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
  fallback: ['Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
});

/**
 * Almarai - Optional modern Arabic font
 */
export const almarai = Almarai({
  subsets: ['arabic', 'latin'],
  variable: '--font-almarai',
  weight: ['400', '700'], // Minimal weights
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

/**
 * Tajawal - Excellent for reading (backup)
 */
export const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  weight: ['400', '700'], // Minimal weights
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

// Optional fonts (can be dynamically loaded if needed)
export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-noto-sans-arabic',
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-ibm-plex-sans-arabic',
  weight: ['400', '600'],
  display: 'swap',
  preload: false,
});

// ===========================================
// English Fonts (Optimized)
// ===========================================

/**
 * Poppins - Primary English font (with preload)
 */
export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'], // Reduced from 9 to 5
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

/**
 * Inter - System-like font (secondary)
 */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'], // Minimal weights
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

/**
 * Roboto - Classic font (optional)
 */
export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'], // Minimal weights
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700'], // Minimal weights
  display: 'swap',
  preload: false,
});

// ===========================================
// Font Selection & Configuration
// ===========================================

export const FONT_CONFIGS: Record<FontLanguage, FontConfig[]> = {
  ar: [
    {
      font: elMessiri,
      className: elMessiri.className,
      fallback: 'var(--font-el-messiri), El Messiri, Cairo, Tajawal, sans-serif',
      variable: elMessiri.variable
    },
    {
      font: cairo,
      className: cairo.className,
      fallback: 'var(--font-cairo), Cairo, El Messiri, sans-serif',
      variable: cairo.variable
    }
  ],
  en: [
    {
      font: poppins,
      className: poppins.className,
      fallback: 'var(--font-poppins), Poppins, Inter, system-ui, sans-serif',
      variable: poppins.variable
    },
    {
      font: inter,
      className: inter.className,
      fallback: 'var(--font-inter), Inter, system-ui, sans-serif',
      variable: inter.variable
    }
  ]
};

/**
 * Get optimized font configuration based on language
 */
export function getFontForLanguage(language: FontLanguage = 'en'): FontConfig {
  return FONT_CONFIGS[language][0]; // Return primary font
}

/**
 * Get all font classes for a language
 */
export function getFontClasses(language: FontLanguage = 'en'): string {
  const primary = getFontForLanguage(language);
  const secondary = FONT_CONFIGS[language][1];
  
  // Only load primary font initially, secondary can load async
  return `${primary.className} ${language === 'ar' ? 'font-arabic' : 'font-english'}`;
}

/**
 * Get font variables for CSS/JS use
 */
export function getFontVariables(language: FontLanguage = 'en'): {
  primary: string;
  secondary: string;
  family: string;
} {
  const primary = FONT_CONFIGS[language][0];
  const secondary = FONT_CONFIGS[language][1];
  
  return {
    primary: primary.variable,
    secondary: secondary.variable,
    family: primary.fallback
  };
}

/**
 * Generate optimized font face CSS for performance
 */
export function generateOptimizedFontFaceCSS(): string {
  return `
    @font-face {
      font-family: 'Arabic Font Fallback';
      size-adjust: 105%;
      ascent-override: 95%;
      descent-override: 25%;
      line-gap-override: 0%;
      src: local('Segoe UI'), local('Tahoma'), local('Arial');
    }
    
    @font-face {
      font-family: 'English Font Fallback';
      size-adjust: 98%;
      ascent-override: 100%;
      descent-override: 20%;
      line-gap-override: 0%;
      src: local('Segoe UI'), local('Arial'), local('Helvetica');
    }
    
    /* Font loading states */
    .font-loading {
      visibility: hidden;
      opacity: 0;
    }
    
    .font-loaded {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s ease-in;
    }
  `;
}

/**
 * Utility to detect if font is likely loaded
 */
export function createFontLoadObserver(
  onLoad: () => void,
  timeout: number = 3000
): void {
  if (typeof document === 'undefined') return;
  
  const timer = setTimeout(onLoad, timeout);
  
  document.fonts.ready
    .then(() => {
      clearTimeout(timer);
      onLoad();
    })
    .catch(() => {
      clearTimeout(timer);
      onLoad();
    });
}

// ===========================================
// Export Constants
// ===========================================

export const PRIMARY_FONTS = {
  arabic: elMessiri,
  english: poppins
} as const;

export const SECONDARY_FONTS = {
  arabic: cairo,
  english: inter
} as const;

export const FONT_VARIABLES = {
  arabic: {
    primary: elMessiri.variable,
    secondary: cairo.variable,
    tertiary: tajawal.variable
  },
  english: {
    primary: poppins.variable,
    secondary: inter.variable,
    tertiary: roboto.variable
  }
} as const;

/**
 * Tailwind CSS configuration helper
 */
export const tailwindFontConfig = {
  fontFamily: {
    'arabic-primary': ['var(--font-el-messiri)', 'El Messiri', 'Cairo', 'sans-serif'],
    'arabic-secondary': ['var(--font-cairo)', 'Cairo', 'El Messiri', 'sans-serif'],
    'english-primary': ['var(--font-poppins)', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
    'english-secondary': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  }
} as const;