// ButtonsResult.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";
import Link from "next/link";
import { Button } from "../ui/button";

interface ButtonsResultProps {
  resetScore: () => void;
}

const ButtonsResult: React.FC<ButtonsResultProps> = ({ resetScore }) => {
  return (
    <div
      className="container-buttons"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link href="/quizz">
        <Button className="button-retry" onClick={resetScore}>
          Retry
        </Button>
      </Link>
      <Link href="/">
        <Button className="button-retry mt-5" variant={"secondary"}>
          review words
        </Button>
      </Link>
    </div>
  );
};

export default ButtonsResult;
