import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות — אולטרה פארם" },
      {
        name: "description",
        content:
          "הצהרת הנגישות של אתר אולטרה פארם — התאמות נגישות שבוצעו, אפשרויות בתפריט הנגישות ודרכי פנייה לממונה הנגישות, בהתאם לתקן ישראלי 5568 (WCAG 2.1 AA).",
      },
      { property: "og:title", content: "הצהרת נגישות — אולטרה פארם" },
      {
        property: "og:description",
        content:
          "הצהרת הנגישות של אתר אולטרה פארם, התאמות שבוצעו ודרכי פנייה לממונה הנגישות.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ultrapharm.co.il/accessibility" },
    ],
    links: [{ rel: "canonical", href: "https://ultrapharm.co.il/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground" dir="rtl">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
          <Link to="/" aria-label="Ultra Pharm 2021 LTD — Home">
            <span className="text-xl font-bold">Ultra Pharm 2021 LTD</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold">הצהרת נגישות</h1>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            אתר <strong>Ultra Pharm 2021 LTD (ultrapharm.co.il)</strong> רואה חשיבות עליונה במתן שירות שוויוני ונגיש לכלל הציבור, לרבות אנשים עם מוגבלות. אנו פועלים להנגיש את האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ובהתאם להנחיות תקן ישראלי 5568 ברמה AA (WCAG 2.1).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">התאמות נגישות שבוצעו באתר</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>שינוי חזותי בולט וברור בעת ריחוף מעל אלמנטים לחיצים (קליקבילים) באתר — תפריטים, קישורים וכפתורים.</li>
            <li>הוספת מנגנונים ייעודיים לעצירת סרטוני וידאו המתנגנים בעמודי האתר.</li>
            <li>התקנת רכיב ייעודי המאפשר שינוי צבע הרקע לשחור באלמנטים מסוימים, ליצירת ניגודיות גבוהה בין הרכיב/התוכן לרקע.</li>
            <li>קבלת פוקוס בולט הכולל מסגרת ברורה בעת ניווט באתר באמצעות המקלדת.</li>
            <li>מבנה אתר נוח ופשוט לתפעול באמצעות העכבר ובאמצעות המקלדת.</li>
            <li>הוספת מפת אתר מלאה ומפורטת הכוללת את כל עמודי האתר, להתמצאות טובה וקלה יותר.</li>
            <li>מתן אפשרות מהירה למעבר לתוכן המרכזי בעמוד בעת לחיצה על המקש TAB.</li>
            <li>הוספת טקסט אלטרנטיבי מתאים לתמונות המופיעות באתר.</li>
            <li>שימוש בכותרות מתאימות ותיוגן בהתאם למידע המופיע בהן ולמבנה העמוד.</li>
            <li>הוספת לייבלים מתאימים וברורים לכל שדות הקלט באתר.</li>
            <li>שימוש בפקודת Aria Label להתאמת הרכיבים השונים לתוכנות הקראת מסך.</li>
            <li>שימוש בשפה פשוטה ובהירה בכל עמודי האתר.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">אפשרויות בתפריט הנגישות</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>ניווט מקלדת</li>
            <li>פונט קריא</li>
            <li>קו תחתון בקישורים</li>
            <li>סימון קישורים עם צבע רקע</li>
            <li>ניקוי זיכרון "עוגיות" (Cookies)</li>
            <li>תמונות באפור</li>
            <li>היפוך צבעים</li>
            <li>הסרת אנימציות</li>
            <li>הסרת עיצוב (CSS)</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">תאימות האתר</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>האתר מותאם לכל סוגי הדפדפנים המודרניים.</li>
            <li>האתר מותאם לכל סוגי הפלטפורמות — מובייל, טאבלט ודסקטופ.</li>
            <li>האתר מותאם לשימוש במקלדת בלבד.</li>
            <li>כל התמונות באתר מכילות טקסט חליפי (ALT).</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">התאמות ומגבלות</h2>
          <p>
            ייתכן שחלק מהתכנים המוטמעים מצד ג' (כגון מפות Google, אתרים מוטמעים ב־iframe או תוכן חיצוני אחר) אינם כפופים באופן מלא לשליטתנו, ולכן ייתכנו מגבלות נגישות בתכנים אלה. אנו משתדלים לבחור שירותים התומכים בנגישות ככל שניתן.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">נגישות בסניפים הפיזיים</h2>
          <p>
            הסניפים הפיזיים מונגשים על פי חוק, כולל רמפה נגישה לאנשים עם מוגבלות בניידות.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">דרכי פנייה לבקשות ומשוב</h2>
          <p>
            אם נתקלתם בבעיית נגישות או שנדרשת לכם התאמה מיוחדת, נשמח לשמוע מכם ולטפל בבקשה בהקדם האפשרי.
          </p>
          <p>
            ניתן לפנות אלינו בדואר אלקטרוני: <a href="mailto:accessibility@example.com" className="text-primary underline underline-offset-4">accessibility@example.com</a>
          </p>
          <p>
            פנייתכם תטופל על ידי ממונה הנגישות של האתר, ובמידת הצורך תועבר לטיפול מקצועי נוסף.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">עדכון ההצהרה</h2>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן הצהרת נגישות זו מעת לעת, בהתאם לשינויים ברגולציה, בשירותים המוצעים באתר או בהנחיות הנגישות. עדכונים יפורסמו בעמוד זה וייכנסו לתוקף ממועד הפרסום.
          </p>
        </div>

      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
          <Link to="/" className="text-primary underline underline-offset-4">חזרה לעמוד הראשי</Link>
          <span className="mx-2">|</span>
          <span>© {new Date().getFullYear()} Ultra Pharm 2021 LTD</span>
        </div>
      </footer>
    </div>
  );
}
