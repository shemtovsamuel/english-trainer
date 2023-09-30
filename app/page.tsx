"use client";

import type { RootState } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/Features/counter/counterSlice";
import theme from "@/constants/Theme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Label style={{ fontSize: theme.fonts.large }}>
        Hello from HomePage 👋🏻
      </Label>
      <Label
        style={{ color: theme.colors.slate, fontSize: theme.fonts.regular }}
      >
        This is <b>Samuel Shemtov</b>'s template
      </Label>
      <Link href="/words">
        <Button variant="link">words</Button>
      </Link>

      <span style={{ fontSize: "40px" }}>{count}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())} variant="destructive">
          Decrement
        </Button>
      </div>
    </div>
  );
}
