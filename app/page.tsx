import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/content/restaurant";
import { menu } from "@/content/menu";

export default function Home() {
  const featured = menu
    .find((c) => c.id === "tradisjon")
    ?.items.slice(0, 4) ?? [];

  return (
    <>
      <section className="bg-vyda-mustard-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-vyda-mustard-deep">
              Vietnamesisk kjøkken i Trondheim
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-vyda-ink sm:text-5xl">
              Ekte vietnamesiske smaker, midt i byen.
            </h1>
            <p className="mt-6 max-w-md text-lg text-vyda-muted">
              Phở, bún, friske vårruller og varme wokretter. Lagd fra bunnen, servert med hjerte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/meny"
                className="rounded-full bg-vyda-ink px-6 py-3 text-sm font-medium text-vyda-paper transition-colors hover:bg-vyda-mustard-deep"
              >
                Se menyen
              </Link>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-vyda-ink/20 px-6 py-3 text-sm font-medium text-vyda-ink transition-colors hover:border-vyda-mustard-deep hover:text-vyda-mustard-deep"
              >
                Ring {restaurant.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-vyda-muted">
              Bord og takeaway bestilles på telefon.
            </p>
          </div>
          <figure className="flex flex-col items-center gap-3 sm:items-end">
            <Image
              src="/images/vyda_food1.jpg"
              alt="Phở Bò — vietnamesisk risnudelsuppe med biff og friske urter"
              width={720}
              height={480}
              priority
              className="rounded-2xl shadow-md object-cover"
            />
            <figcaption className="text-xs uppercase tracking-widest text-vyda-mustard-deep">
              Phở Bò — husets klassiker
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-vyda-ink sm:text-3xl">
            Husets favoritter
          </h2>
          <Link
            href="/meny"
            className="text-sm font-medium text-vyda-mustard-deep hover:underline"
          >
            Se hele menyen →
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
              <h3 className="mt-2 text-lg font-semibold text-vyda-ink">{item.name}</h3>
              <p className="mt-2 text-sm text-vyda-muted">{item.description}</p>
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
