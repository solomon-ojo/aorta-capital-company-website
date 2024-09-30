import { useEffect, useRef } from "react";
import { companies } from "@/data/objects";
import Link from "next/link";

export default function FeaturedProjectComp() {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;

    const autoScroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.offsetWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    // Set the interval for auto-scrolling
    const scrollInterval = setInterval(autoScroll, 40);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="flex justify-center w-full">
      {/* Horizontal Scroll Container */}
      <div
        className="relative overflow-x-scroll overflow-y-hidden scrollbar-hide w-full"
        ref={scrollContainerRef}
      >
        <div className="flex gap-6">
          {companies.concat(companies).map((data, index) => (
            <Link
              href={`/our-companies/${data.name.toLowerCase()}`}
              key={`${data.name}-${index}`}
              className=""
            >
              <div className="w-[260px] md:w-[400px] h-[350px] md:h-[600px] flex-shrink-0 relative">
                <img
                  src={data.imageUrl}
                  alt={data.imageUrl}
                  className="w-full h-full object-cover"
                />
                <div className="bg-[#00000092] flex items-center p-2 absolute bottom-0 h-[35%] md:h-[20%] w-full">
                  <div>
                    <h1 className="text-white font-testsignifier font-semibold text-[30px]">
                      {data.name}
                    </h1>
                    <p className="text-white text-[14px] md:text-[16px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
