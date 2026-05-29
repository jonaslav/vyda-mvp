import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const t = useTranslations("Nav");
  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/meny", label: t("menu") },
    { href: "/kontakt", label: t("contact") },
  ] as const;

  return (
    <header className="border-b border-vyda-ink/10 bg-vyda-paper/95 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={t("toFront")}>
          <Image
            src="/images/vyda_logo.jpg"
            alt="VYDA Restaurant logo"
            width={48}
            height={48}
            priority
            className="rounded-full"
          />
          <span className="hidden sm:inline text-lg font-semibold tracking-wide text-vyda-ink">
            VYDA Restaurant
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <ul className="flex items-center gap-2 sm:gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-2 py-2 text-vyda-ink/80 hover:text-vyda-mustard-deep transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
