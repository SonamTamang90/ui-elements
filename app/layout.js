import { Inter, Bebas_Neue } from "next/font/google";
import "../styles/tailwind.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "UI Elements",
  description: "Beautifully designed UI elements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        <div className="fixed inset-0 z-[-2] size-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#0A0A0A_1px)] bg-[size:20px_20px]" />
        {children}
      </body>
    </html>
  );
}
