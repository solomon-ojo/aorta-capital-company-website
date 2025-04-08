import Image from "next/image";
import DefaultLayout from "@/layouts/default";
import { SiteFiles } from "@/config/siteFiles";
import AnimatedButton from "@/components/animatedButton";
import Link from "next/link";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex h-full flex-col lg:flex-row">
        {/* Left div with background image */}
        <div className="lg:flex-1 h-[200px] md:h-[300px] lg:h-full relative">
          <Image
            src={SiteFiles.homeBg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="left 50%"
            quality={75}
            priority
          />
        </div>

        {/* Right div with text content */}
        <div className="flex-1 bg-white flex items-center">
          <div className="px-6 md:pl-[95px] mt-[55px] mb-[40px] lg:mb-[0px]  lg:mt-[100px] w-full md:max-w-[78%] lg:max-w-[85%] xl:max-w-[78%]">
            <h1 className="font-lora  home-text-color text-[24px] xl:text-[34px] font-normal leading-[30px] xl:leading-[44px]">
              The future is built <br /> not hoped for.
            </h1>
            <span className="h-[2px] bg-black w-4 block my-6 "></span>
            <p className="font-lora italic opacity-85 leading-[25px] home-text-color font-light text-[17px]">
              We partner with bold, visionary entrepreneurs to build the Africa
              we desire—by Africans, for Africans—unhindered by government
              inefficiencies. Together, we harness the limitless potential of
              emerging technologies and the{" "}
              <span className="underline text-black font-medium underline-offset-4 decoration-[#4FE18B]">
                collective power of the crowd.
              </span>
            </p>

            <div className="mt-8">
              <Link href="/mission">
                <AnimatedButton />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
