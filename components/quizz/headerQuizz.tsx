import Link from "next/link";
import CornerUpLeftIcon from "../icons/cornerUpLeftIcon";
import { Label } from "../ui/label";
import theme from "@/constants/Theme";

interface HeaderQuizzProps {
  style?: React.CSSProperties;
  score: number;
}

const HeaderQuizz: React.FC<HeaderQuizzProps> = ({ style, score }) => {
  return (
    <div
      className="container-header"
      style={{
        display: "flex",
        marginTop: theme.margin.l,
        width: "100%",
        ...style,
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
        <Label style={{ fontSize: theme.fonts.large }}>{score} 🏅</Label>
      </div>
    </div>
  );
};

export default HeaderQuizz;
