import { Head } from "@/layouts/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { LeftAndRightComp } from "@/components/aboutcomps/leftandrightcomp";
import { RightWithChildren } from "@/components/aboutcomps/rightwithchildren";
import { CardListComp } from "@/components/aboutcomps/cardlistcomp";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CardCol } from "@/components/aboutcomps/cardcol";
import { IoMdWifi } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import Image from "next/image";
import FeaturedProjectComp from "@/components/aboutcomps/featuredProjects";
import { MdAlternateEmail } from "react-icons/md";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { AboutNavbar } from "@/components/aboutcomps/nav";
import HeroCarousel from "@/components/carousel/HeroCarousel";

const AboutPage = () => {
  const router = useRouter();
  const carouselRef = useRef<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);

  // Function to toggle the menu
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (num: number) => {
    if (carouselRef.current) {
      carouselRef?.current?.scrollTo(num);
      setCurrentHero(num);
    }
  };

  const controllButton = [
    {
      id: 0,
      num: 1,
      title: "Nulgen",
      description:
        "AI Powered e-learning platform and career companion",
    },
    {
      id: 1,
      num: 2,
      title: "Wasabi",
      description:
        "View funds, access documents and review data to help you make better investment decisions.",
    },
    {
      id: 2,
      num: 3,
      title: "Ezra",
      description:
        "Request allocations and sign documents online. Moonfare does the administrative work for you.",
    },
  ];

  return (
    <div className="relative h-[100svh]">
      <Head title="About Aorta Capital" />
      {/* Navigation Bar */}
      <section
        className={`sticky top-0 z-30 transition-all duration-500  ${menuOpen ? "bg-herobg" : "about-hero-light-yellow-bg"} w-full h-[65px] px-6 flex flex-col items-center justify-center`}
      >
        <AboutNavbar openState={menuOpen} toggleMenu={toggleMenu} />
      </section>

      {/* Hero */}
      <section className="">
        {/* Header content */}
        <div className="flex flex-col relative px-3 lg:px-0 pt-[80px] h-[1000px] md:h-[770px] about-hero-light-yellow-bg items-center">
          <div className="text-center mb-[40px] flex flex-col items-center">
            <p className="text-[40px] leading-[50px] md:leading-[70px] lg:leading-[90px] md:text-[60px] lg:text-[75px] font-testsignifier font-[300]">
              Where Partnership <br />
              <span className="italic"> Meets Possibilities</span>
            </p>
            <p className="pt-3 pb-7 text-[15px] md:text-[16px] lg:text-[18px] w-full md:max-w-[520px] font-[400]">
            We partner with bold, visionary African entrepreneurs to build 
            extremly agile and resilient companies.
            </p>
            <Link href="/mission">
            <button className="about-hero-blue-bg">Read Our Mission</button>
            </Link>
          </div>

          <div className="w-full">
            <HeroCarousel ref={carouselRef} />
          </div>
        </div>
        <div className="about-hero-yellow-bg flex text-center flex-col items-center h-[290px] md:h-[500px] lg:h-[570px] ">
          <div className="max-w-[90%] sm:max-w-[40%] lg:max-w-[30%] mt-[40px] md:mt-[280px] lg:mt-[330px] flex flex-col items-center">
            <div className="flex flex-col  gap-4">
              <p className="text-[15px] lg:text-[20px] font-semibold">
                {currentHero == 0
                  ? "Nulgen"
                  : currentHero == 1
                    ? "Wasabi"
                    : "Ezra"}
              </p>
              <p className="text-[13px] lg:text-[16px] font-[400]">
                {currentHero == 0
                  ? "AI Powered e-learning platform and career companion. Reimagining the future of education and learning."
                  : currentHero == 1
                    ? "AI legal assistant: Wasabi AI assistant is designed to enhance efficiency, accuracy, and productivity."
                    : "Church database and AI Bot: Ezra offers secure data storage and AI-powered search solutions for churches."}
              </p>
            </div>

            <div className="flex items-center mt-[40px] gap-3">
              {controllButton.map((v) => (
                <span
                  key={v.id}
                  role="presentation"
                  onClick={() => scrollTo(v.id)}
                  className={`h-[45px] flex items-center cursor-pointer ${currentHero == v.id ? "bg-[#F1E2B9]" : "bg-[#F6ECD1]"}  justify-center w-[45px] rounded-full`}
                >
                  <p
                    className={`font-medium ${currentHero == v.id ? "text-black" : "text-gray-500"} `}
                  >
                    {v.num}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section
        className={`pd-[0px] md:pb-[40px] pt-[60px] gap-[70px] md:gap-[200px] flex flex-col items-center about-hero-light-yellow-bg`}
      >
        <LeftAndRightComp
          img="/assets/about3.jpg"
          title="The future is built not wished for."
          description="We invest in founders who don’t just dream of change—they build it. 
          By backing visionary entrepreneurs with the resources, mentorship, and network they need, 
          we help turn bold ideas into powerful businesses that shape the future. 
          We are not hoping for a better future, we are building it."
          isImgRight={true}
        />

        <LeftAndRightComp
          title="The future is partnership."
          description="We believe the future is shaped by bold ideas and strong collaborations. 
          We partner with visionary founders, providing the capital, expertise, and global network 
          they need to turn their ambitions into impactful businesses. Together, we build a future of 
          innovation and lasting success."
          img="/assets/about1.jpg"
          isImgRight={false}
          titleItalic={true}
        />
      </section>

      {/* Where we invest */}
      <section className="bg-white">
        {/* Header content */}
        <div className="flex flex-col px-3 lg:px-0 justify-center pt-[100px] md:pt-[190px] pb-[50px] md:pb-[100px] items-center">
          <div className="text-center max-w-[700px] flex gap-[30px] md:gap-[50px] flex-col items-center">
            <p className="text-[35px] md:text-[40px] leading-[40px] sm:leading-[90px] lg:text-[85px] font-testsignifier font-[300]">
              Build quicly with extreme agility.
            </p>
            <p className="pt-3 text-[15px] md:text-[16px] lg:text-[18px] w-full md:max-w-[620px] font-[400]">
            We prioritize agility and speed, empowering founders to rapidly seize opportunities, develope 
            ideas, fail, learn and navigate challenges with confidence and in record time.
            </p>
          </div>
        </div>
        <div className="gap-[70px] md:gap-[200px] pb-[0px] lg:pb-[190px] flex flex-col items-center">
          <RightWithChildren img="/assets/about4.jpg">
            <div className="flex flex-col gap-8">
              <CardListComp
                title="Data encryption"
                description="We safeguard your accounts and personal information using proven, industry-standard 'at-rest' and 'in-transit' encryption."
              />
              <CardListComp
                title="DDoS and web application security"
                description="Moonfare uses industry-leading firewalls to defend against intrusions and our security team constantly monitors emerging threats and responds immediately."
              />
              <CardListComp
                title="Backups and recovery"
                description="Our systems are continuously backed up across multiple sites to retain recovery capabilities in case of disasters or disruption."
              />
            </div>
          </RightWithChildren>
        </div>
      </section>

      {/* Join */}
      <section className="about-hero-light-yellow-bg">
        {/* Header content */}
        <div className="flex flex-col pt-[100px] md:pt-[150px] items-center">
          <div className="text-center w-full flex gap-[30px] md:gap-[50px] flex-col items-center">
            <p className="text-[35px] max-w-[700px] md:text-[40px] leading-[40px] sm:leading-[90px] lg:text-[85px] font-testsignifier font-[300]">
              Professionals accross the world.
            </p>
            <div className="flex w-full px-3 flex-col gap-8 md:gap-0 md:flex-row max-w-[1200px] items-center justify-between">
              {/* Card */}
              <CardCol
                icon={<MdOutlinePeopleAlt color="#0425e8" size={22} />}
                title="Meet like-minded investors at Moonfare curated events."
              />
              <CardCol
                icon={<IoMdWifi color="#0425e8" size={22} />}
                title="Hear from top GPs and the best minds in the business through our fund webinars."
              />
              <CardCol
                icon={<MdOutlinePersonSearch color="#0425e8" size={22} />}
                title="Become an ambassador and enjoy exclusive benefits"
              />
            </div>
          </div>

          <div className=" max-w-[1200px] w-full h-[500px] lg:h-[650px] relative">
            <Image
              src="/assets/about2.png"
              objectFit="cover"
              className="absolute top-0 lg:px-3 mt-[70px] lg:mt-[150px]"
              layout="fill"
              alt="flat-img"
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-[30px] lg:pb-[90px] pt-[130px] lg:pt-[300px] gap-[70px] md:gap-[200px] flex flex-col items-center bg-white">
        <LeftAndRightComp
          img="/assets/woman.png"
          title={
            <p>
              Want to talk? <br />{" "}
              <span className="italic">Get in touch</span>
            </p>
          }
          description="Investing with Moonfare requires less starting capital than you may
          think. Usually, you put down 25 percent of the full commitment up
          front – the rest is spread out via capital calls over the fund’s
          lifecycle. You may also receive distributions which could further
          reduce your net cash outlay. What's more, Moonfare manages all the
          admin and cash flow for you."
          isImgRight={false}
        />

        {/* <div></div> */}
      </section>

      {/* Feature Component */}
      <section className="about-hero-yellow-bg py-12">
        <FeaturedProjectComp />
      </section>

      {/* Contact */}
      {/* <section className="py-[100px] md:py-[170px] bg-white">
        <div className="flex flex-col items-center gap-[20px] md:gap-[50px]">
          <p className="text-[35px] max-w-[700px] md:text-[40px] leading-[40px] sm:leading-[90px] lg:text-[80px] font-testsignifier font-[300]">
            More questions?
          </p>
          <div className="flex items-center gap-3">
            <p className="font-bold cursor-pointer text-[18px] underline underline-offset-4 decoration-gray-300">
              Contact us
            </p>
            <div className="h-[40px] w-[40px] flex items-center bg-[#0425e8] justify-center rounded-full ">
              <MdAlternateEmail color="white" size={20} />
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="w-full footer-bg flex items-center justify-center py-[16px] lg:h-[100px]">
        <p className="footer-text font-lora">© 2024 {siteConfig.name}</p>
      </footer>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 w-full flex flex-col md:hidden right-0 h-full bg-herobg z-20 transform transition-transform duration-300 ${
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
    </div>
  );
};

export default AboutPage;
