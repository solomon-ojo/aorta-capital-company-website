import { PagesHeader } from "@/components/pagesHeader";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";

const companies = [
  {
    name: "Nulgen",
    description: "AI Powered e-learning platform and career companion",
    imageUrl: "/assets/company1.jpg", // Replace with actual image URL
  },
  {
    name: "Viola",
    description: "Internship for high school students",
    imageUrl: "/assets/company2.jpg", // Replace with actual image URL
  },
  {
    name: "Teresamed",
    description: "Free, virtual health care",
    imageUrl: "/assets/company3.jpg", // Replace with actual image URL
  },
  {
    name: "Ezzra",
    description: "Church database and AI Bot",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Molus",
    description: "International shipping optimized",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Papperboy",
    description: "Payment processing for international e-commerce",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Getwasabi",
    description: "AI legal assistant",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Bourgeon",
    description: "Startup studio",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Yellowsun",
    description: "Remote freelance job for African talents",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Thesislab/Thesis4u",
    description: "AI Thesis writer and collaboration platform",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "MrMan",
    description: "Generative AI for WestAfrica",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Paperboy.shop",
    description: "Alibaba for made in Nigeria products",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
  {
    name: "Hexis",
    description: "School Management platform for West African schools",
    imageUrl: "/assets/ceo.jpg", // Replace with actual image URL
  },
];

export default function DocsPage() {
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
              <div
                key={index}
                className=" cursor-pointer hover:scale-95 transition-all duration-500 relative w-full pb-[100%] overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={company.imageUrl}
                  alt={company.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                  quality={40}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
