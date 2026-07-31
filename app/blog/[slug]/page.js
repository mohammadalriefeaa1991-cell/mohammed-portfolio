import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/ArticleBody";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title + " | محمد الرفاعي",
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.cover],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link href="/blog" className="focus-ring text-sm font-bold text-indigo">
          ← كل المقالات
        </Link>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-snug text-ink md:text-4xl">
          {article.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image src={article.cover} alt={article.title} fill className="object-cover" priority />
        </div>

        <ArticleBody content={article.content} />
      </main>
      <Footer />
    </>
  );
}
