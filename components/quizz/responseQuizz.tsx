// ResponseQuizz.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface ResponseQuizzProps {
  style?: React.CSSProperties;
  isCorrect: boolean;
  wordToTranslate: string;
  wordAnswer: string;
}

const ResponseQuizz: React.FC<ResponseQuizzProps> = ({
  style,
  isCorrect,
  wordToTranslate,
  wordAnswer,
}) => {
  return (
    <div
      className="result"
      style={{
        display: "flex",
        flexDirection: "column",
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
