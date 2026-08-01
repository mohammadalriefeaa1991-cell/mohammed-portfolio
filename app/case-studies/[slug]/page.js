import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/ArticleBody";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return {
    title: study.title + " | محمد الرفاعي",
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      images: [study.cover],
    },
  };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link href="/case-studies" className="focus-ring text-sm font-bold text-indigo">
          ← كل دراسات الحالة
        </Link>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-snug text-ink md:text-4xl">
          {study.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image src={study.cover} alt={study.title} fill className="object-cover" priority />
        </div>

        <ArticleBody content={study.content} />
      </main>
      <Footer />
    </>
  );
}
