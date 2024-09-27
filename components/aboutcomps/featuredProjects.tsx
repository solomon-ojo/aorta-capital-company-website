import { motion } from "framer-motion";

export default function FeaturedProjectComp() {
  const images = [
    "/assets/company/nulgen2.png",
    "/assets/company/viola2.jpg",
    "/assets/company/teresamed.png",
    "/assets/company/ezzra.jpg",
    "/assets/company/molus.jpg",
    "/assets/company/molus3.jpg",
    "/assets/company/papperboy.jpg",
    "/assets/company/molus5.jpg",
    "/assets/company/yellowsun3.jpg",
    "/assets/company/thesislab.png",
    "/assets/company/mr_man.jpg",
    "/assets/company/hexis.jpg",
    "/assets/company/hexsis.jpg",
  ];

  const scrollVariants = {
    animate: {
      x: [0, -4000], // Scroll distance (400px * 10 images)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // Speed of the scroll
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="flex justify-center w-full">
      {/* Horizontal Scroll Container */}
      <div className="relative overflow-scroll scrollbar-hide w-full">
        <motion.div
          className="flex gap-6"
          variants={scrollVariants}
          animate="animate"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="w-[240px] md:w-[400px] lg:w-[580px] h-[280px] md:h-[600px] lg:h-[800px] flex-shrink-0 relative"
            >
              <img
                src={src}
                alt="sknks"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {/* Repeat the images to create the loop effect */}
          {images.map((src, index) => (
            <motion.div
              key={index + images.length}
              className="w-[240px] md:w-[400px] lg:w-[580px] h-[280px] md:h-[600px] lg:h-[800px] flex-shrink-0 relative"
            >
              <img
                src={src}
                alt="sknksss"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
