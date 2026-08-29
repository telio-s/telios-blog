export const contactEmail = "hello@telio-s.com";
export const contactMailto = `mailto:${contactEmail}`;

export const createContactMailto = (subject?: string) => {
  if (!subject) return contactMailto;

  return `${contactMailto}?subject=${encodeURIComponent(subject)}`;
};
