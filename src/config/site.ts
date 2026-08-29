export const contactEmail = "hello@example.com";
export const contactMailto = `mailto:${contactEmail}`;

export const createContactMailto = (subject?: string) => {
  if (!subject) return contactMailto;

  return `${contactMailto}?subject=${encodeURIComponent(subject)}`;
};
