import React from "react";
import { Code } from "bright";

import theme from "./theme";

function CodeSnippet(props: any) {
  return <Code {...props} theme={theme} lang="js" />;
}

export default CodeSnippet;
