"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function Quizz() {
  return (
    <div
      className="container-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.margin.m,
        overflow: "auto",
      }}
    >
      <Label style={{ fontSize: theme.fonts.large, marginTop: theme.margin.l }}>
        Quizz
      </Label>
      <Link href="/words">
        <Button variant="link">Check the words list</Button>
      </Link>
      <Card
        className="card"
        style={{
          width: "10%",
          height: "10%",
          minWidth: "300px",
          minHeight: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.margin.m,
          padding: theme.padding.xl,
        }}
      >
        <Label style={{ fontSize: theme.fonts.regular }}>Translate :</Label>
        <Label
          style={{ fontSize: theme.fonts.regular, marginTop: theme.margin.l }}
        >
          🇫🇷 Faire un pari sportif
        </Label>
        <Input type="text" placeholder="Word in english" />
        <Alert variant="destructive">Mauvaise traduction</Alert>
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
