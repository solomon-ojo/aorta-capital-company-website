import { useState } from "react";
import { NavbarDynamic } from "@/components/navbar-dynamic";
import { companies } from "@/data/objects";
import { useRouter } from "next/router";
import AnimatedButtonDynamic from "@/components/animatedButtonDynamic";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { siteConfig } from "@/config/site";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { Head } from "@/layouts/head";
import { title } from "@/components/primitives";

const ArrowIcon = MdArrowRightAlt as React.FC<React.SVGProps<SVGSVGElement>>;

export default function CompanyDetails() {
  // Hooks
  const router = useRouter();
  // State
  const [menuOpen, setMenuOpen] = useState(false);

  // Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const AortaIndustry = ["Technology", "Artificial Intelligence", "HR"];
  const AortaTeam = ["Deborah Oleg", "Biola Williams", "Seun Emmanuel"];
  const AortaLocation = ["Germany", "Nigeria", "United Kingdom"];

  return (
    <div className="bg-white  flex relative flex-col lg:gap-16 h-[100svh]">
      {/* Head */}
      <Head title="Mission" />
      {/* Navbar */}
      <div className="px-6 lg:px-11 sticky top-0 bg-white z-20">
        <NavbarDynamic openState={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Body */}
      <main
        className={`px-6 ${menuOpen && "fixed"} pb-6 mt-7 lg:px-11 flex bg-white flex-col lg:flex-row gap-8 lg:gap-0`}
      >
        {/* Left Section */}
        <div className="w-full pr-0 lg:pr-14 lg:w-1/2 flex flex-col gap-10">
          {/* Company Name */}
          <h1 className={`${title()} font-lora`}>{siteConfig.name}</h1>
          <p className="font-lora text-black  text-xl md:text-2xl lg:text-3xl xl:text-[33px] lg:leading-[40px] xl:leading-[50px] font-medium">
            When quizzed during a speech in his most recent national tour,
            Obasanjo, Nigerian past president, made an intriguing statement that
            offers great insight about his journey on how he rose to become the
            president of Nigeria from a lowly, impoverished farm boy in Ogun
            state, Nigeria.
          </p>

          {/* Connect */}
          <div>
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
            <div className="my-7 flex items-center gap-4">
              <button className="h-[40px] text-white rounded-full text-sm transition-all duration-350 hover:text-black border border-black hover:bg-transparent bg-black px-[25px]">
                aortacap.com
              </button>
              <div className="h-[40px] shrink-0 w-[40px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={20}
                  height={20}
                  src={"/assets/logo/x.svg"}
                  alt={`${siteConfig.name}`}
                />
              </div>
              <div className="h-[40px] shrink-0 w-[40px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={20}
                  height={20}
                  src={"/assets/logo/linkedin.svg"}
                  alt={`${siteConfig.name}`}
                />
              </div>
              <div className="h-[40px] shrink-0 w-[40px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={20}
                  height={20}
                  src={"/assets/logo/instagram.svg"}
                  alt={`${siteConfig.name}`}
                />
              </div>
            </div>
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
          </div>

          {/* Animated Button */}
          <AnimatedButtonDynamic title="Consumer" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-12">
          {/* Milestones, Teams and Partners */}
          <div className="flex items-start flex-wrap md:flex-nowrap">
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">INDUSTRY</p>
              <div>
                {AortaIndustry.map((industry: any, index: any) => (
                  <p key={index} className="text-[16px] font-lato font-medium">
                    {industry}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">TEAM</p>
              <div className="flex flex-col gap-1">
                {AortaTeam.map((team: any, index: any) => (
                  <p
                    key={index}
                    className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium"
                  >
                    {team}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex mt-4 md:mt-0 flex-col basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">PARTNERS</p>
              <div className="flex flex-col gap-1">
                {AortaLocation.map((location: any, index: any) => (
                  <p
                    key={index}
                    className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium"
                  >
                    {location}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Why we invested */}
          <div className="flex flex-col gap-4">
            <p className=" font-lora text-[14px] opacity-75">WHY WE INVESTED</p>
            <p className=" font-lato text-[16px] font-medium leading-[24px]">
              To Obasanjo and his contemporaries in their time, the army was the
              even ground providence provided. It was the even ground that
              erased and removed all societal and aristocratic blockades set in
              place to frustrate and keep the ordinary man ordinary. The army
              was what provided an even ground for their generation to play on.
              An even ground where what mattered was abilities and capabilities;
              not statuses and connections.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Single Company Image */}
            <div className="cursor-pointer relative w-full pb-[100%] overflow-hidden shadow-lg group">
              {/* Background Image */}
              <NextImage
                src={"/assets/mission.jpg"}
                alt={"company image"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/dessert.jpeg"
                quality={25}
                className="absolute inset-0"
              />

              {/* Read more and arrow */}
              <div className="absolute flex items-center right-5 top-5">
                <p className="font-lato text-[16px] font-semibold text-white">
                  READ
                </p>
                <ArrowIcon
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  color="white"
                  width={24} height={24}
                />
              </div>

              {/* Bottom text content */}
              <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[20px] lg:text-[30px] font-bold text-white">
                  Aorta Capital Companies
                </p>
              </div>
            </div>

            {/* Double Company Image that will be single on small screens */}
            <div className="flex flex-col md:flex-row gap-6 ">
              {/* First Image */}
              <div className="relative group cursor-pointer w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src="/assets/dessert.jpeg" // Replace with actual company image path
                  alt={"Company Image 1"}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/dessert.jpeg" // Replace with the correct path
                  quality={25}
                  className="absolute inset-0"
                />
                {/* Read more and arrow */}
                <div className="absolute flex items-center right-5 top-5">
                  <p className="font-lato text-[16px] font-semibold text-white">
                    READ
                  </p>
                  <ArrowIcon
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  color="white"
                  width={24} height={24}
                />
                </div>

                {/* Bottom text content */}
                <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                  <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[20px] lg:text-[24px] font-bold text-white">
                    More About Aorta Capital
                  </p>
                </div>
              </div>

              {/* Second Image */}
              <div className="relative cursor-pointer group w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src="/assets/dessert.jpeg" // Replace with actual company image path
                  alt={"Company Image 2"}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/dessert.jpeg" // Replace with the correct path
                  quality={25}
                  className="absolute inset-0"
                />
                {/* Read more and arrow */}
                <div className="absolute flex items-center right-5 top-5">
                  <p className="font-lato text-[16px] font-semibold text-white">
                    READ
                  </p>
                  <ArrowIcon
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  color="white"
                  width={24} height={24}
                />
                </div>

                {/* Bottom text content */}
                <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                  <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[20px] lg:text-[24px] font-bold text-white">
                    More About Aorta Capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sliding Menu */}
      <div
        className={`fixed px-6 top-0 flex flex-col md:hidden right-0 h-full w-[100%] footer-bg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavbarDynamic
          hideBottomBorder
          openState={menuOpen}
          toggleMenu={toggleMenu}
        />

        <ul className=" flex flex-col">
          {/* Mission Link */}
          <li className="py-5">
            <Link
              className={`text-white text-[13px] w-full ${
                router.pathname === "/mission" ? "bg-[#2F313A]" : ""
              }`}
              href="/mission"
            >
              <p className="capitalize">MISSION</p>
            </Link>
          </li>

          {/* Our Companies Link */}
          <li className="py-5">
            <Link
              className={`text-white text-[13px] w-full ${
                router.pathname === "/our-companies" ? "bg-[#2F313A]" : ""
              }`}
              href="/our-companies"
            >
              <p className="capitalize">OUR COMPANIES</p>
            </Link>
          </li>

          {/* Team Link */}
          <li className="py-5">
            <Link
              className={`text-white text-[13px] w-full ${
                router.pathname === "/team" ? "bg-[#2F313A]" : ""
              }`}
              href="/team"
            >
              <p className="capitalize">TEAM</p>
            </Link>
          </li>
        </ul>
      </div>

      <footer className="w-full footer-bg flex items-center justify-center py-[8px] lg:h-[100px]">
        <p className="footer-text font-lora">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
