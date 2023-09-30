"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CornerUpLeftIcon from "@/components/icons/cornerUpLeftIcon";
import Link from "next/link";

export default function Quizz() {
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
      <div
        className="container-header"
        style={{
          display: "flex",
          marginTop: theme.margin.l,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
          <Link href="/words">
            <CornerUpLeftIcon />
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flex: 2 }}>
          <Label style={{ fontSize: theme.fonts.large }}>Learn english</Label>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <Label style={{ fontSize: theme.fonts.large }}>4 🏅</Label>
        </div>
      </div>

      <div
        className="container-translate"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Label
          style={{
            color: theme.colors.slate,
            fontWeight: "400",
          }}
        >
          Translate the world :
        </Label>
        <Label
          className="label-word-to-translate mt-5"
          style={{ fontSize: theme.fonts.large }}
        >
          Faire un pari sportif 🇫🇷
        </Label>
      </div>
      <Input className="input-response" placeholder="Your response"></Input>

      <div
        className="result"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label style={{ fontWeight: "600" }}>Correct 👍🏼</label>
        <label style={{ color: theme.colors.slate }}>
          Faire un pari sportif ce dit :
        </label>
        <label>Place a sports bet 🎲</label>
      </div>

      <Button className="button-confirm">Confirm</Button>

      <div
        className="container-progress"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Progress value={50} className="w-[90%]" />
        <Label
          className="text-counter-question"
          style={{
            fontSize: theme.fonts.regular,
            marginTop: theme.margin.l,
          }}
        >
          7/10
        </Label>
      </div>
    </div>
  );
}
