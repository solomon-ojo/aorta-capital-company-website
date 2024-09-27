import { motion } from "framer-motion";

export default function FeaturedProjectComp() {
  const images = [
    "/assets/company/nulgen2.png",
    "/assets/company/nulgen.png",
    "/assets/company/viola2.jpg",
    "/assets/company/viola1.png",
    "/assets/company/viola2.jpg",
    "/assets/company/teresamed.png",
    "/assets/company/teresamed2.png",
    "/assets/company/teresamed.png",
    "/assets/company/ezzra.jpg",
    "/assets/company/ezzra.jpg",
    "/assets/company/ezzra2.jpg",
    "/assets/company/molus.jpg",
    "/assets/company/molus3.jpg",
    "/assets/company/molus4.jpg",
    "/assets/company/papperboy.jpg",
    "/assets/company/molus5.jpg",
    "/assets/company/any.png",
    "/assets/company/any.png",
    "/assets/company/any.png",
    "/assets/company/any.png",
    "/assets/company/bourgeon2.png",
    "/assets/company/bourgeon.jpg",
    "/assets/company/bourgeon3.jpg",
    "/assets/company/yellowsun3.jpg",
    "/assets/company/yellowsun3.jpg",
    "/assets/company/any.png",
    "/assets/company/thesislab.png",
    "/assets/company/thesislab.png",
    "/assets/company/any.png",
    "/assets/company/mr_man.jpg",
    "/assets/company/mr_man.jpg",
    "/assets/company/any.png",
    "/assets/company/hexis.jpg",
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
                alt={`Image ${index + 1}`}
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
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
