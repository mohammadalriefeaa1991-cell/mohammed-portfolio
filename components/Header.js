"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/#about", label: "نبذة" },
  { href: "/#services", label: "الخدمات" },
  { href: "/#portfolio", label: "الأعمال" },
  { href: "/#identity", label: "الهوية البصرية" },
  { href: "/case-studies", label: "دراسات الحالة" },
  { href: "/blog", label: "المقالات" },
  { href: "/#contact", label: "تواصل" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="focus-ring flex items-center gap-2 rounded-md">
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

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/00963998698501"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper transition hover:bg-indigo sm:inline-block"
          >
            احجز استشارة
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/5 bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-3 text-base font-medium text-ink/80 transition hover:bg-ink/5 hover:text-indigo"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/00963998698501"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-bold text-paper"
            >
              احجز استشارة
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
