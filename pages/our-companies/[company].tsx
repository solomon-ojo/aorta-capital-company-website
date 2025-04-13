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
  const { company } = router.query;

  // State
  const [menuOpen, setMenuOpen] = useState(false);

  // Find the company details by name
  const companyObject = companies.find((c) => c.name.toLowerCase() === company);

  // Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!companyObject) {
    return (
      <div className="px-6 lg:px-11 bg-white flex flex-col gap-16 lg:gap-16 h-[100svh]">
        {/* Navbar */}
        <div className="sticky top-0 bg-white z-20">
          <NavbarDynamic openState={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    );
  }

  return (
    <div className="about-hero-light-yellow-bg flex relative flex-col lg:gap-16 min-h-screen">
      <Head title={siteConfig.name + " / " + companyObject.name} />
      {/* Navbar */}
      <div className="px-6 lg:px-11 sticky top-0 about-hero-light-yellow-bg z-20">
        <NavbarDynamic openState={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Body */}
      <main
        className={`px-6 ${menuOpen && "fixed"} pb-6 mt-7 lg:px-11 flex about-hero-light-yellow-bg flex-col lg:flex-row gap-8 lg:gap-0`}
      >
        {/* Left Section */}
        <div className="w-full pr-0 lg:pr-14 lg:w-1/2 flex flex-col gap-10">
          {/* Company Logo */}
          {/* <Link
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
          </Link> */}

          <Link
            href={companyObject.path}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={`${title()} font-lora`}>{companyObject.name}</h1>
          </Link>
          <p className="font-lora text-black  text-xl md:text-2xl lg:text-3xl xl:text-[33px] lg:leading-[40px] xl:leading-[50px] font-medium">
            {companyObject.details}
          </p>

          {/* Connect */}
        
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
            <div className="my-7 flex items-center gap-4">
              <Link
              href={companyObject.path ? companyObject.path : "/"}
              className="h-[40px] lg:w-[200px] flex items-center justify-center text-white rounded-full text-sm transition-all duration-350 hover:text-black border border-black hover:bg-transparent bg-black px-[25px]"
              target="_blank"
              rel="noopener noreferrer"
              > 
              {companyObject.url}             
              </Link>
            </div>
            
         
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-12">
          {/* Milestones, Teams and Partners */}
          <div className="flex items-start flex-wrap md:flex-nowrap">
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">INDUSTRY</p>
              <div>
                {companyObject.industry.map((industry: any, index: any) => (
                  <p key={index} className="text-[16px] font-lato font-medium">
                    {industry}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col basis-[50%] md:basis-[33%] gap-3">
              <p className=" font-lora text-[14px] opacity-75">TEAM</p>
              <div className="flex flex-col gap-1">
                {companyObject.team.map((team: any, index: any) => (
                  <p
                    key={index}
                    className="text-[16px] cursor-pointer font-lato underline underline-offset-4 font-medium"
                  >
                    {team}
                  </p>
                ))}
              </div>
            </div>

          </div>
          {/* Why we invested */}
          <div className="flex flex-col gap-4">
            <p className=" font-lora text-[14px] opacity-75">WHY WE INVESTED</p>
            <p className=" font-lato text-[16px] font-medium leading-[24px]">
              {companyObject.why}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Single Company Image */}


            {/* Double Company Image that will be single on small screens */}
            <div className="flex flex-col md:flex-row gap-6 ">
              {/* First Image */}
              <div className="relative group cursor-pointer w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src={companyObject.imageUrl3} // Replace with actual company image path
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


                {/* Bottom text content */}

              </div>

              {/* Second Image */}
              <div className="relative cursor-pointer group w-full md:w-1/2 pb-[100%] md:pb-[50%] overflow-hidden shadow-lg">
                <NextImage
                  src={companyObject.imageUrl2} // Replace with actual company image path
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


                {/* Bottom text content */}

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sliding Menu */}


      <footer className="w-full footer-bg flex items-center justify-center py-[8px] lg:h-[100px]">
        <p className="footer-text font-lora">© 2024 {siteConfig.name}</p>
      </footer>
    </div>
  );
}
