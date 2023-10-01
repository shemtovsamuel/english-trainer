// ScoreResult.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface ScoreResultProps {
  style?: React.CSSProperties;
  score: number;
  bestScore: number;
}

const ScoreResult: React.FC<ScoreResultProps> = ({
  style,
  score,
  bestScore,
}) => {
  return (
    <div
      className="container-mid-score"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Label
        className="score-text mb-5"
        style={{ fontSize: theme.fonts.large }}
      >
        Score :
      </Label>
      <Label
        className="score ml-8"
        style={{ fontSize: theme.fonts.xxl, fontWeight: theme.weight.xxl }}
      >
        {score} / 10 🏅
      </Label>
      <Label
        className="best-score mt-5"
        style={{
          color: theme.colors.slate,
          fontWeight: "400",
        }}
      >
        Ton meilleur score : {bestScore}/10
      </Label>
    </div>
  );
};

export default ScoreResult;
