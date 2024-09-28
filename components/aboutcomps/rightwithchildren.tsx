import Image from "next/image";

type Props = {
  img: string;
  children: React.ReactNode;
};

export const RightWithChildren = ({ img, children }: Props) => {
  return (
    <div
      className={`max-w-[1200px] flex flex-col gap-6 lg:gap-0 lg:flex-row items-center w-full`}
    >
      {/* Text Section */}
      <div className="w-full flex flex-col px-3 xl:px-0 gap-4">{children}</div>

      {/* Image Section */}
      <div className={`w-full flex px-0 md:px-3 xl:px-0 flex-col items-end`}>
        <div className="w-[100%] lg:w-[85%] h-[450px] md:h-[600px] lg:h-[700px] relative">
          <Image
            src={img}
            quality={40}
            alt="test-img"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
