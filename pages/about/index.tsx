import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/image";
import FeaturedProjectComp from "@/components/aboutcomps/featuredProjects";
import { AboutCompanyCard } from "@/components/aboutcomps/companyCard";
import { MyMotionComponent } from "@/components/aboutcomps/test";
import { TeamComponent } from "@/components/teamcomps/TeamComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContactUsComp } from "@/components/contactuscomp/ContactUs";
import { siteConfig } from "@/config/site";

export default function DocsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={`flex flex-col  bg-white justify-center`}>
      {/* Navbar */}
      <div
        style={{ backgroundColor: "transparent" }}
        className="absolute top-0 z-50 w-full h-[65px] px-6 flex flex-col items-center justify-center"
      >
        <Navbar openState={menuOpen} toggleMenu={toggleMenu} />
      </div>

      <main className={`${menuOpen && "fixed"} mt-[115px]`}>
        {/* Hero Section */}
        <div className="w-full">
          <div className="flex px-4 flex-col items-center justify-center h-[100px] lg:h-[200px]">
            <div className="max-w-[1250px] w-full">
              <h1 className="text-[23px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[85px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
                Transform Your Space <br />
                with Timeless Furniture
              </h1>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:flex-1 mt-[40px] h-[50vh] md:h-[70vh] lg:h-[100svh] relative">
            <Image
              src="/assets/testbg.avif"
              alt="Background Image"
              layout="fill"
              style={{ objectFit: "cover", objectPosition: "left 50%" }}
              quality={75}
              priority
            />
          </div>
        </div>

        {/* Our Work, approach, etc */}
        <div className="px-4 testbox md:px-6 pt-[70px] md:pt-[120px] flex flex-col items-center">
          <div className="max-w-[1250px] w-full flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center">
            {/* Left */}
            {/* Duplicate this section and when the user scrolls on the paraent div while the div is on sticky, the first div here should kind of rotate out on in vertical direction while the  second div scrolls in also in same direction. */}
            <div className="basis-[43%]  flex flex-col gap-4">
              <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
                OUR WORK
              </h1>
              <p className="text-[16px] md:text-[20px] font-lato">
                We create furniture that seamlessly blends timeless
                craftsmanship with contemporary design. Every piece is carefully
                crafted to enhance the aesthetic of your home while providing
                lasting durability. From the selection of premium materials to
                the attention to detail in every stitch and joint, our furniture
                is made to be beautiful.
              </p>
            </div>

            {/* Right */}
            {/* Duplicate this section and when the user scrolls on the paraent div while the div is on sticky, the first div here should kind of rotate out on in vertical direction while the  second div scrolls in also in same direction. */}
            <div className="basis-[43%] h-[400px] lg:h-full">
              <NextImage
                src="/assets/test1.avif"
                className="w-[500px] object-cover rounded-none h-[450px] lg:h-[750px]"
              />
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="w-full flex pt-[70px] md:pt-[120px] flex-col items-center">
          <div className="max-w-[1250px] px-4  snap-start w-full flex justify-between items-center mb-12">
            <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
              Featured Projects
            </h1>
          </div>
          <FeaturedProjectComp />
        </div>

        {/* Team Section */}
        <div className="mt-[70px] flex flex-col items-center bg-[#1D1D1D] md:mt-[120px]">
          <TeamComponent />
        </div>

        {/* Footer */}
        <div className="w-full flex pt-[70px] md:pt-[120px] flex-col items-center">
          <div className="max-w-[1250px] px-4  snap-start w-full flex justify-between items-center mb-12">
            <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] scale-y-125 lowercase font-bebas font-semibold">
              {siteConfig.mailAddress}
            </h1>
          </div>
          <ContactUsComp />
        </div>
      </main>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 w-full flex flex-col md:hidden right-0 h-full bg-herobg z-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-[100px] w-full flex  flex-col">
          {/* Mission Link */}
          <li
            className={`text-white w-full px-6 text-[13px] py-6 ${
              router.pathname === "/about" ? "bg-[#051b22]" : ""
            }`}
          >
            <Link href="/about">
              <p className="capitalize">ABOUT</p>
            </Link>
          </li>

          {/* Mission Link */}
          <li
            className={`text-white w-full px-6 text-[13px] py-6 ${
              router.pathname === "/mission" ? "bg-[#051b22]" : ""
            }`}
          >
            <Link href="/mission">
              <p className="capitalize">MISSION</p>
            </Link>
          </li>

          {/* Our Companies Link */}
          <li
            className={`text-white w-full px-6 text-[13px] py-6 ${
              router.pathname === "/our-companies" ? "bg-[#051b22]" : ""
            }`}
          >
            <Link href="/our-companies">
              <p className="capitalize">OUR COMPANIES</p>
            </Link>
          </li>

          {/* Team Link */}
          <li
            className={`text-white w-full px-6 text-[13px] py-6 ${
              router.pathname === "/team" ? "bg-[#051b22]" : ""
            }`}
          >
            <Link href="/team">
              <p className="capitalize">TEAM</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
