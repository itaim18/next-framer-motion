"use client";
import { usePathname } from "next/navigation";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Logo = ({ closeMenu }: { closeMenu: () => void }) => {
  const pName = usePathname();
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
  const devIcon = {
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
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
      <Link aria-label="back to home page" href={"/"}>
        <div className="relative">
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
          {pName === "/DevStream" && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.svg
                    className="absolute top-0 -right-20 rotate-3 transition-all duration-300 hover:inset-y-0 hover:rotate-0 h-6 w-auto"
                    width="68.904"
                    height="14.28"
                    viewBox="0 0 68.904 14.28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.g
                      id="svgGroup"
                      stroke-linecap="round"
                      fill-rule="evenodd"
                      font-size="9pt"
                      stroke="#ee1435"
                      variants={{
                        hidden: {
                          strokeWidth: 0,
                        },
                        visible: {
                          strokeWidth: 0.25,
                        },
                      }}
                      initial="hidden"
                      animate={animate ? "visible" : "hidden"}
                      transition={{
                        strokeWidth: {
                          delay: 0,
                          duration: 0,
                          ease: "easeInOut",
                        },
                      }}
                      fill="#ee1435"
                      style={{ stroke: "#ee1435", fill: "#ee1435" }}
                    >
                      <motion.path
                        variants={devIcon}
                        initial="hidden"
                        style={{ pathLength }}
                        animate={animate ? "visible" : "hidden"}
                        transition={{
                          default: {
                            duration: animate ? 3.6 : 0,
                            ease: "easeInOut",
                            delay: 2,
                          },
                          fillOpacity: {
                            delay: 2,
                            duration: animate ? 1.2 : 0,
                            ease: "easeInOut",
                          },
                        }}
                        d="M 3.312 12.576 L 3.696 12.576 A 0.816 0.816 0 0 0 3.857 12.599 A 0.941 0.941 0 0 0 3.9 12.6 L 4.128 12.6 Q 6.552 12.6 8.64 11.856 A 15.047 15.047 0 0 0 10.334 11.134 Q 11.171 10.711 11.843 10.216 A 8.613 8.613 0 0 0 12.144 9.984 A 11.355 11.355 0 0 0 13.453 8.721 A 8.874 8.874 0 0 0 14.34 7.524 A 6.321 6.321 0 0 0 14.83 6.562 Q 15.144 5.775 15.144 5.04 A 3.738 3.738 0 0 0 14.869 3.582 Q 14.509 2.724 13.68 2.112 A 5.18 5.18 0 0 0 12.302 1.371 A 4.796 4.796 0 0 0 11.892 1.248 Q 10.944 1.008 9.912 1.008 L 9.744 1.008 Q 8.112 1.008 5.796 1.584 A 38.473 38.473 0 0 0 3.966 2.09 Q 2.364 2.574 0.504 3.264 A 0.471 0.471 0 0 1 0.246 3.197 Q 0.06 3.078 0.014 2.75 A 1.695 1.695 0 0 1 0 2.52 A 0.41 0.41 0 0 1 0.023 2.38 Q 0.063 2.268 0.176 2.204 A 0.469 0.469 0 0 1 0.216 2.184 A 8.007 8.007 0 0 1 0.287 2.156 Q 0.395 2.114 0.58 2.045 A 63.377 63.377 0 0 1 0.624 2.028 Q 0.889 1.929 1.48 1.758 A 36.927 36.927 0 0 1 1.584 1.728 A 34.932 34.932 0 0 1 4.218 1.045 A 29.576 29.576 0 0 1 5.736 0.756 A 25.497 25.497 0 0 1 8.017 0.485 A 20.617 20.617 0 0 1 9.48 0.432 A 9.664 9.664 0 0 1 11.565 0.645 A 6.81 6.81 0 0 1 14.136 1.776 A 4.443 4.443 0 0 1 15.407 3.151 Q 15.921 4.042 15.957 5.179 A 5.449 5.449 0 0 1 15.96 5.352 A 5.193 5.193 0 0 1 15.608 7.201 A 6.767 6.767 0 0 1 15.18 8.112 A 8.573 8.573 0 0 1 13.679 10.052 A 10.269 10.269 0 0 1 13.032 10.632 Q 11.664 11.784 9.624 12.456 A 12.837 12.837 0 0 1 5.834 13.165 A 14.717 14.717 0 0 1 5.256 13.176 Q 3.329 13.176 3.014 12.907 A 0.151 0.151 0 0 1 2.952 12.792 A 0.179 0.179 0 0 1 3.059 12.621 Q 3.139 12.581 3.278 12.577 A 1.114 1.114 0 0 1 3.312 12.576 Z M 60.96 8.304 L 61.512 7.368 Q 61.953 6.615 62.394 6.107 A 4.923 4.923 0 0 1 62.664 5.82 A 2.173 2.173 0 0 1 63.132 5.465 A 1.639 1.639 0 0 1 63.936 5.256 L 63.984 5.256 A 1.144 1.144 0 0 1 64.499 5.364 Q 65.088 5.657 65.088 6.744 Q 65.088 7.317 64.891 8.217 A 14.29 14.29 0 0 1 64.872 8.304 Q 64.707 9.039 64.401 9.985 A 32.053 32.053 0 0 1 64.2 10.584 L 67.488 7.032 Q 67.824 6.84 68.352 6.84 A 2.155 2.155 0 0 1 68.525 6.846 Q 68.805 6.869 68.878 6.973 A 0.141 0.141 0 0 1 68.904 7.056 Q 67.944 9.648 67.944 10.848 A 4.763 4.763 0 0 0 67.956 11.202 Q 67.997 11.753 68.18 11.911 A 0.254 0.254 0 0 0 68.352 11.976 L 68.52 11.448 Q 68.592 11.616 68.592 11.952 Q 68.592 12.369 68.42 12.507 A 0.328 0.328 0 0 1 68.208 12.576 A 1.029 1.029 0 0 1 67.225 11.948 Q 66.996 11.485 66.965 10.68 A 6.794 6.794 0 0 1 66.96 10.416 A 7.906 7.906 0 0 1 66.976 9.926 Q 66.992 9.677 67.022 9.402 A 13.348 13.348 0 0 1 67.044 9.216 Q 67.128 8.544 67.296 7.728 A 6.957 6.957 0 0 0 66.812 8.263 A 6.254 6.254 0 0 0 66.732 8.364 Q 66.48 8.688 66.192 9.096 L 64.944 10.848 A 25.487 25.487 0 0 1 64.613 11.308 Q 64.003 12.133 63.76 12.28 A 0.181 0.181 0 0 1 63.672 12.312 Q 62.856 12.312 62.856 12.024 Q 62.856 12 63.12 10.896 A 61.433 61.433 0 0 0 63.447 9.61 Q 63.96 7.492 63.96 6.648 A 1.218 1.218 0 0 0 63.949 6.477 Q 63.902 6.144 63.648 6.144 Q 62.89 6.144 61.676 8.053 A 19.58 19.58 0 0 0 61.248 8.76 A 21.135 21.135 0 0 0 61.042 9.145 Q 60.863 9.488 60.66 9.9 A 35.527 35.527 0 0 0 60.278 10.702 A 29.883 29.883 0 0 0 60.072 11.16 Q 60.024 11.304 59.868 11.64 Q 59.712 11.976 59.568 12.276 A 8.473 8.473 0 0 1 59.534 12.346 Q 59.425 12.569 59.401 12.576 A 0.005 0.005 0 0 1 59.4 12.576 A 1.081 1.081 0 0 1 59.115 12.536 A 1.457 1.457 0 0 1 58.896 12.456 Q 58.684 12.36 58.642 12.232 A 0.205 0.205 0 0 1 58.632 12.168 Q 58.632 11.819 59.21 9.965 A 89.248 89.248 0 0 1 59.424 9.288 Q 60.05 7.317 60.181 6.124 A 5.328 5.328 0 0 0 60.216 5.544 Q 60.216 5.16 59.88 5.112 A 1.871 1.871 0 0 1 59.774 5.094 Q 59.619 5.063 59.568 5.016 A 0.065 0.065 0 0 1 59.544 4.968 A 0.179 0.179 0 0 1 59.651 4.797 Q 59.731 4.757 59.87 4.753 A 1.114 1.114 0 0 1 59.904 4.752 A 2.861 2.861 0 0 1 60.501 4.809 Q 61.378 4.997 61.494 5.809 A 1.856 1.856 0 0 1 61.512 6.072 Q 61.512 6.698 60.997 8.197 A 25.543 25.543 0 0 1 60.96 8.304 Z M 31.392 13.152 L 30.792 13.152 A 5.837 5.837 0 0 1 29.614 13.042 Q 28.233 12.757 27.576 11.736 L 27.624 11.592 Q 28.704 12.072 29.832 12.072 Q 31.032 12.072 32.16 11.616 A 4.18 4.18 0 0 0 32.604 11.416 Q 33.048 11.181 33.223 10.907 A 0.68 0.68 0 0 0 33.336 10.536 A 0.507 0.507 0 0 0 33.287 10.343 Q 33.113 9.941 32.33 9.1 A 18.247 18.247 0 0 0 32.304 9.072 Q 31.488 8.184 30.78 7.416 Q 30.246 6.837 29.965 6.463 A 3.92 3.92 0 0 1 29.808 6.24 A 3.166 3.166 0 0 1 29.346 4.849 A 3.96 3.96 0 0 1 29.328 4.464 A 2.693 2.693 0 0 1 30.081 2.594 A 4.09 4.09 0 0 1 30.612 2.112 Q 31.896 1.128 34.248 0.528 Q 35.214 0.292 35.844 0.161 A 21.291 21.291 0 0 1 35.988 0.132 Q 36.516 0.026 36.729 0.005 A 0.917 0.917 0 0 1 36.816 0 A 2.629 2.629 0 0 1 37.073 0.012 Q 37.2 0.024 37.309 0.05 A 1.398 1.398 0 0 1 37.392 0.072 L 37.992 0.696 A 4.055 4.055 0 0 1 38.16 0.895 Q 38.396 1.193 38.421 1.374 A 0.304 0.304 0 0 1 38.424 1.416 A 0.55 0.55 0 0 1 38.322 1.715 Q 38.1 2.054 37.4 2.463 A 8.446 8.446 0 0 1 37.128 2.616 A 21.427 21.427 0 0 1 36.693 2.844 Q 35.838 3.279 35.578 3.288 A 0.311 0.311 0 0 1 35.568 3.288 L 35.544 3.168 L 36.768 2.328 Q 37.148 2.062 37.348 1.871 A 1.647 1.647 0 0 0 37.44 1.776 A 1.189 1.189 0 0 0 37.528 1.665 Q 37.632 1.515 37.632 1.392 Q 37.632 1.193 37.125 1.177 A 2.946 2.946 0 0 0 37.032 1.176 A 9.31 9.31 0 0 0 34.954 1.42 A 11.429 11.429 0 0 0 33.936 1.704 A 9.908 9.908 0 0 0 32.217 2.4 A 8.053 8.053 0 0 0 31.08 3.12 Q 29.904 4.008 29.904 4.944 A 1.284 1.284 0 0 0 30.019 5.423 Q 30.325 6.161 31.449 7.425 A 26.206 26.206 0 0 0 31.992 8.016 A 18.602 18.602 0 0 1 32.806 8.92 Q 34.08 10.442 34.08 11.304 A 1.427 1.427 0 0 1 33.625 12.353 A 2.276 2.276 0 0 1 33.288 12.624 A 3.115 3.115 0 0 1 32.02 13.105 A 4.098 4.098 0 0 1 31.392 13.152 Z M 56.04 5.256 L 56.28 5.256 A 3.78 3.78 0 0 1 56.982 5.318 Q 57.41 5.399 57.758 5.585 A 2.368 2.368 0 0 1 57.792 5.604 A 1.583 1.583 0 0 1 58.094 5.818 A 0.931 0.931 0 0 1 58.416 6.528 Q 58.416 6.792 58.2 6.792 Q 58.143 6.792 58.131 6.747 A 0.106 0.106 0 0 1 58.128 6.72 A 1.981 1.981 0 0 0 57.895 6.311 Q 57.692 6.042 57.419 5.924 A 1.165 1.165 0 0 0 56.952 5.832 A 2.115 2.115 0 0 0 56.013 6.075 Q 55.284 6.436 54.463 7.335 A 12.366 12.366 0 0 0 53.832 8.088 A 16.696 16.696 0 0 0 53.107 9.068 Q 52.455 10.026 52.217 10.746 A 2.414 2.414 0 0 0 52.08 11.496 Q 52.08 11.952 52.32 11.952 A 1.101 1.101 0 0 0 52.881 11.735 Q 54.036 10.985 56.458 7.636 A 74.771 74.771 0 0 0 56.856 7.08 A 0.098 0.098 0 0 0 56.853 7.083 A 0.046 0.046 0 0 0 56.851 7.085 A 0.017 0.017 0 0 0 56.85 7.087 A 0.004 0.004 0 0 0 56.849 7.089 Q 56.849 7.094 56.892 7.068 A 0.322 0.322 0 0 1 56.931 7.048 Q 56.952 7.039 56.971 7.035 A 0.145 0.145 0 0 1 57 7.032 A 0.238 0.238 0 0 1 57.065 7.043 Q 57.171 7.075 57.372 7.192 A 5.16 5.16 0 0 1 57.504 7.272 A 2.048 2.048 0 0 1 57.644 7.358 Q 57.888 7.522 57.888 7.656 L 57.792 7.812 Q 57.696 7.968 57.552 8.28 A 9.786 9.786 0 0 0 57.117 9.36 A 8.285 8.285 0 0 0 56.964 9.876 A 7.469 7.469 0 0 0 56.84 10.432 Q 56.79 10.707 56.771 10.951 A 3.683 3.683 0 0 0 56.76 11.232 A 3.893 3.893 0 0 0 56.781 11.656 Q 56.828 12.078 56.977 12.29 A 0.473 0.473 0 0 0 57.384 12.504 L 57.624 12.456 L 57.672 12.48 Q 57.672 12.679 57.165 12.695 A 2.946 2.946 0 0 1 57.072 12.696 A 1.101 1.101 0 0 1 56.237 12.32 A 1.64 1.64 0 0 1 56.112 12.168 A 2.041 2.041 0 0 1 55.854 11.574 Q 55.784 11.31 55.762 10.998 A 4.187 4.187 0 0 1 55.752 10.704 A 5.969 5.969 0 0 1 55.828 9.783 Q 55.906 9.284 56.064 8.736 Q 56.04 8.808 55.896 9 Q 55.763 9.177 55.488 9.598 A 37.979 37.979 0 0 0 55.44 9.672 Q 53.825 12.173 52.776 12.622 A 1.101 1.101 0 0 1 52.344 12.72 A 1.035 1.035 0 0 1 51.737 12.52 A 1.589 1.589 0 0 1 51.468 12.276 A 1.538 1.538 0 0 1 51.1 11.488 A 2.133 2.133 0 0 1 51.072 11.136 A 1.787 1.787 0 0 1 51.131 10.712 Q 51.295 10.053 51.909 8.982 A 14.758 14.758 0 0 1 51.912 8.976 Q 52.752 7.536 53.976 6.384 Q 54.936 5.482 55.681 5.301 A 1.524 1.524 0 0 1 56.04 5.256 Z M 18.24 9.12 L 18.312 9 A 6.771 6.771 0 0 0 19.421 8.552 Q 19.989 8.256 20.361 7.881 A 2.343 2.343 0 0 0 21.072 6.168 Q 21.072 5.891 20.894 5.88 A 0.242 0.242 0 0 0 20.88 5.88 A 0.454 0.454 0 0 0 20.733 5.91 Q 20.453 6.009 19.92 6.432 Q 19.32 6.912 18.804 7.536 Q 18.288 8.16 17.88 8.832 A 9.3 9.3 0 0 0 17.462 9.618 Q 17.068 10.461 17.022 11.11 A 2.388 2.388 0 0 0 17.016 11.28 A 1.817 1.817 0 0 0 17.047 11.63 Q 17.157 12.187 17.66 12.235 A 1.041 1.041 0 0 0 17.76 12.24 A 2.018 2.018 0 0 0 18.49 12.093 Q 18.784 11.98 19.095 11.778 A 5.283 5.283 0 0 0 19.656 11.352 Q 19.992 11.04 20.376 10.644 Q 20.76 10.248 21.216 9.768 Q 22.037 8.881 22.14 8.814 A 0.028 0.028 0 0 1 22.152 8.808 A 0.282 0.282 0 0 1 22.204 8.812 Q 22.296 8.83 22.296 8.916 Q 22.296 9.024 22.248 9.12 A 22.613 22.613 0 0 1 21.26 10.46 Q 19.392 12.792 18.072 12.792 A 3.184 3.184 0 0 1 17.29 12.704 Q 16.273 12.446 16.078 11.423 A 2.822 2.822 0 0 1 16.032 10.896 A 3.83 3.83 0 0 1 16.202 9.816 Q 16.483 8.863 17.229 7.708 A 14.431 14.431 0 0 1 17.472 7.344 Q 18.96 5.256 20.304 5.256 Q 20.88 5.256 21.324 5.628 A 1.337 1.337 0 0 1 21.603 5.942 A 1.083 1.083 0 0 1 21.768 6.528 Q 21.768 7.392 20.7 8.279 A 5.943 5.943 0 0 1 20.64 8.328 A 4.814 4.814 0 0 1 19.867 8.843 Q 19.378 9.099 18.895 9.18 A 2.677 2.677 0 0 1 18.456 9.216 A 0.734 0.734 0 0 1 18.385 9.213 Q 18.316 9.206 18.28 9.185 A 0.072 0.072 0 0 1 18.24 9.12 Z M 47.736 9.12 L 47.808 9 A 6.771 6.771 0 0 0 48.917 8.552 Q 49.485 8.256 49.857 7.881 A 2.343 2.343 0 0 0 50.568 6.168 Q 50.568 5.891 50.39 5.88 A 0.242 0.242 0 0 0 50.376 5.88 A 0.454 0.454 0 0 0 50.229 5.91 Q 49.949 6.009 49.416 6.432 Q 48.816 6.912 48.3 7.536 Q 47.784 8.16 47.376 8.832 A 9.3 9.3 0 0 0 46.958 9.618 Q 46.564 10.461 46.518 11.11 A 2.388 2.388 0 0 0 46.512 11.28 A 1.817 1.817 0 0 0 46.543 11.63 Q 46.653 12.187 47.156 12.235 A 1.041 1.041 0 0 0 47.256 12.24 A 2.018 2.018 0 0 0 47.986 12.093 Q 48.28 11.98 48.591 11.778 A 5.283 5.283 0 0 0 49.152 11.352 Q 49.488 11.04 49.872 10.644 Q 50.256 10.248 50.712 9.768 Q 51.533 8.881 51.636 8.814 A 0.028 0.028 0 0 1 51.648 8.808 A 0.282 0.282 0 0 1 51.7 8.812 Q 51.792 8.83 51.792 8.916 Q 51.792 9.024 51.744 9.12 A 22.613 22.613 0 0 1 50.756 10.46 Q 48.888 12.792 47.568 12.792 A 3.184 3.184 0 0 1 46.786 12.704 Q 45.769 12.446 45.574 11.423 A 2.822 2.822 0 0 1 45.528 10.896 A 3.83 3.83 0 0 1 45.698 9.816 Q 45.979 8.863 46.725 7.708 A 14.431 14.431 0 0 1 46.968 7.344 Q 48.456 5.256 49.8 5.256 Q 50.376 5.256 50.82 5.628 A 1.337 1.337 0 0 1 51.099 5.942 A 1.083 1.083 0 0 1 51.264 6.528 Q 51.264 7.392 50.196 8.279 A 5.943 5.943 0 0 1 50.136 8.328 A 4.814 4.814 0 0 1 49.363 8.843 Q 48.874 9.099 48.391 9.18 A 2.677 2.677 0 0 1 47.952 9.216 A 0.734 0.734 0 0 1 47.881 9.213 Q 47.812 9.206 47.776 9.185 A 0.072 0.072 0 0 1 47.736 9.12 Z M 40.399 12.551 A 0.926 0.926 0 0 0 40.608 12.576 Q 40.774 12.576 40.869 12.398 A 0.731 0.731 0 0 0 40.92 12.276 A 6.456 6.456 0 0 0 40.955 12.162 Q 41.041 11.875 41.16 11.4 Q 41.28 10.872 41.58 10.116 Q 41.777 9.62 42.175 9.026 A 11.171 11.171 0 0 1 42.648 8.376 Q 43.056 7.896 43.536 7.404 A 8.791 8.791 0 0 1 43.786 7.158 A 10.074 10.074 0 0 1 44.616 6.456 A 1.724 1.724 0 0 0 44.533 6.745 A 2.122 2.122 0 0 0 44.496 7.152 A 1.639 1.639 0 0 0 44.502 7.288 A 1.855 1.855 0 0 0 44.568 7.644 A 1.109 1.109 0 0 0 44.641 7.832 A 1.271 1.271 0 0 0 44.832 8.112 A 1.395 1.395 0 0 0 44.885 8.166 A 1.034 1.034 0 0 0 45.624 8.472 A 2.201 2.201 0 0 0 45.677 8.471 Q 45.924 8.465 46.028 8.403 A 0.139 0.139 0 0 0 46.104 8.28 Q 46.104 8.242 46.066 8.234 A 0.11 0.11 0 0 0 46.044 8.232 A 0.28 0.28 0 0 1 46.017 8.231 A 0.228 0.228 0 0 1 45.936 8.208 Q 45.48 8.064 45.48 7.416 A 0.887 0.887 0 0 1 45.501 7.29 Q 45.543 7.107 45.665 6.856 A 4.715 4.715 0 0 1 45.792 6.612 Q 46.08 6.096 46.464 5.544 Q 46.56 5.424 46.632 5.328 A 0.837 0.837 0 0 1 46.635 5.324 Q 46.705 5.233 46.728 5.256 Q 46.656 5.136 45.96 5.136 A 1.028 1.028 0 0 0 45.43 5.277 Q 45.231 5.394 45.067 5.607 A 2.155 2.155 0 0 0 44.832 6 A 5.241 5.241 0 0 0 44.008 6.516 Q 43.421 6.962 42.877 7.608 A 10.717 10.717 0 0 0 41.952 8.904 A 91.79 91.79 0 0 0 42.17 8.221 Q 42.618 6.8 42.716 6.289 A 1.262 1.262 0 0 0 42.744 6.072 A 1.856 1.856 0 0 0 42.726 5.809 Q 42.61 4.997 41.733 4.809 A 2.861 2.861 0 0 0 41.136 4.752 A 1.114 1.114 0 0 0 41.102 4.753 Q 40.963 4.757 40.883 4.797 A 0.179 0.179 0 0 0 40.776 4.968 A 0.065 0.065 0 0 0 40.8 5.016 Q 40.851 5.063 41.006 5.094 A 1.871 1.871 0 0 0 41.112 5.112 Q 41.448 5.16 41.448 5.544 A 5.328 5.328 0 0 1 41.413 6.124 Q 41.282 7.317 40.656 9.288 A 89.248 89.248 0 0 0 40.442 9.965 Q 39.864 11.819 39.864 12.168 A 0.205 0.205 0 0 0 39.874 12.232 Q 39.916 12.36 40.128 12.456 A 1.76 1.76 0 0 0 40.2 12.487 Q 40.303 12.528 40.399 12.551 Z M 22.824 12.48 A 0.253 0.253 0 0 0 22.952 12.704 Q 23.128 12.816 23.544 12.816 A 0.231 0.231 0 0 0 23.703 12.74 Q 23.875 12.573 24.04 12.041 A 7.151 7.151 0 0 0 24.144 11.664 Q 25.032 9.288 26.688 7.512 A 22.485 22.485 0 0 1 27.683 6.495 Q 28.81 5.419 29.784 4.848 Q 29.856 4.776 29.856 4.656 A 0.387 0.387 0 0 0 29.849 4.582 Q 29.822 4.44 29.678 4.404 A 0.455 0.455 0 0 0 29.568 4.392 A 0.762 0.762 0 0 0 29.375 4.419 Q 28.878 4.55 28.048 5.306 A 13.796 13.796 0 0 0 27.504 5.832 A 19.929 19.929 0 0 0 26.774 6.618 Q 25.683 7.855 24.432 9.624 A 0.111 0.111 0 0 0 24.428 9.628 Q 24.41 9.649 24.38 9.698 A 1.671 1.671 0 0 0 24.36 9.732 Q 24.312 9.816 24.264 9.816 A 0.141 0.141 0 0 1 24.228 9.812 Q 24.185 9.801 24.173 9.758 A 0.138 0.138 0 0 1 24.168 9.72 A 42.203 42.203 0 0 0 24.21 9.421 Q 24.252 9.109 24.278 8.874 A 11.858 11.858 0 0 0 24.3 8.664 Q 24.328 8.364 24.334 8.225 A 1.515 1.515 0 0 0 24.336 8.16 A 8.531 8.531 0 0 0 24.33 7.835 Q 24.292 6.842 24.015 6.27 A 1.246 1.246 0 0 0 22.824 5.496 Q 22.032 5.496 22.032 5.976 A 0.99 0.99 0 0 0 22.032 6 Q 22.04 6.312 22.248 6.312 A 0.066 0.066 0 0 0 22.274 6.306 Q 22.324 6.285 22.389 6.185 A 1.209 1.209 0 0 0 22.428 6.12 Q 22.536 5.928 22.584 5.904 Q 23.184 5.928 23.184 7.92 Q 23.184 8.486 22.946 11.142 A 366.159 366.159 0 0 1 22.824 12.48 Z M 38.16 2.808 L 37.68 2.928 Q 37.623 2.928 37.611 2.883 A 0.106 0.106 0 0 1 37.608 2.856 A 0.244 0.244 0 0 1 37.689 2.676 Q 37.761 2.607 37.896 2.556 A 3.006 3.006 0 0 1 38.031 2.509 Q 38.22 2.448 38.328 2.448 A 1.328 1.328 0 0 1 38.765 2.514 Q 39.359 2.72 39.383 3.574 A 2.601 2.601 0 0 1 39.384 3.648 A 2.993 2.993 0 0 1 39.342 4.125 Q 39.249 4.697 38.952 5.472 A 0.171 0.171 0 0 0 39.019 5.507 Q 39.204 5.568 39.816 5.568 A 6.045 6.045 0 0 0 40.231 5.555 Q 40.641 5.526 40.913 5.438 A 1.454 1.454 0 0 0 41.016 5.4 Q 41.388 5.214 41.557 5.208 A 0.312 0.312 0 0 1 41.568 5.208 A 0.16 0.16 0 0 1 41.593 5.21 Q 41.64 5.217 41.64 5.256 A 0.123 0.123 0 0 1 41.63 5.302 Q 41.605 5.362 41.521 5.447 A 0.899 0.899 0 0 1 41.52 5.448 A 4.712 4.712 0 0 1 40.747 5.983 A 5.731 5.731 0 0 1 40.332 6.192 A 4.989 4.989 0 0 1 39.473 6.489 A 6.529 6.529 0 0 1 38.76 6.624 L 38.688 6.624 A 0.143 0.143 0 0 0 38.673 6.625 Q 38.657 6.627 38.636 6.631 A 0.699 0.699 0 0 0 38.616 6.636 A 0.767 0.767 0 0 0 38.59 6.643 Q 38.549 6.655 38.474 6.68 A 10.007 10.007 0 0 0 38.424 6.696 A 71.09 71.09 0 0 0 37.682 8.214 Q 36.615 10.469 36.337 11.578 A 2.747 2.747 0 0 0 36.24 12.216 Q 36.24 12.6 36.528 12.6 L 37.2 12.456 L 37.224 12.48 Q 37.224 12.966 36.488 12.983 A 2.356 2.356 0 0 1 36.432 12.984 A 1.421 1.421 0 0 1 36.008 12.926 Q 35.376 12.728 35.376 11.856 A 4.041 4.041 0 0 1 35.442 11.165 Q 35.566 10.454 35.924 9.526 A 15.148 15.148 0 0 1 36.048 9.216 L 36.576 7.968 A 1296.099 1296.099 0 0 1 36.839 7.346 Q 36.998 6.973 37.176 6.552 A 1.996 1.996 0 0 1 36.829 6.383 Q 36.647 6.269 36.536 6.129 A 0.803 0.803 0 0 1 36.36 5.616 A 0.599 0.599 0 0 1 36.367 5.524 Q 36.374 5.477 36.389 5.441 A 0.21 0.21 0 0 1 36.456 5.352 Q 36.816 5.52 37.56 5.592 A 30.814 30.814 0 0 0 37.829 4.972 Q 38.217 4.048 38.317 3.595 A 1.25 1.25 0 0 0 38.352 3.336 A 2.218 2.218 0 0 0 38.346 3.17 Q 38.327 2.913 38.241 2.838 A 0.12 0.12 0 0 0 38.16 2.808 Z M 2.472 14.256 L 2.424 14.28 A 0.606 0.606 0 0 1 1.975 14.082 Q 1.895 13.999 1.825 13.881 A 1.435 1.435 0 0 1 1.8 13.836 Q 1.56 13.392 1.56 12.552 A 7.847 7.847 0 0 1 1.811 10.715 Q 2.479 7.979 4.92 3.672 Q 4.92 3.579 5.158 3.19 A 8.819 8.819 0 0 1 5.172 3.168 A 18.799 18.799 0 0 0 5.349 2.876 Q 5.487 2.643 5.592 2.448 A 3.011 3.011 0 0 1 5.717 2.229 Q 5.931 1.89 6.121 1.853 A 0.242 0.242 0 0 1 6.168 1.848 Q 6.386 1.848 6.652 1.938 A 2.481 2.481 0 0 1 6.768 1.98 Q 7.104 2.112 7.104 2.256 Q 6.792 2.784 6.468 3.312 Q 6.144 3.84 5.808 4.368 Q 2.741 9.681 2.236 12.18 A 4.479 4.479 0 0 0 2.136 13.056 Q 2.136 13.264 2.224 13.534 A 3 3 0 0 0 2.304 13.752 A 8.423 8.423 0 0 1 2.361 13.894 Q 2.47 14.172 2.472 14.253 A 0.12 0.12 0 0 1 2.472 14.256 Z"
                        vector-effect="non-scaling-stroke"
                      />
                    </motion.g>
                  </motion.svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>My Own Dev Streaming Hub🍿​</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </Link>
    </>
  );
};

export default Logo;
