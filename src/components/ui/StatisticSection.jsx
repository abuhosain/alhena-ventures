"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, animate } from "framer-motion";

const StatisticsSection = () => {
  return (
    <section className="py-24 w-full bg-white">
      <div className="    px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-gray-900   md:text-4xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our accomplishments and the trust our clients place
            in our expertise.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <StatCard number={35} text="Professional Experts" delay={0} />
          <StatCard number={1700} text="Completed Projects" delay={0.2} />
          <StatCard number={5} text="Year of Experience" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, text, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const counterRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      const node = counterRef.current;
      const startValue = 0;

      const animation = animate(startValue, number, {
        duration: 2,
        delay: delay,
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
        ease: "easeOut",
      });

      return () => animation.stop();
    }
  }, [isInView, controls, number, delay]);

  const circleVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, delay: delay, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: delay },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-center justify-center"
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute top-0 left-0"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeLinecap="round"
            variants={circleVariants}
            initial="hidden"
            animate={controls}
          />
        </svg>
        <div className="text-center z-10">
          <h3
            ref={counterRef}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            0
          </h3>
          <p className="text-gray-600 mt-2 text-lg">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatisticsSection;
