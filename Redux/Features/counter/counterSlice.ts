"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  gameScore: number;
  bestScore: number;
  askedWordsList: string[];
}

const initialState: CounterState = {
  value: 0,
  gameScore: 0,
  bestScore: 0,
  askedWordsList: [],
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
} = counterSlice.actions;

export default counterSlice.reducer;
