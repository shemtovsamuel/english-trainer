"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  gameScore: number;
  bestScore: number;
}

const initialState: CounterState = {
  value: 0,
  gameScore: 0,
  bestScore: 7,
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
    setBestScore: (state, action) => {
      state.bestScore = action.payload;
    },
    resetGameScore: (state) => {
      state.gameScore = 0;
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
} = counterSlice.actions;

export default counterSlice.reducer;
