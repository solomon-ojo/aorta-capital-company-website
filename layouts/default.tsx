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
    <div className="relative flex flex-col footer-bg h-[100svh] ">
      <Head />
      {/* Navbar */}
      <div
        style={{ backgroundColor: "transparent" }}
        className="absolute top-0 z-30 w-full h-[65px] px-4 flex flex-col items-center justify-center"
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="mx-auto w-full flex-grow ">{children}</main>

      {/* Footer */}
      <footer className="w-full footer-bg flex items-center justify-center py-[16px] lg:h-[100px]">
        <p className="footer-text font-lato">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
