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
  addWordToIncorrectWordsList,
} from "@/Redux/Features/counter/counterSlice";
import wordsData from "@/constants/WordsList";

export default function Quizz() {
  const gameScore = useSelector((state: RootState) => state.counter.gameScore);
  const askedWordsList = useSelector(
    (state: RootState) => state.counter.askedWordsList
  );
  const incorrectWordsList = useSelector(
    (state: RootState) => state.counter.incorrectWordsList
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [response, setResponse] = useState("");
  const [wordToTranslate, setWordToTranslate] = useState("");
  const [wordAnswer, setWordAnswer] = useState("");

  const handleConfirm = () => {
    if (response) {
      setIsConfirm(true);
      // it it's correct
      if (wordAnswer.toLowerCase().includes(response.toLowerCase())) {
        setIsCorrect(true);
        dispatch(incrementGameScore());
      }
      // if it's incorrect
      else {
        const incorrectWord = {
          frenchWord: wordToTranslate,
          englishWord: wordAnswer,
        };
        dispatch(addWordToIncorrectWordsList(incorrectWord));
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
    dispatch(addWordToAskedWordsList(randomWord));
    console.log("🏅Asked words list:", askedWordsList);
    console.log("🏅Incorrect words list:", incorrectWordsList);
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
      <div
        className="container-input"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.margin.l,
        }}
      >
        <Input
          className="input-response max-w-xl"
          placeholder="Your response"
          value={response}
          onChange={handleInputChange}
        />

        <div className="button-confirm">
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
        </div>
      </div>
      <ResponseQuizz
        isCorrect={isCorrect}
        wordToTranslate={wordToTranslate}
        wordAnswer={wordAnswer}
        isDisplay={isConfirm}
      />

      <ProgressQuizz value={page} />
    </div>
  );
}
