"use client";
import React from "react";
import { ImagePixelated } from "react-pixelate";
import { Button } from "@/components/ui/button";
import OtpInput from "react-otp-input";

const Questions = [
  {
    question: [
      "https://cdn-0.emojis.wiki/emoji-pics/facebook/red-apple-facebook.png",
      "https://cdn-0.emojis.wiki/emoji-pics/messenger/honey-pot-messenger.png",
    ],
    firstAnswer: "🍎🍯",
    secondAnswer: "RoshHashana",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/x/17zcrtbdo0sfx.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png",
    ],
    firstAnswer: "🕍🙏",
    secondAnswer: "YomKippur",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/x/4n2c0g87mrqx.png",
      "https://hotemoji.com/images/emoji/h/1rcupww17k4avh.png",
    ],
    firstAnswer: "🍋⛺",
    secondAnswer: "Sukkot",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/2/1uhzz0fd2t522.png",
      "https://hotemoji.com/images/emoji/o/10n928o5yqj9o.png",
    ],
    firstAnswer: "🥳📖",
    secondAnswer: "SimchatTorah",
  },
];

export const range = (start: number, end: number, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

function HolidaysTest() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [pixelSize, setPixelSize] = React.useState(15);
  const [otp, setOtp] = React.useState("");
  const [gameStatus, setGameStatus] = React.useState("running");

  const answerLength = Questions[currentQuestion]?.secondAnswer.length;

  React.useEffect(() => {
    setInterval(() => {
      setPixelSize((prevState) => {
        return prevState > 8 ? prevState - 1 : prevState;
      });
    }, 1000);
  }, [currentQuestion]);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (
      otp.toUpperCase() ===
      Questions[currentQuestion].secondAnswer.toUpperCase()
    ) {
      setGameStatus("won");
      if (currentQuestion < Questions.length - 1) {
        setCurrentQuestion((prevState) => prevState + 1);
      } else {
        setGameStatus("completed");
      }
      setOtp("");
    } else {
      setGameStatus("lost");
    }
  }

  return (
    <div>
      <h1 className="text-center">Holiday Test</h1>
      <br />
      {gameStatus === "completed" ? (
        <h1>Yay! you completed all questions</h1>
      ) : (
        <>
          <div className="flex flex-row w-64 h-36 border">
            <ImagePixelated
              pixelSize={pixelSize}
              fillTransparencyColor="transparent"
              src={Questions[currentQuestion].question[0]}
              width={120}
              height={120}
            />
            <ImagePixelated
              width={120}
              height={120}
              pixelSize={pixelSize}
              fillTransparencyColor="transparent"
              src={Questions[currentQuestion].question[1]}
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h1 className="text-xl">Guess The Holiday:</h1>

            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={answerLength}
              containerStyle={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "center",
              }}
              inputStyle={{
                borderRadius: "8px",
                width: "28px",
                height: "28px",
                padding: 1,
                textTransform: "uppercase",
              }}
              renderSeparator={<span className="mr-1"> </span>}
              renderInput={(props) => <input {...props} />}
            />

            <Button variant="ghost" type="submit">
              Submit
            </Button>
          </form>
        </>
      )}
      <h1>{gameStatus}</h1>
    </div>
  );
}

export default HolidaysTest;
