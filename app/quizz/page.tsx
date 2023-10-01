"use client";

import theme from "@/constants/Theme";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProgressQuizz from "@/components/quizz/progressQuizz";
import { useState } from "react";
import HeaderQuizz from "@/components/quizz/headerQuizz";
import QuestionQuizz from "@/components/quizz/questionQuizz";
import ResponseQuizz from "@/components/quizz/responseQuizz";

export default function Quizz() {
  const [page, setPage] = useState(7);
  const [score, setScore] = useState(5);
  const [response, setResponse] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <div
      className="container"
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
      <HeaderQuizz score={score} />
      <QuestionQuizz worldToTranslate="Faire un pari sportif" />
      <Input className="input-response" placeholder="Your response"></Input>
      <ResponseQuizz
        isCorrect={isCorrect}
        wordToTranslate="Faire un pari sportif"
        wordAnswer="Place a sports bet 🎲"
      />
      <Button className="button-confirm">Confirm</Button>
      <ProgressQuizz value={page} />
    </div>
  );
}
