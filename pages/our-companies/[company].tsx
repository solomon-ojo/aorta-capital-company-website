import { NavbarDynamic } from "@/components/navbar-dynamic";
import { PagesHeader } from "@/components/pagesHeader";
import { companies } from "@/data/objects";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import AnimatedButton from "@/components/animatedButton";
import AnimatedButtonDynamic from "@/components/animatedButtonDynamic";
import Link from "next/link";

export default function CompanyDetails() {
  const router = useRouter();
  const { company } = router.query;

  // Find the company details by name
  const companyDetails = companies.find(
    (c) => c.name.toLowerCase() === company
  );

  if (!companyDetails) {
    return <p>Company not found</p>;
  }

  // State
  const [openState, setOpenState] = useState(false);

  // Function
  const toggleMenu = () => {};

  return (
    <div className="px-6 lg:px-11 bg-white flex flex-col gap-16 lg:gap-16">
      {/* Navbar */}
      <div className="sticky top-0 bg-white z-20">
        <NavbarDynamic openState={openState} toggleMenu={toggleMenu} />
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Left Section */}
        <div className="w-full pr-0 lg:pr-6 lg:w-1/2 flex flex-col gap-10">
          {/* Company Logo */}
          <div>
            <Link href={companyDetails.url}>
              <Image
                src={companyDetails.logo}
                alt={`${companyDetails.name} logo`}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <p className="font-lora text-black  text-xl md:text-2xl lg:text-3xl xl:text-[33px] lg:leading-[40px] xl:leading-[50px] font-medium">
            {companyDetails.details}
          </p>

          {/* Connect */}
          <div>
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
            <div className="my-5 flex items-center gap-4">
              <button className="h-[45px] text-white rounded-full text-sm transition-all duration-350 hover:text-black border border-black hover:bg-transparent bg-black px-[30px]">
                {companyDetails.url}
              </button>
              <div className="h-[45px] w-[45px] flex items-center justify-center overflow-hidden border border-black hover:bg-black rounded-full"></div>
              <div className="h-[45px] w-[45px] flex items-center justify-center overflow-hidden border border-black hover:bg-black rounded-full"></div>
              <div className="h-[45px] w-[45px] flex items-center justify-center overflow-hidden border border-black hover:bg-black rounded-full"></div>
            </div>
            <span className="h-[1px] bg-gray-500 w-[70px] block"></span>
          </div>

          {/* Animated Button */}
          <AnimatedButtonDynamic title="Consumer" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          {/* You can add additional content here */}
          <p>Additional content or details for the company.</p>
        </div>
      </div>
    </div>
  );
}
