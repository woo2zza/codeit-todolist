import React from "react";

// 색상 컴포넌트
type ColorBoxProps = {
  color: string;
  label: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ color, label }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        borderRadius: "8px",
        fontSize: "12px",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
};

export default ColorBox;
