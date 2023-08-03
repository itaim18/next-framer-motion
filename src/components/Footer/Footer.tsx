"use client";
import { motion } from "framer-motion";
import React from "react";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};
function Footer() {
  return (
    <div className="border w-screen items-center justify-center flex flex-row">
      <h4 className="text-3xl mr-3"> 2023 Itai Mizlish </h4>{" "}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 512 512"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          scale: { delay: 2, duration: 0.7, ease: "easeInOut" },
          rotate: { delay: 2, duration: 0.7, ease: "easeInOut" },
        }}
      >
        <motion.path
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 0.5, ease: [1, 0, 0.8, 1] },
          }}
          stroke="white"
          variants={icon}
          initial="hidden"
          animate="visible"
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
      </motion.svg>
    </div>
  );
}

export default Footer;
