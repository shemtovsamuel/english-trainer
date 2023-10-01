"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ScoreResult from "@/components/result/scoreResult";
import ButtonsResult from "@/components/result/buttonsResult";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import {
  resetGameScore,
  setBestScore,
} from "@/Redux/Features/counter/counterSlice";

export default function Result() {
  const dispatch = useDispatch();
  const gameScore = useSelector((state: RootState) => state.counter.gameScore);
  const bestScore = useSelector((state: RootState) => state.counter.bestScore);

  if (gameScore > bestScore) {
    dispatch(setBestScore(gameScore));
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
      <ScoreResult score={gameScore} bestScore={bestScore} />
      <ButtonsResult resetScore={dispatch(resetGameScore)} />
    </div>
  );
}
