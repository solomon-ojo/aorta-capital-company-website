import { PagesHeader } from "@/components/pagesHeader";
import { companies } from "@/data/objects";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import Link from "next/link";

export default function CompaniesPage() {
  return (
    <DefaultLayout>
      <section className="bg-white flex h-full px-6 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader title="Our Companies">
            <p className="text-[15px] xl:text-[18px] font-lora leading-[25px] home-text-color">
              <span className="font-[300] opacity-80">
                We have a level ground to play on:
              </span>
              <br />
              <span className="font-semibold">
                There has never been a better time to effect a change in
                Africa...
              </span>
            </p>
          </PagesHeader>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
            {companies.map((company, index) => (
              <Link
                href={`/our-companies/${company.name.toLowerCase()}`}
                key={index}
                className=" cursor-pointer hover:scale-95 transition-all duration-300 relative w-full pb-[100%] overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={company.imageUrl}
                  alt={company.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                  placeholder="blur"
                  blurDataURL="/assets/dessert.jpeg"
                  quality={25}
                  className="absolute inset-0"
                />
                {/* Overlay */}
                <div className="absolute w-full bottom-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-white font-lora text-[30px] sm:text-[40px] font-bold">
                    {company.name}
                  </h3>
                  <p className="text-white font-lora leading-6 text-[16px] sm:text-[20px]">
                    {company.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
