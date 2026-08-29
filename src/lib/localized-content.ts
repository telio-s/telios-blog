import type { CollectionEntry } from "astro:content";

export type Locale = "en" | "th";
export type LocalizedEntry<T extends "articles" | "projects" | "consultingPackages"> = {
  en: CollectionEntry<T>;
  th: CollectionEntry<T>;
};

export const locales: Locale[] = ["en", "th"];

export const groupLocalizedEntries = <T extends "articles" | "projects" | "consultingPackages">(
  entries: CollectionEntry<T>[],
) => {
  const groups = new Map<string, Partial<LocalizedEntry<T>>>();

  entries.forEach((entry) => {
    const group = groups.get(entry.data.translationKey) ?? {};
    group[entry.data.locale] = entry;
    groups.set(entry.data.translationKey, group);
  });

  return Array.from(groups.entries()).map(([translationKey, group]) => {
    if (!group.en || !group.th) {
      throw new Error(`Missing localized content for "${translationKey}".`);
    }

    return {
      translationKey,
      entries: group as LocalizedEntry<T>,
    };
  });
};

export const getLocalizedEntryPairs = <T extends "articles" | "projects" | "consultingPackages">(
  entries: CollectionEntry<T>[],
) => groupLocalizedEntries(entries).map((item) => item.entries);

export const isPublicLocalizedEntry = <T extends "articles" | "projects" | "consultingPackages">(
  entry: LocalizedEntry<T>,
) => entry.en.data.public && entry.th.data.public;
