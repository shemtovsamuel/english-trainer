"use client";

import theme from "@/constants/Theme";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import CardWords from "@/components/words/cardWords";
import { useState } from "react";
import "@/styles/scrollBar.style.css";

export default function Words() {
  const words = [
    {
      frenchWord: "Faire un pari sportif",
      englishWord: "Place a sports bet 🎲",
    },
    {
      frenchWord: "Déborder",
      englishWord: "Overflow",
    },
    {
      frenchWord: "Casserole",
      englishWord: "Saucepan / Pot 🍳",
    },
    {
      frenchWord: "Passoire",
      englishWord: "Strainer / Colander 🍝",
    },
    {
      frenchWord: "Souffler",
      englishWord: "Blow 💨",
    },
    {
      frenchWord: "C'est du vol ",
      englishWord: "It's a rip-off / It's theft 💰",
    },
    {
      frenchWord: "Voisin",
      englishWord: "Neighbor 👋",
    },
    {
      frenchWord: "Je suis en train de me préparer",
      englishWord: "I am getting ready 💅",
    },
  ];
  const [filterOnEnglish, setFilterOnEnglish] = useState(true);

  const handleFilter = (tabValue: string) => {
    if (tabValue === "english") {
      setFilterOnEnglish(true);
    } else if (tabValue === "french") {
      setFilterOnEnglish(false);
    }
  };

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
      <div className="container-card" style={{ overflow: "auto" }}>
        {words.map((word) =>
          filterOnEnglish ? (
            <CardWords
              wordToTranslate={word.frenchWord}
              wordTranslated={word.englishWord}
            />
          ) : (
            <CardWords
              wordToTranslate={word.englishWord}
              wordTranslated={word.frenchWord}
            />
          )
        )}
      </div>
      <Link href="/quizz">
        <Button className="button-start mb-10">Start the test</Button>
      </Link>
    </div>
  );
}
