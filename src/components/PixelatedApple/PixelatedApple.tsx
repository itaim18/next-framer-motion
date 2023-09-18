"use client";
import React from "react";
import Sandbox from "../Sandbox/Sandbox";
import apple from "./apple.jpg";
function PixelatedApple() {
  return (
    <Sandbox
      template="react"
      customSetup={{
        dependencies: {
          "react-markdown": "latest",
          "react-pixelate": "latest",
        },
      }}
      files={{
        "/App.js": `import { ImagePixelated } from "react-pixelate"
import {apple,honey} from "./constants.js"
export default function App() {
return (<div style={{border:"solid", position:"relative"}}>
<div style={{position:"absolute",right:"110px",zIndex:"-5"}}> 
<ImagePixelated pixelSize={5} fillTransparencyColor="white" src={honey} width={110} height={110} />
</div>
<ImagePixelated pixelSize={5} fillTransparencyColor="transparent" src={apple} width={120} height={120}  />
  
  </div>
)
}`,
        "/constants.js": `const honey="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/564-honey-pot.svg/1200px-564-honey-pot.svg.png";
const apple ="https://static.vecteezy.com/system/resources/previews/013/442/160/original/red-apple-on-transparent-background-free-png.png"
export default {honey,apple}
        `,
      }}
    />
  );
}

export default PixelatedApple;
