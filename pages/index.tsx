import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  const Links = [
    {
      title: "Mission",
      path: "/mission",
    },
    {
      title: "Our Companies",
      path: "/our-companies",
    },
    {
      title: "Team",
      path: "/team",
    },
  ];

  return (
    <div
      className={`relative items-center justify-center flex flex-col bg-herobg h-[100svh]`}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-green-100 text-[17px] sm:text-[40px] py-3 px-6 sm:px-8 border-1 border-green-100 font-thin tracking-[0.6rem] font-lora">
          AORTA CAPITAL
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-start">
          <div className=" basis-[100%] w-full sm:basis-[50%] px-4 sm:px-6 ">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Seestrase+14,+Berlin,+Germany+13347"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="underline text-green-50 hover:text-yellow-100 leading-6  underline-offset-4 text-center text-[14px] font-lora">
                Seestrase 14, <br />{" "}
                <span className=" decoration-zinc-400 underline underline-offset-4">
                  Berlin, Germany 13347
                </span>
              </p>
            </Link>
            <Link href={`mailto:${siteConfig.mailAddress}`}>
              <p className=" leading-6 text-green-50 hover:text-yellow-100 underline-offset-4 text-center text-[14px] font-lora">
                <span className="underline text-zinc-400">More info:</span>{" "}
                <span className=" underline underline-offset-4 decoration-zinc-400">
                  @aorta
                </span>
              </p>
            </Link>
          </div>

          <div className="basis-[100%] w-full sm:basis-[50%] px-4 sm:px-6">
            {Links.map((v: any, i: any) => (
              <Link key={i} href={v.path}>
                <p className="underline text-green-50 hover:text-yellow-100 leading-6 underline-offset-4 text-center text-[14px] font-lora">
                  {v.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
