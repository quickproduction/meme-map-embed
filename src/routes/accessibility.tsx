import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הסכם נגישות — Ultra Farm" },
      { name: "description", content: "הסכם נגישות של אתר Ultra Farm" },
      { property: "og:title", content: "הסכם נגישות — Ultra Farm" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://meme-map-embed.lovable.app/accessibility" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground" dir="rtl">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
          <Link to="/" aria-label="Ultra Farm — Home">
            <span className="text-xl font-bold">Ultra Farm</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold">הסכם נגישות</h1>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            אתר <strong>Ultra Farm (ultrapharm.co.il)</strong> מאמץ את עקרונות הנגישות ופועל לאפשר שימוש נוח, שוויוני ויעיל עבור כלל המשתמשים, לרבות אנשים עם מוגבלויות.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">מחויבותינו לנגישות</h2>
          <p>
            אנו פועלים בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ומיישמים את עקרונות הנגישות בהתאם להנחיות תקן ישראלי 5568 (WCAG 2.1 ברמה AA).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">אמצעי נגישות באתר</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>תמיכה בניווט באמצעות מקלדת (ללא עכבר).</li>
            <li>ניגודיות צבעים מספקת בין טקסט לרקע.</li>
            <li>תיאורי חלופיים (alt text) לתמונות וללוגואים.</li>
            <li>מבנה HTML סמנטי המאפשר קריאה באמצעות תוכנות קורא מסך.</li>
            <li>אפשרות להגדלת טקסט באמצעות דפדפן.</li>
            <li>קישורים וכפתורים ברורים ומובנים.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">התאמות ומגבלות</h2>
          <p>
            ייתכן כי חלק מהתכנים המוטמעים מצד ג' (כגון מפות Google, אתרים מוטמעים ב־iframe או תוכן חיצוני אחר) אינם כפופים באופן מלא לשליטתנו, ולכן ייתכנו מגבלות נגישות בתכנים אלה. אנו משתדלים לבחור שירותים התומכים בנגישות ככל שניתן.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">דרכי פנייה לבקשות ומשוב</h2>
          <p>
            אם נתקלתם בבעיית נגישות או אם נדרשת התאמה מיוחדת, נשמח לשמוע מכם ולטפל בבקשה בהקדם האפשרי.
          </p>
          <p>
            ניתן לפנות אלינו בדואר אלקטרוני: <a href="mailto:accessibility@example.com" className="text-primary underline underline-offset-4">accessibility@example.com</a>
          </p>
          <p>
            פנייתכם תטופל על ידי ממונה הנגישות של האתר, ובמידת הצורך תועבר לטיפול מקצועי נוסף.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">עדכון הסכם</h2>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן הסכם נגישות זה מעת לעת, בהתאם לשינויים ברגולציה, בשירותים המוצעים באתר או בהנחיות הנגישות. עדכונים יפורסמו בעמוד זה וייכנסו לתוקף ממועד הפרסום.
          </p>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xlKeypad px-4 py-6 text-sm text-muted-foreground">
          <Link to="/" className="text-primary underline underline-offset-4">חזרה לעמוד הראשי</Link>
          <span className="mx-2">|</span>
          <span>© {new Date().getFullYear()} Ultra Farm</span>
        </div>
      </footer>
    </div>
  );
}
