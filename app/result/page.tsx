"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import { use, useEffect, useState } from "react";
import ScoreResult from "@/components/result/scoreResult";
import ButtonsResult from "@/components/result/buttonsResult";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import {
  resetAskedWordsList,
  resetGameScore,
  setBestScore,
  setGameScore,
} from "@/Redux/Features/counter/counterSlice";

export default function Result() {
  const dispatch = useDispatch();
  const gameScore = useSelector((state: RootState) => state.counter.gameScore);
  const bestScore = useSelector((state: RootState) => state.counter.bestScore);

  useEffect(() => {
    const storedBestScore = parseInt(
      localStorage.getItem("bestScore") || "0",
      10
    );
    if (storedBestScore > bestScore) {
      dispatch(setBestScore(storedBestScore));
    }

    const storedGameScore = parseInt(
      localStorage.getItem("gameScore") || "0",
      10
    );

    console.log("Stored gameScore from localStorage:", storedGameScore);
    dispatch(setGameScore(storedGameScore));
    console.log("After dispatching gameScore:", gameScore);
  }, []);

  useEffect(() => {
    if (gameScore > bestScore) {
      dispatch(setBestScore(gameScore));
      localStorage.setItem("bestScore", gameScore.toString());
    }
    localStorage.setItem("gameScore", gameScore.toString());
  }, [gameScore]);

  const handleGameReset = () => {
    dispatch(resetGameScore());
    dispatch(resetAskedWordsList());
  };

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
      <ButtonsResult resetScore={handleGameReset} />
    </div>
  );
}
