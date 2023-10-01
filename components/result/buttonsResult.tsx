// ButtonsResult.tsx

import React from "react";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";
import Link from "next/link";
import { Button } from "../ui/button";

const ButtonsResult: React.FC = () => {
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
        <Button className="button-retry">Retry</Button>
      </Link>
      <Link href="/words">
        <Button className="button-retry mt-5" variant={"secondary"}>
          review words
        </Button>
      </Link>
    </div>
  );
};

export default ButtonsResult;
