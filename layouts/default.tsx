import { useState } from "react";
import { Link } from "@nextui-org/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/router";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to handle menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Get the current route

  // Function to toggle the menu
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex flex-col bg-white h-[100svh] ">
      <Head />
      {/* Navbar */}
      <div
        style={{ backgroundColor: "transparent" }}
        className="absolute top-0 z-30 w-full h-[65px] px-6 flex flex-col items-center justify-center"
      >
        <Navbar openState={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Main Content */}
      <main className={`${menuOpen && "fixed"} mx-auto w-full flex-grow`}>
        {children}
      </main>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 flex flex-col md:hidden right-0 h-full w-[100%] bg-herobg z-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-[80px] flex flex-col">
          {/* Mission Link */}
          <li className="">
            <Link
              className={`text-white text-[13px] leading-[30px] w-full px-6 py-5 ${
                router.pathname === "/about" ? "bg-[#051b22]" : ""
              }`}
              href="/about"
            >
              <p className="capitalize">ABOUT</p>
            </Link>
          </li>

          {/* Mission Link */}
          <li className="">
            <Link
              className={`text-white text-[13px] leading-[30px] w-full px-6 py-5 ${
                router.pathname === "/mission" ? "bg-[#051b22]" : ""
              }`}
              href="/mission"
            >
              <p className="capitalize">MISSION</p>
            </Link>
          </li>

          {/* Our Companies Link */}
          <li className="">
            <Link
              className={`text-white text-[13px] leading-[30px] w-full px-6 py-5 ${
                router.pathname === "/our-companies" ? "bg-[#051b22]" : ""
              }`}
              href="/our-companies"
            >
              <p className="capitalize">OUR COMPANIES</p>
            </Link>
          </li>

          {/* Team Link */}
          <li className="">
            <Link
              className={`text-white text-[13px] leading-[30px] w-full px-6 py-5 ${
                router.pathname === "/team" ? "bg-[#051b22]" : ""
              }`}
              href="/team"
            >
              <p className="capitalize">TEAM</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="w-full footer-bg flex items-center justify-center py-[16px] lg:h-[100px]">
        <p className="footer-text font-lora">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
