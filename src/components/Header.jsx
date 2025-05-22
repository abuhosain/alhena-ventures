"use client";

import { useState } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/alhena-logo.svg";

const navItems = ["Home", "Services", "Pages", "Portfolio", "Contact Us"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-[#1a1a1a] w-full fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} className="h-10" alt="Alhena Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <motion.a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    index === 0
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info & Button */}
        <div className="hidden lg:flex items-center gap-8">
          <motion.div
            className="flex gap-3 items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-800 p-2 rounded-full">
              <FaPhone className="text-2xl text-[#9aabbf]" />
            </div>
            <div>
              <span className="text-[#9aabbf] text-sm block leading-none">
                For Inquiry
              </span>
              <p className="text-white font-semibold leading-tight">
                +990-737 621 432
              </p>
            </div>
          </motion.div>

          <motion.button
            className="bg-white uppercase text-[#1a1a1a] px-6 py-3 rounded-md font-semibold"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#facc15", // Tailwind yellow-400
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-[#1a1a1a] border-t border-gray-800 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block text-lg font-medium py-2 ${
                        index === 0 ? "text-yellow-500" : "text-white"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-800 flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div className="bg-gray-800 p-2 rounded-full">
                  <FaPhone className="text-xl text-[#9aabbf]" />
                </div>
                <div>
                  <span className="text-[#9aabbf] text-sm block leading-none">
                    For Inquiry
                  </span>
                  <p className="text-white font-semibold leading-tight">
                    +990-737 621 432
                  </p>
                </div>
              </div>

              <motion.button
                className="bg-white uppercase text-[#1a1a1a] px-6 py-3 rounded-md font-semibold"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#facc15",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
