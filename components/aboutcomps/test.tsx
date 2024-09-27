import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

interface Types {
  children: React.ReactNode;
}

export function MyMotionComponent({ children }: Types) {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
    </>
  );
}
