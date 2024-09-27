import { Avatar } from "@nextui-org/avatar";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const TeamComponent = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const isTopInView = useInView(topRef, { once: true });
  const isBottomInView = useInView(bottomRef, { once: true });

  // Slide-in and fade-in animation variants
  const slideInLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const slideInRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="flex px-6 xl:px-0 max-w-[1250px] py-24 gap-14 flex-col justify-center">
      {/* Top */}
      <motion.div
        ref={topRef}
        initial="hidden"
        animate={isTopInView ? "visible" : "hidden"}
        variants={slideInLeftVariant}
        className="flex flex-col md:flex-row items-center"
      >
        {/* Left */}
        <div className=" w-full basis-[100%] md:basis-[15%] xl:basis-[31%]">
          <p className="text-zinc-500">[TEAM]</p>
        </div>
        {/* Right */}
        <motion.div
          variants={slideInRightVariant}
          className="w-full basis-[69%] flex flex-col gap-5"
        >
          <h1 className="font-lato text-[43px] md:text-[50px] lg:text-[65px] xl:text-[82px] font-semibold  text-[#3ded98]">
            Meet our team
          </h1>
          <p className="font-lato text-[18px] leading-[25.2px] font-semibold text-[#d9d9d9]">
            Our design agency is powered by a dynamic team of visionary
            designers, meticulous researchers, pioneering 3D artists, creative
            programmers, and strategic marketing experts. We thrive on pushing
            boundaries and embracing new challenges. Fueled by a passion for
            innovation, we are dedicated to continuous growth and delivering
            exceptional, forward-thinking solutions.
          </p>
          <motion.button
            className="h-[55px] w-[140px] bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        ref={bottomRef}
        initial="hidden"
        animate={isBottomInView ? "visible" : "hidden"}
        variants={slideInRightVariant}
        className="flex flex-col md:flex-row items-start md:items-center gap-[30px] md:gap-[50px] lg:gap-[100px] xl:gap-[220px]"
      >
        <motion.img
          src="/assets/teamtest.avif"
          alt=""
          variants={slideInLeftVariant}
          className="w-[300px] lg:w-[350px] xl:w-[450px]"
        />
        <motion.div variants={slideInRightVariant}>
          <h1 className="text-[28px] xl:text-[36px] font-lato font-semibold">
            <span className="text-zinc-400 ">Feedback</span>{" "}
            <span className="text-[#d9d9d9]"> from client</span>
          </h1>
          <p className="text-[16px] md:text-[20px] xl:text-[24px] my-3 md:my-6 text-[#d9d9d9] font-semibold font-lato ">
            User-friendly design and perfect service! Our brand identity has
            reached new heights. We strongly recommend this agency for
            extraordinary outcomes.
          </p>
          <p className="text-[18px] text-[#d9d9d9] font-semibold font-lato">
            <span className="mr-2">Ryan Baptista</span>
            <span className="text-zinc-400 ">Founder, Design</span>
          </p>
          <div className="flex mt-8 md:mt-16 items-center gap-4">
            <Avatar
              className="border border-white"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="sm"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
