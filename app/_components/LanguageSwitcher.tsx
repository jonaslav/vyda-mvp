"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const otherLocale: AppLocale = locale === "no" ? "en" : "no";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="rounded-full border border-vyda-ink/15 px-3 py-1.5 text-xs font-medium text-vyda-ink/70 hover:border-vyda-mustard hover:text-vyda-mustard-deep transition-colors"
      aria-label={`Switch language to ${otherLocale.toUpperCase()}`}
    >
      {t("switchTo")}
    </Link>
  );
}
