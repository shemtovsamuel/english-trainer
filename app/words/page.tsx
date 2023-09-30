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

export default function Words() {
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
        liste des mots
      </Label>
      {/* link to home */}
      <Link href="/quizz">
        <Button variant="link">Quizz 🧐</Button>
      </Link>
      <br />
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
        <label>🇬🇧 Place a sports bet 🎲</label>
        <label>🇫🇷 Faire un pari sportif</label>
      </Card>
    </div>
  );
}
