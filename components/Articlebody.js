export default function ArticleBody({ content }) {
  return (
    <div className="prose-none">
      {content.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="mt-10 font-display text-2xl font-extrabold text-ink md:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="mt-7 font-display text-lg font-bold text-indigo">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-4 space-y-2">
              {block.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2 text-base leading-7 text-ink/70">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-growth-gradient" />
                  {it}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "cta") {
          return (
            <div key={i} className="mt-10 rounded-2xl bg-ink p-6 text-paper md:p-8">
              <p className="text-base leading-7 text-paper/80">{block.text}</p>
              <a
                href="/#contact"
                className="focus-ring mt-5 inline-block rounded-full bg-growth-gradient px-6 py-3 text-sm font-bold text-ink transition hover:opacity-90"
              >
                تواصل معي الآن
              </a>
            </div>
          );
        }
        return (
          <p key={i} className="mt-4 text-base leading-8 text-ink/70">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
