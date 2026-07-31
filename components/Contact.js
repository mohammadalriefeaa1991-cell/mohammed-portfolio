import GrowthLine from "./GrowthLine";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink/5 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="flex justify-center">
          <GrowthLine />
        </div>
        <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
          لنبنِ نمو علامتك التجارية معاً
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/60">
          راسلني عبر واتساب أو الإيميل، وخبرني بطبيعة عملك وأهدافك التسويقية.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/00963998698501"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-growth-gradient px-6 py-3 text-sm font-bold text-ink transition hover:opacity-90"
          >
            واتساب: 00963 998 698 501
          </a>
          <a
            href="mailto:mohammadalriefeaa1991@gmail.com"
            className="focus-ring rounded-full border border-paper/20 px-6 py-3 text-sm font-bold text-paper transition hover:border-paper/50"
          >
            mohammadalriefeaa1991@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
