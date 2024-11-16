/* eslint-disable react/prop-types */
// HamburgerButton.jsx

import { motion } from "framer-motion";

const HamburgerBtn = ({ isOpen, setIsOpen, handleMenu }) => {
  const toggleMenu = () => {
    handleMenu();
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center w-12 h-12 bg-transparent border-none cursor-pointer"
      aria-label="Toggle menu"
    >
      <motion.div
        className="w-7 h-0.5 bg-white mb-1"
        initial={{ rotate: 0, translateY: 0 }}
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-7 h-0.5 bg-white mt-1"
        initial={{ rotate: 0, translateY: 0 }}
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default HamburgerBtn;
