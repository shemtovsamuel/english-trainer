// CardWords.tsx

import React from "react";
import { Card } from "../ui/card";
import theme from "@/constants/Theme";

interface CardWordsProps {
  style?: React.CSSProperties;
  wordToTranslate: string;
  wordTranslated: string;
}

const CardWords: React.FC<CardWordsProps> = ({
  style,
  wordToTranslate,
  wordTranslated,
}) => {
  return (
    <Card
      className="card"
      style={{
        width: "10%",
        height: "10%",
        minWidth: "300px",
        minHeight: "100px",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 1 300px",
        gap: theme.margin.m,
        padding: theme.padding.xl,
        margin: theme.margin.m,
      }}
    >
      <label style={{ fontWeight: theme.weight.large }}>{wordTranslated}</label>
      <label>{wordToTranslate}</label>
    </Card>
  );
};

export default CardWords;
