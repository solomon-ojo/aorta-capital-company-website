import { siteConfig } from "@/config/site";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

interface LinkType {
  path: string;
  title: string;
}

export const Navbar = () => {
  const Links: LinkType[] = [
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
    <nav className="max-screen-width relative w-full flex justify-between items-center">
      <Link href={siteConfig.pathLinks.home}>
        <h1 className="text-[20px]">
          <span className="font-bold font-rubik">Aorta</span>{" "}
          <span className="font-light">Capital</span>
        </h1>
      </Link>

      <div className="top-4 fixed right-3">
        <IoIosMenu className="cursor-pointer flex sm:hidden" size={30} />
      </div>

      <ul className="hidden sm:flex gap-7">
        {Links.map((v: any, i: any) => (
          <Link key={i} href={v.path}>
            <li className="text-[11px] hover:text-[#4fe18b] uppercase font-lato font-light">
              {v.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
