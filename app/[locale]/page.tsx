import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { restaurant } from "@/content/restaurant";
import { menu } from "@/content/menu";
import type { AppLocale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const featured =
    menu.find((c) => c.id === "tradisjon")?.items.slice(0, 4) ?? [];

  return (
    <>
      <section className="bg-vyda-mustard-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-vyda-mustard-deep">
              {t("kicker")}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-vyda-ink sm:text-5xl">
              {t("heroHeading")}
            </h1>
            <p className="mt-6 max-w-md text-lg text-vyda-muted">
              {t("heroBody")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/meny"
                className="rounded-full bg-vyda-ink px-6 py-3 text-sm font-medium text-vyda-paper transition-colors hover:bg-vyda-mustard-deep"
              >
                {t("seeMenu")}
              </Link>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-vyda-ink/20 px-6 py-3 text-sm font-medium text-vyda-ink transition-colors hover:border-vyda-mustard-deep hover:text-vyda-mustard-deep"
              >
                {t("callCta", { phone: restaurant.phone })}
              </a>
            </div>
            <p className="mt-4 text-sm text-vyda-muted">{t("phoneNote")}</p>
          </div>
          <figure className="flex flex-col items-center gap-3 sm:items-end">
            <Image
              src="/images/vyda_food1.jpg"
              alt={t("heroImageAlt")}
              width={720}
              height={480}
              priority
              className="rounded-2xl shadow-md object-cover"
            />
            <figcaption className="text-xs uppercase tracking-widest text-vyda-mustard-deep">
              {t("heroImageCaption")}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-vyda-ink sm:text-3xl">
            {t("favorites")}
          </h2>
          <Link
            href="/meny"
            className="text-sm font-medium text-vyda-mustard-deep hover:underline"
          >
            {t("fullMenuLink")}
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <li
              key={item.code}
              className="rounded-2xl border border-vyda-ink/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-vyda-mustard-deep">
                #{item.code}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-vyda-ink">
                {item.name[locale]}
              </h3>
              <p className="mt-2 text-sm text-vyda-muted">
                {item.description[locale]}
              </p>
              <p className="mt-4 text-sm font-medium text-vyda-ink">
                {item.priceNok} kr
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
