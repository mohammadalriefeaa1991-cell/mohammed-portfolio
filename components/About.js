import GrowthLine from "./GrowthLine";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <GrowthLine />
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
        نبذة عني
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
        لقد عملتُ على تطوير استراتيجيات المحتوى، وإدارة حسابات التواصل الاجتماعي، وكتابة
        المحتوى التسويقي، وتعزيز الهوية الرقمية للشركات، وتنفيذ حملات تهدف إلى زيادة الوعي
        بالعلامة التجارية وجذب العملاء المحتملين.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          { n: "استراتيجية", d: "محتوى مبني على أهداف واضحة، لا منشورات عشوائية" },
          { n: "تنفيذ", d: "إدارة حسابات، حملات، وفعاليات ميدانية من الألف إلى الياء" },
          { n: "هوية", d: "تصميم بصري يعزز الثقة ويترجم لمبيعات فعلية" },
        ].map((item) => (
          <div key={item.n} className="rounded-2xl border border-ink/10 p-5">
            <p className="font-display text-lg font-bold text-indigo">{item.n}</p>
            <p className="mt-2 text-sm leading-6 text-ink/60">{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
