import GrowthLine from "./GrowthLine";

// أضف كل عمل جديد كعنصر هنا: عنوان، وصف قصير، ورابط صورة داخل مجلد public
const projects = [
  {
    title: "أضف عملك الأول هنا",
    tag: "تسويق إلكتروني",
    desc: "استبدل هذا النص بوصف قصير للحملة أو المشروع والنتيجة التي حققتها.",
  },
  {
    title: "أضف عملك الثاني هنا",
    tag: "هوية بصرية",
    desc: "استبدل هذا النص بوصف قصير للحملة أو المشروع والنتيجة التي حققتها.",
  },
  {
    title: "أضف عملك الثالث هنا",
    tag: "تسويق تقليدي",
    desc: "استبدل هذا النص بوصف قصير للحملة أو المشروع والنتيجة التي حققتها.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
      <GrowthLine />
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
        نماذج من الأعمال
      </h2>
      <p className="mt-3 max-w-xl text-ink/60">
        قسم قابل للتوسّع — أرسل لي أعمالك السابقة وصورها وسأضيفها هنا كبطاقات كاملة.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-2xl border border-ink/10">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-indigo/10 via-blue/10 to-magenta/10">
              <span className="font-display text-sm font-bold text-ink/30">صورة العمل</span>
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-magenta">{p.tag}</span>
              <h3 className="mt-2 font-display font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
