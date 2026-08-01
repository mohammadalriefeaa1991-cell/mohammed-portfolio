import Image from "next/image";

const links = [
  { href: "/#about", label: "نبذة" },
  { href: "/#services", label: "الخدمات" },
  { href: "/#portfolio", label: "الأعمال" },
  { href: "/#identity", label: "الهوية البصرية" },
  { href: "/blog", label: "المقالات" },
  { href: "/#contact", label: "تواصل" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2 focus-ring rounded-md">
          <Image src="/logo.png" alt="شعار محمد الرفاعي" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-lg font-extrabold text-ink">محمد الرفاعي</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-md text-sm font-medium text-ink/70 transition hover:text-indigo"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/00963998698501"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper transition hover:bg-indigo"
        >
          احجز استشارة
        </a>
      </div>
    </header>
  );
}
