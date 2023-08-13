"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

function RespectMotionPreferences({ children }: any) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectMotionPreferences;
