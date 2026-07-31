import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthLine from "@/components/GrowthLine";
import { articles } from "@/data/articles";

export const metadata = {
  title: "المقالات | محمد الرفاعي",
  description: "مقالات في التسويق الإلكتروني، بناء الاستراتيجيات، وزيادة المبيعات عبر القنوات الرقمية.",
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <GrowthLine />
        <h1 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
          المقالات
        </h1>
        <p className="mt-3 max-w-xl text-ink/60">
          أفكار وخطوات عملية في التسويق الإلكتروني وبناء العلامات التجارية.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={/blog/${a.slug}}
              className="focus-ring group block overflow-hidden rounded-2xl border border-ink/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={a.cover}
                  alt={a.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-bold leading-snug text-ink">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink/60">{a.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-indigo">
                  اقرأ المقال ←
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
