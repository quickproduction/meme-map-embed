import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultra Farm" },
      { name: "description", content: "Ultra Farm — embedded site with logo roller, location, and accessibility info." },
      { property: "og:title", content: "Ultra Farm" },
      { property: "og:description", content: "Ultra Farm — embedded site with logo roller, location, and accessibility info." },
    ],
  }),
  component: Index,
});

// TODO: replace with your real values
const EMBED_URL = "https://example.com";
const EMBED_LINK = "https://example.com";

const BRANDS = ["Acme", "Globex", "Initech", "Umbrella", "Soylent", "Wayne", "Stark", "Wonka"];
const MAP_EMBED =
  "https://www.google.com/maps?q=Times+Square,New+York,NY&output=embed";
const MEME_IMAGE = "https://placehold.co/600x600?text=Meme";

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4">
          <a href="/" aria-label="Ultra Farm — Home">
            <img src={logoAsset.url} alt="Ultra Farm" className="h-14 w-auto" />
          </a>
        </div>
      </header>


      <main>
        {/* Embedded site */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={EMBED_URL}
                title="Embedded site"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="mt-3 text-sm">
            <a
              href={EMBED_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Open site in a new tab →
            </a>
          </div>
        </section>

        {/* Logos roller */}
        <section className="border-y border-border bg-muted/40 py-8" aria-label="Partners">
          <div className="logo-marquee group relative overflow-hidden">
            <div className="logo-track flex w-max gap-16 px-8">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div
                  key={i}
                  className="flex h-12 items-center text-xl font-semibold text-muted-foreground"
                  aria-hidden={i >= BRANDS.length}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map + meme */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src={MAP_EMBED}
                title="Location map"
                className="h-80 w-full md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src={MEME_IMAGE}
                alt="Location meme"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="border-t border-border bg-muted/40" aria-labelledby="a11y-heading">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="a11y-heading" className="text-2xl font-bold">
              Accessibility
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We're committed to making this site accessible to everyone. We aim to
              conform with WCAG 2.1 Level AA. If you encounter any barriers or need
              assistance, contact us at{" "}
              <a
                className="text-primary underline underline-offset-4"
                href="mailto:accessibility@example.com"
              >
                accessibility@example.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ultra Farm
        </div>
      </footer>
    </div>
  );
}
