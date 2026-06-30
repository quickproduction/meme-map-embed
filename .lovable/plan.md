צדקת — ל-jane.co.il יש URL ייעודי להטמעה ללא header: `https://jane.co.il/embed/store/ultra-pharm/menu`.

## שינויים ב-`src/routes/index.tsx`

1. עדכון `EMBED_URL` מ-`https://jane.co.il/store/ultra-pharm/` ל-`https://jane.co.il/embed/store/ultra-pharm/menu`.
2. ביטול ה"חיתוך" של 120px שהוספנו בהודעה הקודמת — להחזיר את ה-iframe ל-`absolute inset-0 h-full w-full` ללא `top` / `height` מותאמים ובלי `overflow-hidden` נוסף ב-wrapper.

לא נדרשים שינויים נוספים (CSS / רוטים / קומפוננטות).