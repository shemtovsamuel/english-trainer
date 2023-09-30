import React from "react";

interface CornerUpLeftIconProps {
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CornerUpLeftIcon: React.FC<CornerUpLeftIconProps> = ({
  width = 24,
  height = 24,
  style,
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      onClick={onClick}
    >
      <path
        d="M9 14L4 9L9 4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CornerUpLeftIcon;
