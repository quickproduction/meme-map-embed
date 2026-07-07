import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Accessibility } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import brandCannabisPharm from "@/assets/brands/88dcc-canabis-pharm-israel.jpg.asset.json";
import brandBazelet from "@/assets/brands/424a2-bazelet.jpg.asset.json";
import brandTrichome from "@/assets/brands/8e8c0-thrichome.jpg.asset.json";
import brandTelecann from "@/assets/brands/0b6d0-telecan.jpg.asset.json";
import brandMedicannx from "@/assets/brands/91cb7-medicannx.jpg.asset.json";
import brandCanya from "@/assets/brands/d1c65-canya.jpg.asset.json";
import brandCannassure from "@/assets/brands/f0eff-cannasure.jpg.asset.json";
import brandBetter from "@/assets/brands/91995-better.jpg.asset.json";
import brandImc from "@/assets/brands/69144-imc.jpg.asset.json";
import brandTogether from "@/assets/brands/449c4-together.jpg.asset.json";
import heroAsset from "@/assets/hero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "אולטרה פארם — בית מרקחת לקנאביס רפואי | פתח תקווה" },
      {
        name: "description",
        content:
          "אולטרה פארם בפתח תקווה — בית מרקחת לקנאביס רפואי עם מגוון מותגי פרימיום (IMC, בזלת, Together, Better ועוד). בדקו זמינות מלאי והזמינו בקלות מטופלים עם רישיון.",
      },
      { property: "og:title", content: "אולטרה פארם — בית מרקחת לקנאביס רפואי" },
      {
        property: "og:description",
        content:
          "בית מרקחת מוביל לקנאביס רפואי בפתח תקווה — מגוון מותגי פרימיום, מלאי מתעדכן ושירות אישי למטופלים עם רישיון.",
      },
      { property: "og:url", content: "https://ultrapharm.co.il/" },
    ],
    links: [{ rel: "canonical", href: "https://ultrapharm.co.il/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          name: "אולטרה פארם",
          alternateName: "Ultra Pharm 2021 LTD",
          url: "https://ultrapharm.co.il/",
          telephone: "+972-53-348-6664",
          address: {
            "@type": "PostalAddress",
            streetAddress: "אבשלום דינוביץ 21",
            addressLocality: "פתח תקווה",
            addressCountry: "IL",
          },
          areaServed: "IL",
          medicalSpecialty: "Pharmacy",
        }),
      },
    ],
  }),
  component: Index,
});

// TODO: replace with your real values
const EMBED_URL = "https://ultra-pharm.jane.co.il/";

const BRANDS = [
  { name: "Cannabis Pharm Israel", src: brandCannabisPharm.url },
  { name: "Bazelet Group", src: brandBazelet.url },
  { name: "Trichome", src: brandTrichome.url },
  { name: "TeleCann", src: brandTelecann.url },
  { name: "MedicannX", src: brandMedicannx.url },
  { name: "Canya Pharmaceutical", src: brandCanya.url },
  { name: "Cannassure", src: brandCannassure.url },
  { name: "Better", src: brandBetter.url },
  { name: "IMC", src: brandImc.url },
  { name: "Together", src: brandTogether.url },
];
const MAP_EMBED =
  "https://www.google.com/maps?q=Avshalom+Dinovich+21,+Petah+Tikva,+Israel&output=embed";

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
          <a href="/" aria-label="Ultra Farm — Home">
            <img src={logoAsset.url} alt="Ultra Farm" className="h-14 w-auto" />
          </a>
        </div>
      </header>


      <main>
        {/* Hero */}
        <section
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroAsset.url})`,
            aspectRatio: "1920 / 700",
            minHeight: "300px",
          }}
          aria-label="Ultra Farm hero"
        />

        {/* Embedded site */}
        <section className="w-full py-4 sm:mx-auto sm:max-w-6xl sm:px-4 sm:py-8">
          <div className="overflow-hidden bg-muted sm:rounded-lg sm:border sm:border-border">
            <div className="embed-wrapper relative w-full">
              <iframe
                src={EMBED_URL}
                title="Embedded site"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Logos roller */}
        <section className="border-y border-border bg-muted/40 py-8" aria-label="Partners">
          <div className="logo-marquee group relative overflow-hidden">
            <div className="logo-track flex w-max gap-16 px-8">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div
                  key={i}
                  className="flex h-16 items-center"
                  aria-hidden={i >= BRANDS.length}
                >
                  <img
                    src={b.src}
                    alt={b.name}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section
          className="w-full py-16"
          style={{
            background: "linear-gradient(135deg, #3EC7B3 0%, #2A9D8F 100%)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
            <div
              className="overflow-hidden rounded-full border-4 border-white/30 shadow-2xl"
              style={{ width: "280px", height: "280px" }}
            >
              <iframe
                src={MAP_EMBED}
                title="Location map"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <h2 className="mt-8 text-2xl font-bold text-white">כתובתינו</h2>
            <p className="mt-2 text-lg text-white/90">
              אבשלום דינוביץ 21 - פתח-תקווה
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground">
          <span>כל הזכויות שמורות ל-אולטרה פארם 2021 בע״מ</span>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-foreground hover:underline underline-offset-4">תקנון האתר</Link>
            <Link to="/accessibility" className="hover:text-foreground hover:underline underline-offset-4">הסכם נגישות</Link>
          </div>
        </div>
      </footer>


      {/* Floating action buttons */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/972533486664"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צור קשר בוואטסאפ"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
        <Link
          to="/accessibility"
          aria-label="הצהרת נגישות"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        >
          <Accessibility size={28} />
        </Link>
      </div>
    </div>
  );
}
