import React from "react";

type TypographyProps = {
  children: React.ReactNode;
  size?: "20px" | "18px" | "16px";
  weight?: "regular" | "bold";
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  size = "16px",
  weight = "regular",
  className = "",
}) => {
  const fontWeightClass = weight === "bold" ? "font-bold" : "font-normal";

  return (
    <p
      className={`text-${size} ${fontWeightClass} ${className}`}
      style={{
        fontFamily: "NanumSquare",
        fontSize: size,
      }}
    >
      {children}
    </p>
  );
};

export default Typography;
