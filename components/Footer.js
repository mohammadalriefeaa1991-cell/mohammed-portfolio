export default function Footer() {
  return (
    <footer className="bg-ink text-paper/40">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs">
        © {new Date().getFullYear()} محمد الرفاعي — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
