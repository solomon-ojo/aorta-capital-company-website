import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  isImgRight: boolean;
  img: string;
  title: any;
  button_title:any
  titleItalic?: boolean;
  description: string;
  button_url: string;
};

export const LeftAndRightComp = ({
  isImgRight,
  title,
  img,
  titleItalic,
  button_title,
  button_url,
  description,
}: Props) => {
  return (
    <div
      className={`max-w-[1200px] flex flex-col gap-6 lg:gap-0 lg:flex-row items-center w-full ${
        isImgRight ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text Section */}
      <div className="w-full flex flex-col px-3 xl:px-0 gap-4">
        <h1
          className={`text-[35px] leading-[40px] sm:leading-[80px] md:text-[66px] lg:text-[66px] font-testsignifier font-[300]`}
        >
          {title}
        </h1>
        <p className="pt-3 pb-7 text-[15px] md:text-[16px] lg:text-[18px] w-full md:max-w-[520px] font-[400]">
          {description}
        </p>
        <Link href={button_url}>
            <button className="about-hero-blue-bg">{button_title}</button>
        </Link>
      </div>

      {/* Image Section */}
      <div
        className={`w-full flex px-0 md:px-3 xl:px-0 flex-col ${isImgRight ? "items-end" : "items-start"}`}
      >
        <div className="w-[100%] lg:w-[85%] h-[450px] md:h-[600px] lg:h-[700px] relative">
          <Image
            quality={40}
            src={img}
            alt="test-img"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
