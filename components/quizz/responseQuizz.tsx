// ResponseQuizz.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface ResponseQuizzProps {
  style?: React.CSSProperties;
  isCorrect: boolean;
  wordToTranslate: string;
  wordAnswer: string;
  isDisplay?: boolean;
}

const ResponseQuizz: React.FC<ResponseQuizzProps> = ({
  style,
  isCorrect,
  wordToTranslate,
  wordAnswer,
  isDisplay = true,
}) => {
  return (
    <div
      className="result"
      style={{
        display: "flex",
        flexDirection: "column",
        opacity: isDisplay ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      {isCorrect ? (
        <label style={{ fontWeight: "600" }}>Correct 👍🏼</label>
      ) : (
        <label style={{ fontWeight: "600" }}>Incorrect 👍🏼</label>
      )}
      <label style={{ color: theme.colors.slate }}>
        {wordToTranslate} ce dit :
      </label>
      <label>{wordAnswer}</label>
    </div>
  );
};

export default ResponseQuizz;
