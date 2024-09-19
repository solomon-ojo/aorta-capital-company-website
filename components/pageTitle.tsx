import React from "react";

interface Types {
  text: React.ReactNode;
}

export const PageTitle = ({ text }: Types) => {
  return (
    <p className="text-[15px] paragraph font-semibold xl:text-[18px] font-lato leading-[25px] home-text-color">
      {text}
    </p>
  );
};
