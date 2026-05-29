import type { Metadata } from "next";
import { restaurant } from "@/content/restaurant";
import { FacebookIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Adresse, åpningstider og kontaktinformasjon til VYDA Restaurant i Trondheim.",
};

const dayLabels: Record<string, string> = {
  monday: "Mandag",
  tuesday: "Tirsdag",
  wednesday: "Onsdag",
  thursday: "Torsdag",
  friday: "Fredag",
  saturday: "Lørdag",
  sunday: "Søndag",
};

export default function KontaktPage() {
  const { address, phone, email, hours, delivery, features, social } = restaurant;
  const mapsQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}`
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-vyda-mustard-deep">
          Besøk oss
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-vyda-ink sm:text-5xl">
          Kontakt VYDA
        </h1>
      </header>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">Adresse</h2>
          <address className="not-italic mt-2 text-vyda-muted">
            {address.street}<br />
            {address.postalCode} {address.city}
          </address>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">Ring eller skriv</h2>
          <p className="mt-2 text-sm text-vyda-muted">
            Bord og takeaway bestilles på telefon.
          </p>
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
          <h2 className="text-lg font-semibold text-vyda-ink">Åpningstider</h2>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
            {Object.entries(hours).map(([day, value]) => (
              <div key={day} className="contents">
                <dt className="text-vyda-muted">{dayLabels[day]}</dt>
                <dd className="text-vyda-ink">
                  {value ?? <span className="text-vyda-muted">Stengt</span>}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-vyda-muted">
            Avvik kan forekomme på helligdager — ring gjerne for å være sikker.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-vyda-ink">Bestill levering</h2>
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
          <h2 className="text-lg font-semibold text-vyda-ink">Hos oss</h2>
          <ul className="mt-2 space-y-1 text-sm text-vyda-muted">
            {features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </section>

        <section className="sm:col-span-2">
          <h2 className="text-lg font-semibold text-vyda-ink">Følg oss</h2>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-vyda-mustard-deep hover:underline"
            aria-label="VYDA Restaurant på Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
            <span>Facebook</span>
          </a>
        </section>
      </div>

      <section aria-label="Kart" className="mt-12">
        <iframe
          src={`https://maps.google.com/maps?q=${mapsQuery}&hl=no&output=embed`}
          title={`Kart over ${restaurant.name}`}
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
          Åpne i Google Maps →
        </a>
      </section>
    </div>
  );
}
