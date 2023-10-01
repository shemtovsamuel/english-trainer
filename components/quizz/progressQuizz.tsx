// ProgressQuizz.tsx

import React from "react";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface ProgressQuizzProps {
  style?: React.CSSProperties;
  value: number;
}

const ProgressQuizz: React.FC<ProgressQuizzProps> = ({ style, value }) => {
  return (
    <div
      className="container-progress"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      <Progress value={value * 10} className="w-[90%]" />
      <Label
        className="text-counter-question"
        style={{
          fontSize: theme.fonts.regular,
          marginTop: theme.margin.l,
        }}
      >
        {value}/10
      </Label>
    </div>
  );
};

export default ProgressQuizz;
