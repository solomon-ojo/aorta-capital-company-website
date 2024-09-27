import { MdOutlinePeopleAlt } from "react-icons/md";

type Types = {
  title: string;
  icon: any;
};

export const CardCol = ({ title, icon }: Types) => {
  return (
    <div className="flex gap-4 flex-col items-center w-full sm:w-[300px]">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full about-hero-yellow-bg flex items-center justify-center">
        {icon}
      </div>
      <p className="text-[14px] md:text-[18px] font-semibold">{title}</p>
    </div>
  );
};
