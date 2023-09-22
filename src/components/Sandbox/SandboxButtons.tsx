"use client";
import { UnstyledOpenInCodeSandboxButton } from "@codesandbox/sandpack-react";
import {
  useSandpackNavigation,
  useSandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { motion } from "framer-motion";
import { RefreshCcw, Undo, ExternalLink, Hash } from "lucide-react";

export function CustomRefreshButton() {
  const { refresh } = useSandpackNavigation();
  return (
    <motion.button
      whileTap={{
        rotate: -120,
      }}
      aria-label="Refresh page"
      onClick={refresh}
      className="p-3"
    >
      <RefreshCcw size={18} />
    </motion.button>
  );
}
export const CustomClearConsoleButton = () => {
  const { reset } = useSandpackConsole({ resetOnPreviewRestart: true });

  return (
    <motion.button
      aria-label="Clear console"
      whileTap={{
        rotate: -60,
      }}
      onClick={() => {
        reset();
      }}
    >
      <Undo size={18} />
    </motion.button>
  );
};
export const CustomOpenInSandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton className="h-10 w-10 flex place-content-center items-center">
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.2,
        }}
      >
        <ExternalLink size={18} />
      </motion.div>
    </UnstyledOpenInCodeSandboxButton>
  );
};
export const CustomShowNumbers = ({ onPress }: any) => {
  return (
    <motion.button
      whileTap={{
        rotate: 60,
      }}
      whileHover={{
        rotate: -30,
      }}
      onClick={onPress}
    >
      <Hash size={18} />
    </motion.button>
  );
};
