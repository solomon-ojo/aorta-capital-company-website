import React from "react";

interface Types {
  children: React.ReactNode;
}

export const PagesHeader = ({ children }: Types) => {
  return (
    <div className="flex mt-[70px] mb-5 md:mt-[120px] flex-col justify-end border-b">
      {/* top */}
      <div>
        <h1 className="font-lora home-text-color text-[23px] xl:text-[38px] font-normal leading-[30px] xl:leading-[44px]">
          Mission
        </h1>
        <span className="h-[2px] bg-black w-4 block my-6"></span>
      </div>
      {/* Children */}
      <div className="mb-5 inline-block text-left">{children}</div>
    </div>
  );
};
