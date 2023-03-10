import "./globals.css";
import { Poppins } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={poppins.className}>
        <Navbar />
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
