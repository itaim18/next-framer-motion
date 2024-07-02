"use client";
import React from "react";
import itaiMizTheme from "@/src/constants/theme";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpackConsole,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { Button } from "@/components/ui/button";
import "./Sandbox.css";
import {
  CustomRefreshButton,
  CustomClearConsoleButton,
  CustomOpenInSandboxButton,
  CustomShowNumbers,
} from "./SandboxButtons";
export default function Sandbox(props: any) {
  const [selectedTab, setSelectedTab] = React.useState<string>("preview");
  const [showNumbers, setShowNumbers] = React.useState<boolean>(false);
  const toggleShowNumbers = () => {
    setShowNumbers((prevState) => !prevState);
  };
  return (
    <SandpackProvider theme={itaiMizTheme} {...props} template="react">
      <div className="rounded-lg border-4 relative overflow-hidden">
        <div className="flex flex-row justify-between items-center text-md p-2 py-0 font-sans bg-slate-800">
          <h1 className="text-md pl-2">Code playground🏖️​</h1>
          <div className="flex flex-row">
            <CustomShowNumbers onPress={toggleShowNumbers} />
            <CustomOpenInSandboxButton />
            <CustomClearConsoleButton />
          </div>
        </div>
        <SandpackCodeEditor
          showLineNumbers={showNumbers}
          className="h-64 overflow-auto"
        />
        <div>
          <div className="flex flex-row justify-between bg-[#0d0f12]">
            <div className="flex flex-row">
              <Button
                variant="ghost"
                className={`rounded-none hover:text-white ${
                  selectedTab === "preview" &&
                  "text-yellow-200 border-b-2 hover:text-yellow-200 border-yellow-300"
                }`}
                onClick={() => setSelectedTab("preview")}
              >
                Result
              </Button>{" "}
              <Button
                variant="ghost"
                className={`rounded-none hover:text-white ${
                  selectedTab === "console" &&
                  "text-yellow-200 border-b-2 hover:text-yellow-200 border-yellow-300"
                }`}
                onClick={() => setSelectedTab("console")}
              >
                Console
              </Button>
            </div>
            <CustomRefreshButton />
          </div>
          <SandpackConsole
            showHeader
            className="bg-indigo-950"
            style={{
              padding: "16px",
              height: 240,
              display: selectedTab === "console" ? "flex" : "none",
            }}
          />
          <SandpackPreview
            showRestartButton
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            style={{
              padding: "16px",
              height: 240,
              display: selectedTab === "preview" ? "flex" : "none",
            }}
          />
        </div>
      </div>
    </SandpackProvider>
  );
}
