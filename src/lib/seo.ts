import { defaultLocale, getLocalizedPathAlternates, type Locale } from "@/i18n";

export type HreflangLinks = Record<Locale | "x-default", string>;

export const getAbsoluteUrl = (pathOrUrl: string, base: URL | string) => new URL(pathOrUrl, base).toString();

export const getHreflangLinks = (pathname: string, base: URL | string): HreflangLinks => {
  const alternates = getLocalizedPathAlternates(pathname);

  return {
    en: getAbsoluteUrl(alternates.en, base),
    th: getAbsoluteUrl(alternates.th, base),
    "x-default": getAbsoluteUrl(alternates[defaultLocale], base),
  };
};
