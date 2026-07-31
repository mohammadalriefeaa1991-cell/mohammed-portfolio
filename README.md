# موقع محمد الرفاعي — بورتفوليو

## 1) التشغيل محلياً (داخل VS Code)

افتح مجلد المشروع في VS Code، ثم افتح Terminal (Ctrl+`) ونفّذ:

```
npm install
npm run dev
```

افتح المتصفح على: http://localhost:3000

عدّل أي نص مباشرة داخل ملفات `components/*.js` والصفحة هتحدّث تلقائياً.

## 2) رفع المشروع على GitHub

```
git init
git add .
git commit -m "أول نسخة من موقع البورتفوليو"
```

بعدين على GitHub أنشئ مستودع (Repository) جديد فاضي باسم مثلاً `mohammed-portfolio`،
وبعدين نفّذ الأوامر اللي بتظهرلك بصفحة GitHub، شبيهة بـ:

```
git remote add origin https://github.com/USERNAME/mohammed-portfolio.git
git branch -M main
git push -u origin main
```

## 3) النشر على Vercel

1. سجّل دخول على vercel.com بحساب GitHub نفسه.
2. اضغط "Add New Project".
3. اختر المستودع `mohammed-portfolio` من القائمة.
4. اترك كل الإعدادات كما هي (Vercel بيتعرف على Next.js تلقائياً) واضغط Deploy.
5. بعد دقيقة تقريباً رح ياخدك رابط جاهز زي `mohammed-portfolio.vercel.app`.

أي تعديل تسويه بعدين وترفعه بـ `git push`، رح ينشر تلقائياً على نفس الرابط.

## 4) إضافة أعمالك السابقة لاحقاً

افتح `components/Portfolio.js`، وبدّل كل عنصر بمشروع حقيقي (عنوان، وصف، وصورة
حطها بمجلد `public` واستخدمها زي ما استُخدم `logo.png`).

## الألوان المستخدمة (مأخوذة من اللوغو)

- إنديغو: `#3B2FA0`
- أزرق: `#3E6FE0`
- سماوي: `#5FC4EC`
- ماجنتا: `#9C3E86`
- الخلفية: `#FAFAFC`
