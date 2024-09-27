import { Navbar } from "@/components/navbar";
import { Head } from "@/layouts/head";
import { useRouter } from "next/router";
import { useState } from "react";
import SwiperPagination from "./swiper";
import SwiperComp from "./swiper";
import { LeftAndRightComp } from "@/components/aboutcomps/leftandrightcomp";
import { RightWithChildren } from "@/components/aboutcomps/rightwithchildren";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CardListComp } from "@/components/aboutcomps/cardlistcomp";

const AboutPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-[100svh]">
      <Head title="About Aorta Capital" />
      {/* Navigation Bar */}
      <section className="sticky top-0 z-30 about-hero-light-yellow-bg w-full h-[65px] px-6 flex flex-col items-center justify-center">
        <Navbar openState={menuOpen} toggleMenu={toggleMenu} />
      </section>

      {/* Hero */}
      <section className="">
        {/* Header content */}
        <div className="flex flex-col px-3 lg:px-0 justify-center h-[650px] md:h-[750px] about-hero-light-yellow-bg items-center">
          <div className="text-center mb-[90px] flex flex-col items-center">
            <p className="text-[35px] md:text-[40px] lg:text-[85px] font-testsignifier font-[300]">
              Invest in <span className="italic">four steps.</span>
            </p>
            <p className="pt-3 pb-7 text-[14px] md:text-[16px] lg:text-[18px] w-full md:max-w-[520px] font-[400]">
              Moonfare makes investing in private equity far simpler. Use our
              online platform to create an account and verify your ID in
              minutes, then access our funds and manage your holdings whenever
              and from wherever you choose.
            </p>
            <button className="about-hero-blue-bg">Register now</button>
          </div>
        </div>
        <div className="about-hero-yellow-bg relative h-[300px] md:h-[400px] "></div>
      </section>

      {/* Sections */}
      <section className="py-[60px] gap-[70px] md:gap-[200px] flex flex-col items-center about-hero-light-yellow-bg">
        <LeftAndRightComp
          img="/assets/testheroimg.webp"
          title="Capital calls and distributions."
          description="Investing with Moonfare requires less starting capital than you may
          think. Usually, you put down 25 percent of the full commitment up
          front – the rest is spread out via capital calls over the fund’s
          lifecycle. You may also receive distributions which could further
          reduce your net cash outlay. What's more, Moonfare manages all the
          admin and cash flow for you."
          isImgRight={true}
        />

        <LeftAndRightComp
          title="Reporting and taxes."
          description="You can access Moonfare's Digital Reporting and Quarterly Reports roughly three to six months after your first capital call. You'll see insights about your portfolio composition and track performance. Your tax reports are also uploaded directly on the platform once a year."
          img="/assets/testimgimg.jpg"
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
              We invest in your safety and privacy.
            </p>
            <p className="pt-3 text-[14px] md:text-[16px] lg:text-[18px] w-full md:max-w-[620px] font-[400]">
              Moonfare invests in the highest security standards to help protect
              you and your money. This includes a range of digital and
              procedural controls, some of which are highlighted below.
            </p>
          </div>
        </div>
        <div className="gap-[70px] md:gap-[200px] flex flex-col items-center">
          <RightWithChildren img="/assets/famiimg.png">
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
    </div>
  );
};

export default AboutPage;
