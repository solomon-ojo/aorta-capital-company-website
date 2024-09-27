import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
}

export const CompanyCardText = ({ title, description }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  return (
    <div ref={ref} className={`${isInView ? "text-black" : "text-gray-300"}`}>
      <h1
        className={`text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold`}
      >
        {title}
      </h1>
      <p className="text-[20px] font-lato">{description}</p>
    </div>
  );
};
