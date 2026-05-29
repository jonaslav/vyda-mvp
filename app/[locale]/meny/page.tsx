import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { menu } from "@/content/menu";
import { restaurant } from "@/content/restaurant";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("menuTitle"),
    description: t("menuDescription"),
  };
}

export default async function MenyPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Menu");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-vyda-mustard-deep">
          {t("kicker")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-vyda-ink sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-vyda-muted">{t("preface")}</p>
      </header>

      <div className="mt-10 rounded-2xl border border-vyda-mustard/40 bg-vyda-mustard-soft px-5 py-4 text-sm text-vyda-ink sm:text-base">
        <strong className="font-medium">{t("phoneCallout")}</strong>{" "}
        <a
          href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
          className="font-medium text-vyda-mustard-deep hover:underline"
        >
          {restaurant.phone}
        </a>
      </div>

      <nav
        aria-label={t("jumpAria")}
        className="mt-10 flex flex-wrap justify-center gap-2 text-sm"
      >
        {menu.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-vyda-ink/10 px-4 py-1.5 text-vyda-ink/80 transition-colors hover:border-vyda-mustard hover:text-vyda-mustard-deep"
          >
            {cat.title[locale]}
          </a>
        ))}
      </nav>

      <div className="mt-16 space-y-16">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <h2 className="border-b border-vyda-mustard/40 pb-3 text-2xl font-semibold tracking-tight text-vyda-ink">
              {cat.title[locale]}
            </h2>
            <ul className="mt-6 divide-y divide-vyda-ink/5">
              {cat.items.map((item) => (
                <li key={item.code} className="flex items-baseline gap-4 py-4">
                  <span className="w-10 shrink-0 text-sm font-mono text-vyda-muted">
                    {item.code}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-vyda-ink">
                      {item.name[locale]}
                    </p>
                    {item.description[locale] && (
                      <p className="mt-1 text-sm text-vyda-muted">
                        {item.description[locale]}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-medium tabular-nums text-vyda-ink">
                    {item.priceNok} kr
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-20 text-center text-sm text-vyda-muted">
        {t("deliveryFooter")}{" "}
        <Link href="/kontakt" className="text-vyda-mustard-deep hover:underline">
          {t("deliveryLink")}
        </Link>
        .
      </p>
    </div>
  );
}
