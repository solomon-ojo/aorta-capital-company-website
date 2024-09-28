import { Image as NextUIImage } from "@nextui-org/image";

export const AboutCompanyCard = () => {
  return (
    <div className="max-w-[1250px] w-full flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center mb-12">
      {/* Left */}
      {/* Duplicate this section and when the user scrolls on the paraent div while the div is on sticky, the first div here should kind of rotate out on in vertical direction while the  second div scrolls in also in same direction. */}
      <div className="basis-[43%]  flex flex-col gap-4">
        <h1 className="text-[25px] sm:text-[40px] lg:text-[60px] leading-[35px] sm:leading-[45px] lg:leading-[75px] tracking-normal md:tracking-tight scale-y-125 uppercase font-bebas font-semibold">
          OUR DEDICATION
        </h1>
        <p className="text-[20px] font-lato">
          We create furniture that seamlessly blends timeless craftsmanship with
          contemporary design. Every piece is carefully crafted to enhance the
          aesthetic of your home while providing lasting durability. From the
          selection of premium materials to the attention to detail in every
          stitch and joint, our furniture is made to be beautiful.
        </p>
      </div>

      {/* Right */}
      {/* Duplicate this section and when the user scrolls on the paraent div while the div is on sticky, the first div here should kind of rotate out on in vertical direction while the  second div scrolls in also in same direction. */}
      <div className="basis-[43%] h-[400px] lg:h-full">
        <NextUIImage
          src="/assets/test1.avif"
          className="w-[500px] object-cover rounded-none h-[450px] lg:h-[750px]"
        />
      </div>
    </div>
  );
};
