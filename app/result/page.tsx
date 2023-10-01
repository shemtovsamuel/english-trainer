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
  resetIncorrectWordsList,
  setBestScore,
  setGameScore,
} from "@/Redux/Features/counter/counterSlice";
import CardWords from "@/components/words/cardWords";
import "@/styles/scrollBar.style.css";

export default function Result() {
  const dispatch = useDispatch();
  const gameScore = useSelector((state: RootState) => state.counter.gameScore);
  const bestScore = useSelector((state: RootState) => state.counter.bestScore);
  const incorrectWordsList = useSelector(
    (state: RootState) => state.counter.incorrectWordsList
  );

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

    dispatch(setGameScore(storedGameScore));
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
    dispatch(resetIncorrectWordsList());
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
      {/* <ScoreResult score={gameScore} bestScore={bestScore} style={{}} /> */}
      <div
        style={{
          // Prend tout l'espace disponible
          flex: 1,
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center", // Centre le contenu verticalement
          width: "100%",
        }}
      >
        <ScoreResult score={gameScore} bestScore={bestScore} />
      </div>
      <div
        className="container-card"
        style={{
          overflow: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {incorrectWordsList.length > 0 ? (
          <div
            className="container-card"
            style={{
              overflow: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {incorrectWordsList.map((word, index) => (
              <CardWords
                key={index} // Ajout d'une clé pour chaque élément de la liste
                wordToTranslate={word.frenchWord}
                wordTranslated={word.englishWord}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* <div
        style={{ backgroundColor: "red", width: "100%", height: "20vh" }}
      ></div> */}

      <ButtonsResult resetScore={handleGameReset} />
    </div>
  );
}
