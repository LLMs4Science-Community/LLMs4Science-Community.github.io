import { Hanken_Grotesk } from "next/font/google";
import "./aaai2025.css";
import Nav from "./components/nav";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "FMs4Bio",
  description:
    "2nd AAAI Workshop on Foundation Models for Biological Discoveries (FMs4Bio)",
};

export default function RootLayout({ children }) {
  return (
    <div className="w-[calc(100vw-120px)] max-w-[2000px] mx-auto">
      <Nav />
      {children}
    </div>
  );
}
