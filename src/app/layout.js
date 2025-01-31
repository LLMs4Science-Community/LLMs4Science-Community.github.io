import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "FMs4Bio - AAAI 2025",
  description:
    "2nd AAAI Workshop on Foundation Models for Biological Discoveries (FMs4Bio)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
