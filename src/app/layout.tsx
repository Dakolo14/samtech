import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Samtech Fabrication Venture | Bespoke Metalwork & Steel Frameworks, Lagos",
  description:
    "Shop N30, International Art & Craft Market, Oba Elegushi Road, Ikoyi. Premium structural steel framework and custom metal welding and fabrication in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full w-screen max-w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
