"use client";

import theme from "@/constants/Theme";
import wordsData from "@/constants/WordsList";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import CardWords from "@/components/words/cardWords";
import { useEffect, useState } from "react";
import "@/styles/scrollBar.style.css";

export default function Words() {
  const words = wordsData;
  const [filterOnEnglish, setFilterOnEnglish] = useState(true);

  const handleFilter = (tabValue: string) => {
    if (tabValue === "english") {
      setFilterOnEnglish(true);
    } else if (tabValue === "french") {
      setFilterOnEnglish(false);
    }
  };

  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVH();
    window.addEventListener("resize", setVH);

    return () => window.removeEventListener("resize", setVH);
  }, []);

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
        height: "100%",
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
            <TabsTrigger
              value="english"
              onClick={() => handleFilter("english")}
            >
              Anglais 🇬🇧
            </TabsTrigger>
            <TabsTrigger value="french" onClick={() => handleFilter("french")}>
              Français 🇫🇷
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div
        className="container-card"
        style={{
          overflow: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {words.map((word, index) =>
          filterOnEnglish ? (
            <CardWords
              key={index}
              wordToTranslate={word.frenchWord}
              wordTranslated={word.englishWord}
            />
          ) : (
            <CardWords
              key={index}
              wordToTranslate={word.englishWord}
              wordTranslated={word.frenchWord}
            />
          )
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <Link href="/quizz-words">
          <Button className="button-start mb-10">Words Quizz</Button>
        </Link>
        <Link href="/quizz-sentences">
          <Button className="button-start mb-10">Sentences Quizz</Button>
        </Link>
      </div>
    </div>
  );
}
