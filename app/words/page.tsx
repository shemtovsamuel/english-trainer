"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

export default function Words() {
  return (
    <div
      className="container-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

        gap: theme.margin.m,
        overflow: "auto",
        height: "100vh",
      }}
    >
      <div
        className="container-top"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Label
          style={{ fontSize: theme.fonts.large, marginTop: theme.margin.l }}
        >
          Learn english
        </Label>

        <Tabs className="tab-french-english mt-5" defaultValue="english">
          <TabsList>
            <TabsTrigger value="english">Anglais 🇬🇧</TabsTrigger>
            <TabsTrigger value="french">Français 🇫🇷</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="container-card" style={{ overflow: "auto" }}>
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
      <Link href="/quizz">
        <Button className="button-start mb-10">Start the test</Button>
      </Link>
    </div>
  );
}
