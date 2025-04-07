import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type Types = {
  title: string;
  description: string;
};

const IconComponent = () => {
  return (
    <div>
      <IoMdCheckmarkCircleOutline size={24} color="#0425e8" />
    </div>
  );
};

export const CardListComp = ({ title, description }: Types) => {
  return (
    <div className="flex items-start gap-2 sm:gap-4">
      {/* icon */}
      <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full about-hero-light-yellow-bg">
        <>
        <IconComponent /> 
        </>
      </div> 
      <div className="flex flex-col gap-1">
        <h1 className="text-[16px] sm:text-[20px] font-semibold">{title}</h1>
        <p className="text-[15px] sm:text-[18px] max-w-[99%] sm:max-w-[60%] lg:max-w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
};
