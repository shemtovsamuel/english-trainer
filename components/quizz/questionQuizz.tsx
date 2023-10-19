// questionQuizz.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface QuestionQuizzProps {
  style?: React.CSSProperties;
  isWordToTranslate?: boolean;
  wordToTranslate: string;
}

const QuestionQuizz: React.FC<QuestionQuizzProps> = ({
  style,
  wordToTranslate,
  isWordToTranslate = true,
}) => {
  return (
    <div
      className="container-translate"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      <Label
        style={{
          color: theme.colors.slate,
          fontWeight: "400",
        }}
      >
        Translate in english
        {isWordToTranslate ? " the word: " : " the sentence: "}
      </Label>
      <Label
        className="label-word-to-translate mt-5"
        style={{ fontSize: theme.fonts.large }}
      >
        {wordToTranslate} 🇫🇷
      </Label>
    </div>
  );
};

export default QuestionQuizz;
