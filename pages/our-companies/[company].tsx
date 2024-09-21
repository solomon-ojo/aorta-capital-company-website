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

export default function CompanyDetails() {
  // Hooks
  const router = useRouter();
  const { company } = router.query;

  // State
  const [openState, setOpenState] = useState(false);

  // Find the company details by name
  const companyObject = companies.find((c) => c.name.toLowerCase() === company);

  // Function
  const toggleMenu = () => {};

  if (!companyObject) {
    return (
      <div className="px-6 lg:px-11 bg-white flex flex-col gap-16 lg:gap-16 h-[100svh]">
        {/* Navbar */}
        <div className="sticky top-0 bg-white z-20">
          <NavbarDynamic openState={openState} toggleMenu={toggleMenu} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col lg:gap-16 h-[100svh]">
      {/* Navbar */}
      <div className="px-6 lg:px-11 sticky top-0 bg-white z-20">
        <NavbarDynamic openState={openState} toggleMenu={toggleMenu} />
      </div>

      {/* Body */}
      <main className="px-6 pb-6 mt-16 lg:px-11 flex bg-white flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Left Section */}
        <div className="w-full pr-0 lg:pr-14 lg:w-1/2 flex flex-col gap-10">
          {/* Company Logo */}
          <Link
            href={companyObject.path || "/"}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={200}
              src={companyObject.logo}
              alt={`${companyObject.name}`}
            />
          </Link>
          <p className="font-lora text-black  text-xl md:text-2xl lg:text-3xl xl:text-[33px] lg:leading-[40px] xl:leading-[50px] font-medium">
            {companyObject.details}
          </p>

          {/* Connect */}
          <div>
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
            <div className="my-7 flex items-center gap-4">
              <button className="h-[45px] text-white rounded-full text-sm transition-all duration-350 hover:text-black border border-black hover:bg-transparent bg-black px-[30px]">
                {companyObject.url}
              </button>
              <div className="h-[45px] w-[45px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={25}
                  height={25}
                  src={"/assets/logo/x.svg"}
                  alt={`${companyObject.name}`}
                />
              </div>
              <div className="h-[45px] w-[45px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={25}
                  height={25}
                  src={"/assets/logo/linkedin.svg"}
                  alt={`${companyObject.name}`}
                />
              </div>
              <div className="h-[45px] w-[45px] flex items-center justify-center border border-black rounded-full">
                <NextImage
                  width={25}
                  height={25}
                  src={"/assets/logo/instagram.svg"}
                  alt={`${companyObject.name}`}
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
          <div className="flex items-center flex-wrap md:flex-nowrap">
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">MILESTONES</p>
              <div>
                <p className="text-[16px] font-lato font-medium">
                  Founded 2023
                </p>
                <p className="text-[16px] font-lato font-medium">
                  Partnered 2014
                </p>
                <p className="text-[16px] font-lato font-medium">IPO 2020</p>
              </div>
            </div>
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">TEAM</p>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium">
                  Andy Fang
                </p>
                <p className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium">
                  Stanley Tang
                </p>
                <p className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium">
                  Tony Xu
                </p>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0 flex-col basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">PARTNERS</p>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium">
                  Alfred Lin
                </p>
                <p className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium">
                  Isaiah Boone
                </p>
              </div>
            </div>
          </div>
          {/* Why we invested */}
          <div className="flex flex-col gap-4">
            <p className=" font-lora text-[14px] opacity-75">WHY WE INVESTED</p>
            <p className=" font-lato text-[16px] font-medium leading-[24px]">
              We sat next to Tony at a dinner one night and were amazed by how
              deeply he understood the logistical challenges of restaurant
              service. His methodical mindset, and grasp of complex, multi-sided
              marketplaces combined with a missionary zeal to serve local
              merchants convinced us that DoorDash was going to upend the
              last-mile logistics industry. Starting with the most complicated
              local businesses, restaurants in suburban America, highlighted the
              company’s determination and ability to carve out a marketing wedge
              in a highly competitive market.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Single Company Image */}
            <div className="cursor-pointer relative w-full pb-[100%] overflow-hidden shadow-lg group">
              {/* Background Image */}
              <NextImage
                src={"/assets/ceo.jpg"}
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
                <p className="font-lato text-[18px] font-semibold text-white">
                  READ
                </p>
                <MdArrowRightAlt
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  color="white"
                  size={24}
                />
              </div>

              {/* Bottom text content */}
              <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[30px] font-bold text-white">
                  Tony Xu on Mastering the Last Mile
                </p>
              </div>
            </div>

            {/* Double Company Image that will be single on small screens */}
            <div className="flex flex-col md:flex-row gap-6 ">
              {/* First Image */}
              <div className="relative group cursor-pointer w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src={"/assets/company1.jpg"} // Replace with actual company image path
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
                  <p className="font-lato text-[18px] font-semibold text-white">
                    READ
                  </p>
                  <MdArrowRightAlt
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    color="white"
                    size={24}
                  />
                </div>

                {/* Bottom text content */}
                <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                  <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[20px] lg:text-[24px] font-bold text-white">
                    Tony Xu on Mastering the Last Mile
                  </p>
                </div>
              </div>

              {/* Second Image */}
              <div className="relative cursor-pointer group w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src={"/assets/company2.jpg"} // Replace with actual company image path
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
                  <p className="font-lato text-[18px] font-semibold text-white">
                    READ
                  </p>
                  <MdArrowRightAlt
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    color="white"
                    size={24}
                  />
                </div>

                {/* Bottom text content */}
                <div className="absolute bottom-0 bg-black w-full h-[100px] justify-center bg-opacity-50 flex flex-col items-center text-center">
                  <p className="max-w-[70%] lg:max-w-[55%] leading-[27px] font-lato text-[20px] lg:text-[24px] font-bold text-white">
                    Tony Xu on Mastering the Last Mile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full footer-bg flex items-center justify-center py-[8px] lg:h-[100px]">
        <p className="footer-text font-lora">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
