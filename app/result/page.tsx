"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ScoreResult from "@/components/result/scoreResult";
import ButtonsResult from "@/components/result/buttonsResult";

export default function Result() {
  const [score, setScore] = useState(5);
  const [bestScore, setBestScore] = useState(7);

  if (score > bestScore) {
    setBestScore(score);
  }

  return (
    <div
      className="container-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
        gap: theme.margin.m,
        overflow: "auto",
        padding: theme.padding.xl,
      }}
    >
      <Label style={{ fontSize: theme.fonts.large, marginTop: theme.margin.l }}>
        Learn english
      </Label>
      <ScoreResult score={score} bestScore={bestScore} />
      <ButtonsResult />
    </div>
  );
}
