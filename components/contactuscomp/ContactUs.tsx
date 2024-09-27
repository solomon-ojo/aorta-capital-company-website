import Link from "next/link";
import React from "react";

const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Mission",
    link: "/mission",
  },
  {
    title: "Our Companies",
    link: "/our-companies",
  },
  {
    title: "Team",
    link: "/team",
  },
];

export const ContactUsComp = () => {
  return (
    <div className="flex pb-7 px-4 items-center gap-16 flex-wrap">
      {links.map((data) => (
        <Link
          key={data.link}
          className=" underline leading-[0px] decoration-gray-300 underline-offset-4"
          href={data.link}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};
