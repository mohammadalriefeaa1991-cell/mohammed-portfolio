import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  title: "محمد الرفاعي | تسويق إلكتروني وتقليدي وهوية بصرية",
  description:
    "محمد الرفاعي — استراتيجيات تسويق، إدارة حسابات، تصميم هوية بصرية، وحملات ميدانية تبني علاقة حقيقية بين علامتك التجارية وجمهورها.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
