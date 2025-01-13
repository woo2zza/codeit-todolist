import React from "react";

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
  backgroundColor = "#E2E8F0",
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
        border: "2px solid black",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        padding: "3 16px",
        boxShadow: "3px 3px 1px black",
        position: "relative",
      }}
    >
      {icon && <span style={{ marginRight: label ? "8px" : "0" }}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
