import GrowthLine from "./GrowthLine";

const services = [
  {
    title: "التسويق الإلكتروني",
    desc:
      "تطوير استراتيجيات المحتوى، وإدارة حسابات التواصل الاجتماعي، وكتابة المحتوى التسويقي، وتعزيز الهوية الرقمية للشركات، وتنفيذ حملات تهدف إلى زيادة الوعي بالعلامة التجارية وجذب العملاء المحتملين.",
  },
  {
    title: "التسويق التقليدي",
    desc:
      "خدمات التسويق الميداني لبناء رابط مباشر بين علامتك التجارية وجمهورك المستهدف في أماكن تواجدهم، من خلال تنظيم الفعاليات، وتقديم العروض الحية، وبناء علاقات B2B بهدف زيادة المبيعات وتعزيز الولاء.",
  },
  {
    title: "بناء الهوية البصرية",
    desc:
      "تصميم الهوية البصرية وإدارة محتوى وسائل التواصل الاجتماعي بأسلوب جذاب بصرياً يعزز المبيعات.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-ink/5 bg-ink/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <GrowthLine />
        <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
          الخدمات
        </h2>
        <p className="mt-3 max-w-xl text-ink/60">
          ثلاثة مسارات تعمل معاً على بناء علامة تجارية حاضرة رقمياً وعلى الأرض.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-ink/10 bg-paper p-7 transition hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="h-1 w-10 rounded-full bg-growth-gradient" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
