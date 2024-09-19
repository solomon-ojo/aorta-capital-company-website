import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed top-0 w-full flex footer-bg flex-col h-[100svh]">
      <Head />
      <div
        style={{ backgroundColor: "transparent" }}
        className="absolute top-0 z-30 w-full h-[65px] px-4 flex flex-col items-center justify-center"
      >
        <Navbar />
      </div>
      <main className="mx-auto w-full flex-grow">{children}</main>
      <footer className="w-full footer-bg flex items-center justify-center py-[17px] lg:py-[41px]">
        <p className="footer-text font-lato">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
