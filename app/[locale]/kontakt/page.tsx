import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { restaurant } from "@/content/restaurant";
import { FacebookIcon } from "../../_components/icons";
import type { AppLocale } from "@/i18n/routing";

const dayKeys = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  const tDay = await getTranslations("Days");

  const { address, phone, email, hours, delivery, features, social } = restaurant;
  const mapsQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}`
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-vyda-mustard-deep">
          {t("kicker")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-vyda-ink sm:text-5xl">
          {t("title")}
        </h1>
      </header>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">{t("address")}</h2>
          <address className="not-italic mt-2 text-vyda-muted">
            {address.street}<br />
            {address.postalCode} {address.city}
          </address>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">{t("callOrWrite")}</h2>
          <p className="mt-2 text-sm text-vyda-muted">{t("phoneNote")}</p>
          <p className="mt-3 text-lg">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-vyda-ink hover:text-vyda-mustard-deep"
            >
              {phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${email}`}
              className="text-vyda-ink hover:text-vyda-mustard-deep"
            >
              {email}
            </a>
          </p>
        </section>

        <section className="sm:col-span-2">
          <h2 className="text-lg font-semibold text-vyda-ink">{t("hours")}</h2>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
            {dayKeys.map((day) => (
              <div key={day} className="contents">
                <dt className="text-vyda-muted">{tDay(day)}</dt>
                <dd className="text-vyda-ink">
                  {hours[day] ?? (
                    <span className="text-vyda-muted">{t("closed")}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-vyda-muted">{t("hoursNote")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">{t("orderDelivery")}</h2>
          <ul className="mt-2 space-y-1">
            {delivery.map((d) => (
              <li key={d.name}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vyda-mustard-deep hover:underline"
                >
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">{t("amenities")}</h2>
          <ul className="mt-2 space-y-1 text-sm text-vyda-muted">
            {features.map((f, i) => (
              <li key={i}>• {f[locale]}</li>
            ))}
          </ul>
        </section>

        <section className="sm:col-span-2">
          <h2 className="text-lg font-semibold text-vyda-ink">{t("followUs")}</h2>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-vyda-mustard-deep hover:underline"
            aria-label="VYDA Restaurant Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
            <span>Facebook</span>
          </a>
        </section>
      </div>

      <section aria-label={t("mapAria")} className="mt-12">
        <iframe
          src={`https://maps.google.com/maps?q=${mapsQuery}&hl=${locale}&output=embed`}
          title={t("mapTitle", { name: restaurant.name })}
          width="100%"
          height="380"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl border border-vyda-ink/10"
        />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-vyda-mustard-deep hover:underline"
        >
          {t("openInMaps")}
        </a>
      </section>
    </div>
  );
}
