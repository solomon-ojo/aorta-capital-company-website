import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useRouter } from "next/router";
import { VscMenu } from "react-icons/vsc";

interface LinkType {
  path: string;
  title: string;
}

interface NavbarProps {
  toggleMenu: () => void;
  openState: boolean;
}

export const Navbar = ({ toggleMenu, openState }: NavbarProps) => {
  const router = useRouter();

  const Links: LinkType[] = [
    {
      title: "About",
      path: "/about",
    },
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
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="max-screen-width relative w-full flex justify-between items-center">
      <Link href={siteConfig.pathLinks.home}>
        <h1
          className={`text-[20px] font-lora md:text-black ${openState ? "text-white" : "text-black"} cursor-pointer`}
        >
          <span className="font-bold ">Aorta</span>{" "}
          <span className="font-light">Capital</span>
        </h1>
      </Link>

      <div
        role="presentation"
        onClick={toggleMenu}
        className="top-4 fixed right-6"
      >
        <VscMenu
          className={`cursor-pointer ${openState ? "text-white" : "text-black"} flex md:hidden`}
          size={25}
        />
      </div>

      <ul className="hidden md:flex gap-7">
        {Links.map((v: LinkType, i: number) => {
          const isActive = router.pathname === v.path; // Check if current path is active

          return (
            <li key={i} className="list-none">
              <Link href={v.path}>
                <p
                  className={`relative text-[11px] uppercase opacity-70 font-lora font-light hover:text-black ${
                    isActive
                      ? "text-black underline underline-offset-4 font-bold"
                      : "text-black"
                  } group`}
                >
                  {v.title}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-200 ease-in-out w-0 group-hover:w-full`}
                  ></span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
