import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Header Text */}
      <div className="flex px-2 md:px-6 flex-col items-center justify-center h-[100px] lg:h-[200px]">
        <div className="max-w-[1250px] w-full">
          <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[85px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
            Transform Your Space <br />
            with Timeless Furniture
          </h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="lg:flex-1 mt-[60px] h-[50vh] md:h-[70vh] lg:h-[100svh] relative">
        <Image
          src={"/assets/testbg.avif"}
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "left 50%" }}
          quality={75}
          priority
        />
      </div>
    </div>
  );
};
