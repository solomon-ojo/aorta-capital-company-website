import React, { useCallback, forwardRef, useImperativeHandle } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  // options?: EmblaOptionsType;
  slide: number;
};

const HeroCarousel = forwardRef((props, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollTo = (num: number) => {
    emblaApi?.scrollTo(num);
  };

  useImperativeHandle(ref, () => ({
    scrollTo,
  }));

  const scrollTos = useCallback(
    (num: number) => {
      emblaApi?.scrollTo(num);
    },
    [emblaApi]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative border-t-[11px] border-[#f8f0d9] flex-shrink-0 px-5 flex-grow-0 basis-[88%] md:basis-[750px] lg:basis-[800px] xl:basis-[900px] shadow-2xl bg-white mx-[120px] h-[550px] ">
          <Image
            quality={40}
            src={"/assets/company/nulgen2.png"}
            alt="test-img"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="embla__slide relative border-t-[11px] border-[#f8f0d9] flex-shrink-0 px-5 flex-grow-0 basis-[88%] md:basis-[750px] lg:basis-[800px] xl:basis-[900px] shadow-2xl bg-white mx-[120px] h-[550px] ">
          <Image
            quality={40}
            src={"/assets/company/wasabi.jpg"}
            alt="test-img"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="embla__slide relative border-t-[11px] border-[#f8f0d9] flex-shrink-0 px-5 flex-grow-0 basis-[88%] md:basis-[750px] lg:basis-[800px] xl:basis-[900px] shadow-2xl bg-white mx-[120px] h-[550px] ">
          <Image
            quality={40}
            src={"/assets/company/ezzra2.jpg"}
            alt="test-img"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
});

// Set the display name explicitly
HeroCarousel.displayName = "HeroCarousel";

export default HeroCarousel;
