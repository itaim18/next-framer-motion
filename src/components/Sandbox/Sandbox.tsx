import { Sandpack } from "@codesandbox/sandpack-react";
import itaiMizTheme from "@/src/constants/theme";

export default function Sandbox(props: any) {
  return <Sandpack theme={itaiMizTheme} {...props} />;
}
