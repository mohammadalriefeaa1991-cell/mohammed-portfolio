import Image from "next/image";
import GrowthLine from "./GrowthLine";

const items = [
  { title: "SINA Logistics — بروشور", img: "/brand-01-sina-brochure.jpg" },
  { title: "SINA Logistics — كرت شركة", img: "/brand-02-sina-businesscard.jpg" },
  { title: "تصاميم شعارات متنوعة", img: "/brand-03-logos-collection.jpg" },
  { title: "إثمار — بروشور تعريفي", img: "/brand-04-ethmaar-trifold.jpg" },
  { title: "إثمار — كتيّب تعريفي", img: "/brand-05-ethmaar-booklet-open.jpg" },
  { title: "إثمار — غلاف الكتيّب", img: "/brand-06-ethmaar-booklet-cover-open.jpg" },
  { title: "إثمار — تصميم الغلاف", img: "/brand-07-ethmaar-booklet-cover.jpg" },
  { title: "إثمار — كرت الشركة", img: "/brand-08-ethmaar-businesscard.jpg" },
];

export default function Identity() {
  return (
    <section id="identity" className="border-y border-ink/5 bg-ink/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <GrowthLine />
        <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
          الهوية البصرية
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink/70">
          إلى جانب التسويق، أصمم الهوية البصرية الكاملة للعلامات التجارية: من الشعار
          وبطاقات العمل، إلى البروشورات والكتيّبات التعريفية التي تمثّل الشركة أمام
          عملائها وشركائها. أحرص في كل تصميم على انسجام الألوان والخطوط مع شخصية العلامة
          التجارية، بما يعزز حضورها المهني ويترك انطباعاً أولياً قوياً وموثوقاً.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-paper">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-contain p-3 transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-ink">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
