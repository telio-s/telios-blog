import { translations } from "./translations";

export type Locale = keyof typeof translations;

export const locales = Object.keys(translations) as Locale[];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && locales.includes(value as Locale);

export const getTranslations = (lang: Locale) => translations[lang];

export const localizePath = (lang: Locale, path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const withoutLocale = normalizedPath.replace(/^\/(en|th)(?=\/|$)/, "") || "/";
  const suffix = withoutLocale === "/" ? "" : withoutLocale.replace(/\/$/, "");

  return `/${lang}${suffix}/`;
};

export const getLocalizedPathAlternates = (pathname: string) =>
  Object.fromEntries(locales.map((lang) => [lang, localizePath(lang, pathname)])) as Record<Locale, string>;

export const getAlternateLanguage = (lang: Locale): Locale => (lang === "en" ? "th" : "en");
