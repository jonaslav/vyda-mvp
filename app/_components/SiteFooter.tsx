import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { restaurant } from "@/content/restaurant";
import { FacebookIcon } from "./icons";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const { address, phone, email, delivery, social } = restaurant;

  return (
    <footer className="mt-24 border-t border-vyda-ink/10 bg-vyda-ink text-vyda-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-vyda-mustard">VYDA Restaurant</h2>
          <p className="mt-2 text-sm text-vyda-paper/80">{t("tagline")}</p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-vyda-mustard">{t("visitUs")}</h3>
          <address className="not-italic mt-2 text-vyda-paper/80">
            {address.street}<br />
            {address.postalCode} {address.city}
          </address>
          <p className="mt-2">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-vyda-mustard">
              {phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${email}`} className="hover:text-vyda-mustard">
              {email}
            </a>
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-vyda-mustard">{t("orderDelivery")}</h3>
          <ul className="mt-2 space-y-1 text-vyda-paper/80">
            {delivery.map((d) => (
              <li key={d.name}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vyda-mustard"
                >
                  {d.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/kontakt" className="hover:text-vyda-mustard">
                {t("contactUs")}
              </Link>
            </li>
          </ul>
          <h3 className="mt-6 font-semibold text-vyda-mustard">{t("followUs")}</h3>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-vyda-paper/80 hover:text-vyda-mustard"
            aria-label={t("facebookLabel")}
          >
            <FacebookIcon className="h-5 w-5" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
      <div className="border-t border-vyda-paper/10">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-vyda-paper/60">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
