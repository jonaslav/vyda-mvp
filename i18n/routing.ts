import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["no", "en"] as const,
  defaultLocale: "no",
});

export type AppLocale = (typeof routing.locales)[number];
