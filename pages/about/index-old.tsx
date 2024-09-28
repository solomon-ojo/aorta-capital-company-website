import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/image";
import FeaturedProjectComp from "@/components/aboutcomps/featuredProjects";
import { AboutCompanyCard } from "@/components/aboutcomps/companyCard";
import { CompanyCardText } from "@/components/aboutcomps/companyCardText";
import {
  AboutFeatureCard,
  Div1,
  Div2,
  Div3,
  Div4,
} from "@/components/aboutcomps/aboutfeaturecard";

export default function DocsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Function to toggle the menu
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  // Function to disable scrolling when sticky section reaches top
  // useEffect(() => {
  //   const updateScroll = () => {
  //     const stickyPosition =
  //       targetRef.current?.getBoundingClientRect().top ?? 0;

  //     // When the sticky section touches the top of the viewport
  //     if (stickyPosition <= 0 && !isSticky) {
  //       document.body.classList.add("no-scroll");
  //       setIsSticky(true);
  //     }

  //     // Allow scrolling when the user scrolls back up
  //     if (stickyPosition > 0 && isSticky) {
  //       document.body.classList.remove("no-scroll");
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", updateScroll);
  //   return () => window.removeEventListener("scroll", updateScroll);
  // }, [isSticky]);

  const aboutcompany = [
    {
      id: 1,
      title: "OUR DEDICATION",
      description:
        "We create furniture that seamlessly blends timeless craftsmanship with contemporary design. Every piece is carefully crafted to enhance the aesthetic of your home while providing lasting durability. From the selection of premium materials to the attention to detail in every stitch and joint, our furniture is made to be beautiful.",
      image: Div1,
    },
    {
      id: 2,
      title: "OUR PASSION",
      description:
        "We create furniture that seamlessly blends timeless craftsmanship with contemporary design. Every piece is carefully crafted to enhance the aesthetic of your home while providing lasting durability. From the selection of premium materials to the attention to detail in every stitch and joint, our furniture is made to be beautiful.",
      image: Div2,
    },
    {
      id: 3,
      title: "OUR DEDICATION",
      description:
        "We create furniture that seamlessly blends timeless craftsmanship with contemporary design. Every piece is carefully crafted to enhance the aesthetic of your home while providing lasting durability. From the selection of premium materials to the attention to detail in every stitch and joint, our furniture is made to be beautiful.",
      image: Div3,
    },
    {
      id: 4,
      title: "OUR DEDICATION",
      description:
        "We create furniture that seamlessly blends timeless craftsmanship with contemporary design. Every piece is carefully crafted to enhance the aesthetic of your home while providing lasting durability. From the selection of premium materials to the attention to detail in every stitch and joint, our furniture is made to be beautiful.",
      image: Div4,
    },
  ];

  return (
    <section className="flex flex-col mt-[115px] justify-center">
      {/* Navbar */}
      <div
        style={{ backgroundColor: "transparent" }}
        className="absolute top-0 z-30 w-full h-[65px] px-6 flex flex-col items-center justify-center"
      >
        <Navbar openState={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <div className="flex px-2 md:px-6 flex-col items-center justify-center h-[100px] lg:h-[200px]">
          <div className="max-w-[1250px] w-full">
            <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[85px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
              Transform Your Space <br />
              with Timeless Furniture
            </h1>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:flex-1 mt-[60px] h-[50vh] md:h-[70vh] lg:h-[100svh] relative">
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
      <div
        // ref={targetRef}
        className="px-2 md:px-6 pt-[40px] md:pt-[94px] flex flex-col items-center"
      >
        <div className="max-w-[1250px] items-start flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between mb-12">
          {/* Left */}
          <div className="basis-[43%] py-[50vh] flex flex-col gap-4">
            <ul>
              {aboutcompany.map((data) => (
                <li key={data.id} className="text-gray-300 py-16">
                  <CompanyCardText
                    title={data.title}
                    description={data.description}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="basis-[43%] sticky top-0 h-[400px] lg:h-screen flex items-center">
            <div className="w-full relative aspect-square bg-gray-100">
              {aboutcompany.map((data) => (
                <data.image key={data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="w-full flex mt-[94px] flex-col items-center">
        <div className="max-w-[1250px] px-2 md:px-6 snap-start w-full flex justify-between items-center mb-12">
          <div className="w-full">
            <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
              OUR DEDICATION
            </h1>
          </div>
        </div>
        <FeaturedProjectComp />
      </div>
    </section>
  );
}
