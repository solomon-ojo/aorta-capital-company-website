import { PagesHeader } from "@/components/pagesHeader";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import DefaultLayout from "@/layouts/default";
import { teams } from "@/data/objects";
import Link from "next/link";
import AnimatedButtonTeams from "@/components/animatedButtonTeam";

export default function TeamsPage() {
  return (
    <DefaultLayout>
      <section className="bg-white flex h-full px-6 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader title="The Team">
            <p className="text-[15px] xl:text-[18px] font-lora leading-[25px] home-text-color">
              <span className="font-[300] opacity-80">
                {siteConfig.name} is a global investment organization with one
                single, relentless mission:
              </span>
              <br />
              <span className="font-normal">
                to change the world of finance.
              </span>
            </p>
          </PagesHeader>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 mb-5">
            {teams.map((v: any, i: any) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="relative group w-full pb-[100%] overflow-hidden">
                  {/* Background Img */}
                  <Image
                    src={v.picture}
                    alt={"team1"}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/assets/dessert.jpeg"
                    quality={25}
                    className="absolute inset-0"
                  />

                  <Link
                    href={`mailto:${siteConfig.mailAddress}`}
                    className="px-4 hidden md:flex opacity-0 group-hover:opacity-100 absolute bottom-3 left-0 w-full"
                  >
                    <AnimatedButtonTeams title="Contact" />
                  </Link>
                </div>
                <p className="mb-2 font-light font-lora mt-1">{v.name}</p>
                <Link href={`mailto:${siteConfig.mailAddress}`}>
                  <button className="md:hidden text-[14px] w-full mb-4 border border-black hover:border-[#4fe18b] hover:text-[#4fe18b] py-2">
                    Contact
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
