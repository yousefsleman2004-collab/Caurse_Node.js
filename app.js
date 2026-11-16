// ייבוא מודול העבודה עם קבצים (FileSystem) ב-Node.js
const fs = require('fs');

// קריאת תוכן שלושת קבצי הקלט בצורה סינכרונית ובקידוד טקסט utf-8
const file1 = fs.readFileSync('./text1.txt', 'utf-8');
const file2 = fs.readFileSync('./text2.txt', 'utf-8');
const file3 = fs.readFileSync('./text3.txt', 'utf-8');

// פיצול תוכן כל קובץ למערך של שורות בהתאם לסיומות השורות (מטפל במערכות הפעלה שונות \r\n או \n)
let result1 = file1.split(/\r?\n/);
let result2 = file2.split(/\r?\n/);
let result3 = file3.split(/\r?\n/);

// משתנה לאחסון הטקסט הסופי הממוזג
let result = "";

// מצביעים (Indices) למעקב אחר השורה הנוכחית בכל אחד משלושת הקבצים
let index1 = 0;
let index2 = 0;
let index3 = 0;

// לולאת ריצה שמתמשכת כל עוד ישנן שורות שטרם נקראו באחד מהקבצים
// (מיישם את הדרישה: אם אחד הקבצים קצר מהאחרים, ממשיכים להעתיק שורות מהקבצים האחרים)
while (index1 < result1.length || index2 < result2.length || index3 < result3.length) {
    
    // בדיקה והוספת שורה מהקובץ הראשון אם הוא עדיין לא הסתיים
    if (index1 < result1.length) {
        result += `${result1[index1]}\n`;
        index1++;
    }
    
    // בדיקה והוספת שורה מהקובץ השני אם הוא עדיין לא הסתיים
    if (index2 < result2.length) {
        result += `${result2[index2]}\n`;
        index2++;
    }

    // בדיקה והוספת שורה מהקובץ השלישי אם הוא עדיין לא הסתיים
    if (index3 < result3.length) {
        result += `${result3[index3]}\n`;
        index3++;
    }
}

// כתיבת התוצאה הסופית הממוזגת לקובץ חדש בשם output.txt
fs.writeFileSync('./output.txt', result);