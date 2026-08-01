import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthLine from "@/components/GrowthLine";
import { caseStudies } from "@/data/case-studies";

export const metadata = {
  title: "دراسات الحالة | محمد الرفاعي",
  description: "نتائج حقيقية وأرقام ملموسة من مشاريع تسويقية نفذتها لعملاء في قطاعات متنوعة.",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <GrowthLine />
        <h1 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
          دراسات الحالة
        </h1>
        <p className="mt-3 max-w-xl text-ink/60">
          نتائج حقيقية وأرقام ملموسة من مشاريع نفذتها لعملاء في قطاعات متنوعة.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={"/case-studies/" + c.slug}
              className="focus-ring group block overflow-hidden rounded-2xl border border-ink/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-lg font-bold leading-snug text-ink">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink/60">{c.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-indigo">
                  اقرأ الدراسة كاملة ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
