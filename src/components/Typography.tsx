import React from "react";

// 글꼴 크기, 굵기
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
  // 동적으로 클래스 생성
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
