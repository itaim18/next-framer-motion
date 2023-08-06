"use client";

import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import React from "react";

const Logo = ({ closeMenu }: { closeMenu: () => void }) => {
  const [animate, setAnimate] = React.useState<boolean>(true);

  const icon = {
    hidden: {
      pathLength: 0,
      scale: 0.8,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      scale: 0.8,
      fillOpacity: 1,
    },
  };

  const rerender = async () => {
    closeMenu();
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };
  const pathLength = useMotionValue(1);

  return (
    <>
      <Link href={"/"}>
        <motion.svg
          width="94.141"
          height="68.36"
          viewBox="0 0 94.141 68.36"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{
            scale: 1,
            textShadow: "5px 5px 5px 0px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{
            scale: 0.8,
          }}
          scale={0.8}
          onClick={rerender}
          className="hover:shade fill-black"
          style={{ outline: "none" }}
        >
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            strokeWidth="0.25mm"
            className="stroke-black fill-black dark:stroke-white"
            style={{ strokeWidth: "0.25mm" }}
          >
            <motion.path
              d="M 63.574 52.539 L 62.598 52.539 A 6.24 6.24 0 0 1 61.477 52.444 Q 60.804 52.321 60.254 52.04 A 3.877 3.877 0 0 1 60.181 52.002 Q 59.18 51.465 58.447 50.635 Q 57.715 49.805 57.202 48.779 A 18.019 18.019 0 0 1 56.578 47.393 A 15.455 15.455 0 0 1 56.348 46.777 L 47.07 20.02 L 45.801 20.02 L 45.801 60.742 A 22.24 22.24 0 0 1 45.725 62.619 A 18.48 18.48 0 0 1 45.605 63.672 A 6.565 6.565 0 0 1 45.21 65.184 A 5.613 5.613 0 0 1 44.751 66.089 A 4.21 4.21 0 0 1 43.484 67.365 A 5.489 5.489 0 0 1 42.798 67.749 A 5.448 5.448 0 0 1 41.719 68.115 Q 40.679 68.359 39.258 68.359 Q 37.619 68.359 36.427 68.105 A 6.681 6.681 0 0 1 35.254 67.749 Q 33.789 67.139 33.057 66.089 Q 32.324 65.039 32.129 63.672 A 19.35 19.35 0 0 1 31.961 61.887 A 23.303 23.303 0 0 1 31.934 60.742 L 31.934 11.133 A 67.4 67.4 0 0 1 32.056 7.031 A 11.773 11.773 0 0 1 32.337 5.056 A 9.204 9.204 0 0 1 32.861 3.467 A 5.601 5.601 0 0 1 35.034 0.952 Q 36.112 0.263 37.843 0.073 A 12.973 12.973 0 0 1 39.258 0 L 45.898 0 A 37.737 37.737 0 0 1 47.071 0.017 Q 47.631 0.035 48.115 0.07 A 17.682 17.682 0 0 1 48.706 0.122 A 4.353 4.353 0 0 1 50.83 0.952 Q 51.54 1.467 52.236 2.432 A 12.214 12.214 0 0 1 52.759 3.223 A 17.747 17.747 0 0 1 53.373 4.326 Q 54.023 5.588 54.754 7.384 A 61.178 61.178 0 0 1 54.858 7.642 A 94.133 94.133 0 0 1 55.455 9.168 Q 56.323 11.441 57.37 14.481 A 266.05 266.05 0 0 1 57.52 14.917 A 5604.075 5604.075 0 0 1 58.751 18.516 Q 59.304 20.135 59.924 21.951 A 11671.625 11671.625 0 0 1 61.23 25.781 L 62.5 29.688 L 63.672 29.688 L 65.234 24.805 Q 66.611 20.575 67.71 17.245 A 1057.913 1057.913 0 0 1 68.652 14.404 A 239.914 239.914 0 0 1 69.339 12.373 Q 70.271 9.66 71.035 7.676 A 82.091 82.091 0 0 1 71.143 7.398 A 55.651 55.651 0 0 1 71.793 5.797 Q 72.411 4.345 72.946 3.372 A 14.414 14.414 0 0 1 73.071 3.15 Q 73.68 2.088 74.339 1.423 A 4.763 4.763 0 0 1 74.878 0.952 A 4.187 4.187 0 0 1 76.953 0.122 Q 77.725 0.038 78.728 0.012 A 36.766 36.766 0 0 1 79.688 0 L 86.816 0 Q 89.551 0 91.04 0.952 A 5.601 5.601 0 0 1 93.213 3.467 A 9.477 9.477 0 0 1 93.838 5.534 A 12.217 12.217 0 0 1 94.019 7.031 A 67.4 67.4 0 0 1 94.141 11.133 L 94.141 60.742 A 22.24 22.24 0 0 1 94.064 62.619 A 18.48 18.48 0 0 1 93.945 63.672 A 5.738 5.738 0 0 1 93.427 65.393 A 5.231 5.231 0 0 1 93.018 66.089 Q 92.295 67.125 90.859 67.733 A 7.283 7.283 0 0 1 90.82 67.749 A 6.628 6.628 0 0 1 89.686 68.097 Q 88.501 68.355 86.868 68.359 A 20.914 20.914 0 0 1 86.816 68.359 Q 85.354 68.359 84.296 68.101 A 5.382 5.382 0 0 1 83.276 67.749 A 5.14 5.14 0 0 1 82.187 67.068 A 4.082 4.082 0 0 1 81.323 66.089 A 5.874 5.874 0 0 1 80.586 64.295 A 7.122 7.122 0 0 1 80.469 63.672 A 19.35 19.35 0 0 1 80.301 61.887 A 23.303 23.303 0 0 1 80.273 60.742 L 80.273 20.02 L 78.906 20.02 L 69.727 46.777 A 33.272 33.272 0 0 1 69.086 48.27 A 37.323 37.323 0 0 1 68.848 48.779 A 7.961 7.961 0 0 1 67.627 50.635 A 6.329 6.329 0 0 1 65.918 52.002 A 4.215 4.215 0 0 1 64.658 52.444 A 5.852 5.852 0 0 1 63.574 52.539 Z M 0 57.129 L 0 11.231 Q 0 9.131 0.22 7.129 A 11.222 11.222 0 0 1 0.683 4.912 A 9.35 9.35 0 0 1 1.245 3.54 A 6.276 6.276 0 0 1 3.562 1.038 A 7.488 7.488 0 0 1 3.662 0.977 A 5.935 5.935 0 0 1 5.165 0.347 Q 5.87 0.152 6.712 0.066 A 13.855 13.855 0 0 1 8.105 0 Q 9.964 0 11.297 0.421 A 5.737 5.737 0 0 1 12.549 0.977 Q 14.16 1.953 14.966 3.54 A 9.793 9.793 0 0 1 15.809 5.977 A 11.998 11.998 0 0 1 15.991 7.129 Q 16.211 9.131 16.211 11.231 L 16.211 57.129 A 43.28 43.28 0 0 1 16.061 60.777 A 39.249 39.249 0 0 1 16.016 61.279 A 10.841 10.841 0 0 1 15.577 63.483 A 9.049 9.049 0 0 1 15.015 64.868 A 6.065 6.065 0 0 1 12.725 67.317 A 7.308 7.308 0 0 1 12.573 67.407 A 6.181 6.181 0 0 1 11.055 68.022 Q 9.793 68.359 8.105 68.359 Q 6.247 68.359 4.914 67.949 A 5.811 5.811 0 0 1 3.662 67.407 Q 2.051 66.455 1.245 64.868 A 9.793 9.793 0 0 1 0.402 62.431 A 11.998 11.998 0 0 1 0.22 61.279 A 37.578 37.578 0 0 1 0.003 57.664 A 41.482 41.482 0 0 1 0 57.129 Z"
              vectorEffect="non-scaling-stroke"
              variants={icon}
              initial="hidden"
              style={{ pathLength }}
              scale={0.4}
              className="fill-black dark:fill-white"
              animate={animate ? "visible" : "hidden"}
              transition={{
                default: { duration: animate ? 2 : 0, ease: "easeInOut" },
                fillOpacity: {
                  duration: animate ? 2 : 0,
                  ease: [1, 0, 0.8, 1],
                },
              }}
            />
          </g>
        </motion.svg>
      </Link>
    </>
  );
};

export default Logo;
