"use client";

import theme from "@/constants/Theme";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProgressQuizz from "@/components/quizz/progressQuizz";
import { SetStateAction, use, useEffect, useState } from "react";
import HeaderQuizz from "@/components/quizz/headerQuizz";
import QuestionQuizz from "@/components/quizz/questionQuizz";
import ResponseQuizz from "@/components/quizz/responseQuizz";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import {
  incrementGameScore,
  addWordToAskedWordsList,
} from "@/Redux/Features/counter/counterSlice";
import wordsData from "@/constants/WordsList";

export default function Quizz() {
  const gameScore = useSelector((state: RootState) => state.counter.gameScore);
  const askedWordsList = useSelector(
    (state: RootState) => state.counter.askedWordsList
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(5);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [response, setResponse] = useState("");
  const [wordToTranslate, setWordToTranslate] = useState("");
  const [wordAnswer, setWordAnswer] = useState("");

  const handleConfirm = () => {
    if (response) {
      handleResponse();
      setIsConfirm(true);
      // it it's correct
      if (wordAnswer.toLowerCase().includes(response.toLowerCase())) {
        setIsCorrect(true);
        dispatch(incrementGameScore());
      }
      // if it's incorrect
      else {
        setIsCorrect(false);
      }
    }
  };

  const handleNext = () => {
    setIsConfirm(false);
    setPage(page + 1);
    setResponse("");
    handleGenerateWord();
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setResponse(e.target.value);
  };

  const handleResponse = () => {
    console.log("User's response:", response);
  };

  const handleGenerateWord = () => {
    const unaskedWords = wordsData.filter(
      (word) => !askedWordsList.includes(word.frenchWord)
    );

    if (unaskedWords.length === 0) {
      console.log("All words have been asked!");
      return;
    }

    const randomWord =
      unaskedWords[Math.floor(Math.random() * unaskedWords.length)];

    setWordToTranslate(randomWord.frenchWord);
    setWordAnswer(randomWord.englishWord);
    dispatch(addWordToAskedWordsList(randomWord.frenchWord));
    console.log("🏅Asked words list:", askedWordsList);
  };

  useEffect(() => {
    handleGenerateWord();
  }, []);

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
      <HeaderQuizz score={gameScore} />
      <QuestionQuizz wordToTranslate={wordToTranslate} />
      <Input
        className="input-response max-w-xl"
        placeholder="Your response"
        value={response}
        onChange={handleInputChange}
      />
      <ResponseQuizz
        isCorrect={isCorrect}
        wordToTranslate={wordToTranslate}
        wordAnswer={wordAnswer}
        isDisplay={isConfirm}
      />
      {isConfirm ? (
        page === 10 ? (
          <Link href="/result">
            <Button className="button-result">Result</Button>
          </Link>
        ) : (
          <Button className="button-confirm" onClick={handleNext}>
            Next
          </Button>
        )
      ) : (
        <Button
          className="button-next"
          onClick={handleConfirm}
          disabled={!response}
        >
          Confirm
        </Button>
      )}

      <ProgressQuizz value={page} />
    </div>
  );
}
