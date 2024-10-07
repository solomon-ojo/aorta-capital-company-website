import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { GiStarShuriken } from "react-icons/gi";
import { RiChat3Fill } from "react-icons/ri";
import { PiHandsClappingBold } from "react-icons/pi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import Link from "next/link";

type PostTypes = {
  id: any;
  author: string;
  title: string;
  description: string;
  avatar_src: string;
  created_at: string;
  likes: string;
  comment: string;
  post_img: string;
};

export const BlogPostComp = ({
  id,
  author,
  title,
  description,
  avatar_src,
  created_at,
  likes,
  comment,
  post_img,
}: PostTypes) => {
  return (
    <div className="flex items-center justify-between pb-5 border-b border-gray-200 w-full">
      {/* Left section (80%) */}
      <div className=" flex flex-col gap-3">
        <div className="flex items-center gap-2 basis-[75%] w-full flex-grow">
          <Avatar src={avatar_src} className="w-6 h-6 text-tiny shrink-0" />
          <p className="text-[13px]">{author}</p>
        </div>
        <h1 className="text-[20px] md:text-[28px] leading-6 sm:leading-9 font-lora font-bold">
          {title}
        </h1>
        <p className="text-[13px] font-[300] opacity-80">
          {description.length > 123
            ? description.substring(0, 123) + "..."
            : description}
        </p>

        {/* Action */}
        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-4 basis-[100%] w-full">
            <GiStarShuriken color="#FFC016" size={18} />
            <p className="text-[12px] font-[300] opacity-90">{created_at}</p>
            <div className="flex items-center gap-1">
              <RiChat3Fill size={16} className="text-gray-600" />
              <p className="text-[13px] font-[300] opacity-90">{comment}</p>
            </div>
            <div className="flex items-center gap-1">
              <PiHandsClappingBold size={16} className="text-gray-600" />
              <p className="text-[13px] font-[300] opacity-90">{likes}</p>
            </div>
            <MdOutlineBookmarkAdd size={16} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Right section (20%) */}
      <div className="flex basis-[20%] w-full shrink-0">
        <Image
          src={post_img}
          loading="lazy"
          quality={40}
          alt="Blog post image"
          width={100} // Set this to a responsive size based on your layout
          height={50} // Adjust height accordingly
          className="object-cover h-[80px] md:h-[100px] w-full"
        />
      </div>
    </div>
  );
};
