"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Word } from "@/enums/word";

export interface CounterState {
  value: number;
  gameScore: number;
  bestScore: number;
  askedWordsList: string[];
  incorrectWordsList: Word[];
}

const initialState: CounterState = {
  value: 0,
  gameScore: 0,
  bestScore: 0,
  askedWordsList: [],
  incorrectWordsList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementGameScore: (state) => {
      state.gameScore += 1;
    },
    setGameScore: (state, action) => {
      state.gameScore = action.payload;
    },
    setBestScore: (state, action) => {
      state.bestScore = action.payload;
    },
    resetGameScore: (state) => {
      state.gameScore = 0;
    },
    addWordToAskedWordsList: (state, action) => {
      state.askedWordsList.push(action.payload);
    },
    resetAskedWordsList: (state) => {
      state.askedWordsList = [];
    },
    addWordToIncorrectWordsList: (state, action) => {
      state.incorrectWordsList.push(action.payload);
    },
    resetIncorrectWordsList: (state) => {
      state.incorrectWordsList = [];
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementGameScore,
  setBestScore,
  resetGameScore,
  setGameScore,
  addWordToAskedWordsList,
  resetAskedWordsList,
  addWordToIncorrectWordsList,
  resetIncorrectWordsList,
} = counterSlice.actions;

export default counterSlice.reducer;
