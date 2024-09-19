import { siteConfig } from "@/config/site";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useRouter } from "next/router";

interface LinkType {
  path: string;
  title: string;
}

export const Navbar = () => {
  const router = useRouter(); // Get current route

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
        <h1 className="text-[20px] cursor-pointer">
          <span className="font-bold font-rubik">Aorta</span>{" "}
          <span className="font-light">Capital</span>
        </h1>
      </Link>

      <div className="top-4 fixed right-3">
        <IoIosMenu className="cursor-pointer flex sm:hidden" size={30} />
      </div>

      <ul className="hidden sm:flex gap-7">
        {Links.map((v: LinkType, i: number) => {
          const isActive = router.pathname === v.path; // Check if current path is active

          return (
            <li key={i} className="list-none">
              <Link href={v.path}>
                <p
                  className={`relative text-[11px] uppercase font-lato font-light hover:text-[#4fe18b] ${
                    isActive
                      ? "text-[#4fe18b] underline underline-offset-4 font-bold"
                      : "text-black"
                  } group`}
                >
                  {v.title}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[1px] bg-[#4fe18b] transition-all duration-200 ease-in-out w-0 group-hover:w-full`}
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
