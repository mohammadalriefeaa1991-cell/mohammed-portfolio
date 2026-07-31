import Image from "next/image";
import GrowthLine from "./GrowthLine";

// كل عمل: عنوان، تصنيف، واسم ملف الصورة داخل مجلد public
const projects = [
  { title: "SINA Logistics", tag: "شحن ولوجستيات", img: "/work-01-sina-logistics.jpg" },
  { title: "جيل القرآن — رمضان", tag: "منظمات إنسانية", img: "/work-02-jeel-alquran.jpg" },
  { title: "SyriaBooking", tag: "سياحة وسفر", img: "/work-03-syriabooking.jpg" },
  { title: "Booking in Clinic — زراعة الشعر", tag: "سياحة علاجية", img: "/work-04-bookingin-hair.jpg" },
  { title: "Arika Furniture", tag: "هوية بصرية", img: "/work-05-arika-furniture.jpg" },
  { title: "Booking in Clinic — تجميل الأسنان", tag: "سياحة علاجية", img: "/work-06-bookingin-dental.jpg" },
  { title: "شحن وتوصيل", tag: "شحن ولوجستيات", img: "/work-07-shipping.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
      <GrowthLine />
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
        نماذج من الأعمال
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-ink/70">
        أعرض هنا مجموعة مختارة من التصاميم والحملات التسويقية والإعلانية التي أنجزتها لصالح
        شركات وعلامات تجارية في قطاعات متنوعة، مثل: الشحن واللوجستيات، الاستثمار، السياحة
        والسفر، السياحة العلاجية، التعليم، والمنظمات الإنسانية.
        <br className="hidden md:block" />
        تعكس هذه الأعمال خبرتي في بناء الخطط التسويقية والتي تشمل دراسة السوق المستهدف
        ودراسة المنافسين وتنفيذ الحملات الإعلانية، وتصميم المحتوى الإبداعي، وإدارة الهوية
        البصرية، وصناعة المحتوى التسويقي الذي يحقق أهداف العلامات التجارية ويعزز حضورها
        الرقمي. بالإضافة إلى التسويق التقليدي وبناء علاقات مع شركات ذات صلة.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-ink/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo/10"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-magenta">{p.tag}</span>
              <h3 className="mt-2 font-display font-bold text-ink">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
