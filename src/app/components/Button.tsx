import React from "react";

// 버튼 타입 정의
type ButtonProps = {
  label?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  backgroundColor = "#EDE9FE",
  textColor = "#FFFFFF",
  width = 160,
  height = 50,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color: textColor,
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        border: "1px",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        padding: "0 16px",
        boxShadow: "5px 5px 1px black, -1px -1.7px 1px black",
        position: "relative",
      }}
    >
      {icon && <span style={{ marginRight: label ? "8px" : "0" }}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
