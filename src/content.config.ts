import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleCategories = [
  "Business x Tech",
  "Tech",
  "Money",
  "Life (Coming of Age)",
] as const;

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    locale: z.enum(["en", "th"]),
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.enum(articleCategories),
    public: z.boolean().default(true),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    locale: z.enum(["en", "th"]),
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.string(),
    tags: z.array(z.string()),
    public: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

const consultingPackages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/consulting-packages" }),
  schema: z.object({
    locale: z.enum(["en", "th"]),
    translationKey: z.string(),
    number: z.string(),
    name: z.string(),
    description: z.string(),
    recommendedFor: z.string(),
    startingPrice: z.string(),
    deliverables: z.array(z.string()),
    engagement: z.string(),
    notes: z.string().optional(),
    public: z.boolean().default(true),
  }),
});

export const collections = { articles, projects, consultingPackages };
