"use client";
import React from "react";
import { Pixelify } from "react-pixelify";
import { Button } from "@/components/ui/button";
import OtpInput from "react-otp-input";
import ResultCard from "./ResultCard";

const Questions = [
  {
    question: [
      "https://cdn-0.emojis.wiki/emoji-pics/facebook/red-apple-facebook.png",
      "https://cdn-0.emojis.wiki/emoji-pics/messenger/honey-pot-messenger.png",
    ],
    firstAnswer: "🍎🍯",
    secondAnswer: "RoshHashana",
    backgroundImage:
      "linear-gradient(180deg,hsl(356deg 77% 47%) 0%,hsl(3deg 70% 50%) 11%,hsl(8deg 74% 50%) 22%,hsl(13deg 77% 50%) 33%,hsl(17deg 81% 50%) 44%,hsl(21deg 83% 50%) 56%,hsl(25deg 86% 50%) 67%,hsl(28deg 91% 49%) 78%,hsl(31deg 96% 48%) 89%,hsl(34deg 100% 48%) 100%)",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/x/17zcrtbdo0sfx.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png",
    ],
    firstAnswer: "🕍🙏",
    secondAnswer: "YomKippur",
    backgroundImage:
      "linear-gradient(180deg,hsl(45deg 97% 55%) 0%,hsl(42deg 98% 60%) 11%,hsl(40deg 98% 64%) 22%,hsl(39deg 98% 67%) 33%,hsl(37deg 96% 69%) 44%,hsl(36deg 93% 72%) 56%,hsl(34deg 89% 74%) 67%,hsl(33deg 83% 76%) 78%,hsl(31deg 74% 77%) 89%,hsl(30deg 63% 79%) 100%)",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/x/4n2c0g87mrqx.png",
      "https://hotemoji.com/images/emoji/h/1rcupww17k4avh.png",
    ],
    firstAnswer: "🍋⛺",
    secondAnswer: "Sukkot",
    backgroundImage:
      "linear-gradient(180deg,hsl(54deg 100% 49%) 0%,hsl(57deg 100% 45%) 11%,hsl(62deg 100% 42%) 22%,hsl(66deg 100% 40%) 33%,hsl(71deg 100% 39%) 44%,hsl(77deg 100% 38%) 56%,hsl(83deg 100% 36%) 67%,hsl(89deg 100% 35%) 78%,hsl(98deg 99% 33%) 89%,hsl(118deg 84% 34%) 100%)",
  },
  {
    question: [
      "https://hotemoji.com/images/emoji/2/1uhzz0fd2t522.png",
      "https://hotemoji.com/images/emoji/o/10n928o5yqj9o.png",
    ],
    firstAnswer: "🥳📖",
    secondAnswer: "SimchatTorah",
    backgroundImage:
      "linear-gradient(180deg,hsl(0deg 100% 81%) 0%,hsl(350deg 84% 77%) 11%,hsl(340deg 69% 72%) 22%,hsl(329deg 54% 68%) 33%,hsl(314deg 40% 63%) 44%,hsl(291deg 32% 60%) 56%,hsl(267deg 35% 60%) 67%,hsl(244deg 35% 59%) 78%,hsl(223deg 42% 53%) 89%,hsl(207deg 75% 40%) 100%)",
  },
];

export const range = (start, end, step = 1) => {
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
  const [submitted, setSubmitted] = React.useState(false);
  const answerLength = Questions[currentQuestion]?.secondAnswer.length;

  React.useEffect(() => {
    setInterval(() => {
      setPixelSize((prevState) => {
        return prevState > 8 ? prevState - 1 : prevState;
      });
    }, 1000);
    return () => {
      setPixelSize(15);
    };
  }, [currentQuestion]);
  const handleRetry = () => {
    setCurrentQuestion(0);
    setGameStatus("running");
    setOtp("");
    setSubmitted(false);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (
      otp.toUpperCase() ===
      Questions[currentQuestion].secondAnswer.toUpperCase()
    ) {
      setPixelSize(0);
      setGameStatus("won");
      if (currentQuestion < Questions.length - 1) {
        setTimeout(function () {
          setCurrentQuestion((prevState) => prevState + 1);
          setGameStatus("running"); //your code to be executed after 1 second
        }, 3000);
      } else {
        setTimeout(function () {
          setGameStatus("completed"); //your code to be executed after 1 second
        }, 3000);
      }

      setTimeout(function () {
        setOtp(""); //your code to be executed after 1 second
      }, 3000);
    } else {
      setGameStatus("lost");
    }
    setSubmitted(false);
  }

  return (
    <div>
      <h1 className="text-center text-3xl text-lime-200">Holidays Test</h1>
      <br />
      {gameStatus === "completed" ? (
        <></>
      ) : (
        <>
          <div
            style={{
              padding: "64px",
              backgroundImage: Questions[currentQuestion].backgroundImage,
            }}
            className="flex flex-row w-full rounded-md h-64 border m-auto justify-center"
          >
            <Pixelify
              pixelSize={pixelSize}
              fillTransparencyColor="transparent"
              src={Questions[currentQuestion].question[0]}
              width={120}
              height={120}
            />
            <Pixelify
              width={120}
              height={120}
              pixelSize={pixelSize}
              fillTransparencyColor="transparent"
              src={Questions[currentQuestion].question[1]}
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
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
                borderColor:
                  gameStatus === "lost"
                    ? "red"
                    : gameStatus === "won"
                    ? "green"
                    : "white",
                borderWidth: gameStatus !== "running" && 2,
                borderRadius: "8px",
                width: "28px",
                height: "28px",
                padding: 1,
                textTransform: "uppercase",
              }}
              renderSeparator={<span className="mr-1"> </span>}
              renderInput={(props) => (
                <input {...props} onFocus={() => setGameStatus("running")} />
              )}
            />

            <Button
              disabled={
                gameStatus !== "running" ||
                submitted ||
                otp.length !== Questions[currentQuestion].secondAnswer.length
              }
              variant="ghost"
              type="submit"
              className="text-xl"
            >
              SOLVE
            </Button>
          </form>
        </>
      )}{" "}
      <ResultCard result={gameStatus} handleRetry={handleRetry} />
    </div>
  );
}

export default HolidaysTest;
