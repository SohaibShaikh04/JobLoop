import React from "react";
import { motion } from "framer-motion";
function Header() {
  return (
    <div className="mt-10 flex flex-col gap-5 items-center justify-center text-white">
      <h1 className="text-4xl font-bold whitespace-nowrap">
        Find your dream job effortlessly with our smart job portal—connecting
        you to the best opportunities
      </h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 2 }}
        transition={{ duration: 5.5 }}
        className="text-3xl font-bold"
      >
        Start your career journey today!
      </motion.p>
    </div>
  );
}

export default Header;
