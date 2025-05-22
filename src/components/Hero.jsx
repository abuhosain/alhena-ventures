"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "./sparkles";
import { Star, Code, Smartphone, Globe, ChevronRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceIcons = [
    { icon: <Code className="w-6 h-6" />, label: "Software" },
    { icon: <Smartphone className="w-6 h-6" />, label: "Mobile Apps" },
    { icon: <Globe className="w-6 h-6" />, label: "Websites" },
  ];

  return (
    <>
      <div className="h-[100vh]  w-screen overflow-hidden bg-black">
        <motion.div
          className="mx-auto mt-32 w-screen max-w-4xl px-4 relative z-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main Heading */}
          <motion.div
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="text-indigo-200">We Compose Software </span>
            <br />
            <span>Masterpieces.</span>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            className="flex justify-center gap-8 my-8"
            variants={itemVariants}
          >
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-indigo-900/50 p-4 rounded-full mb-2 border border-indigo-500/30">
                  {service.icon}
                </div>
                <span className="text-indigo-200 text-sm">{service.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Description */}
          <motion.div
            className="text-center text-white/80 max-w-2xl mx-auto mt-8 mb-6 text-lg"
            variants={itemVariants}
          >
            Alhena Ventures offers custom software, mobile app, and website
            development services with expertise in solutions and powered tool.
          </motion.div>

          {/* Reviews */}
          <motion.div
            className="flex items-center justify-center gap-1 text-yellow-400 mt-4"
            variants={itemVariants}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400" />
            ))}
            <span className="text-white/70 ml-2 text-sm">
              Review On <span className="font-medium">(50 reviews)</span>
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-10 flex justify-center"
            variants={itemVariants}
          >
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 text-2xl font-medium font-[hosainb] dark:text-gray-50 text-black backdrop-blur-3xl">
                Learn More
              </span>
            </button>
          </motion.div>

          {/* Floating Badges */}
          <div className="absolute -left-4 top-20 md:left-0">
            <motion.div
              className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 text-xs text-white/90"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
            >
              5+ Years Experience
            </motion.div>
          </div>

          <div className="absolute right-4 bottom-10 md:right-10">
            <motion.div
              className="bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 text-xs text-white/90"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
            >
              1700+ Successful Projects
            </motion.div>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>

          {/* Animated Circles */}
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
            style={{ top: "20%", left: "20%" }}
          />

          <motion.div
            className="absolute w-60 h-60 rounded-full bg-blue-600/20 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
            style={{ top: "40%", right: "15%" }}
          />

          <Sparkles
            density={800}
            speed={1}
            size={1.1}
            color="#FFFFFF"
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
