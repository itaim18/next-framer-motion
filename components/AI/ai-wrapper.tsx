import React from "react";

import { AI } from "@/lib/chat/actions";
const AIWrapper = ({ children }: any) => {
  return <AI initialAIState={{ messages: [] }}>{children}</AI>;
};

export default AIWrapper;
