import Image from "next/image";
import GrowthLine from "./GrowthLine";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-sm font-bold text-magenta">
            <GrowthLine />
            تسويق إلكتروني · تسويق تقليدي · هوية بصرية
          </p>
          <h1 className="font-display text-3xl font-black leading-[1.6] text-ink md:text-5xl md:leading-[1.5]">
            علامتك التجارية تستحق نمواً
            <span className="bg-growth-gradient bg-clip-text text-transparent"> يُلاحَظ ويُقاس</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
            أعمل في مجال التسويق ووضع استراتيجيات المحتوى، وأمتلك خبرة في إدارة العلامات
            التجارية وتطويرها. أساعد الشركات على البناء والنمو، من الفكرة إلى حملة تصل
            فعلاً لعملائها المحتملين.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="focus-ring rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-indigo"
            >
              شاهد خدماتي
            </a>
            <a
              href="https://wa.me/+963998698501"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition hover:border-indigo hover:text-indigo"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
        <div className="mx-auto w-56 md:w-full">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo/5 via-blue/5 to-magenta/5 p-6">
            <Image
              src="/logo.png"
              alt="شعار Marketer Muhammad"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
