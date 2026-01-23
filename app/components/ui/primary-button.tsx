"use client";
import React from "react";

interface PrimaryButtonProps {
  primaryColor: string;
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  gradientToWhite?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  primaryColor,
  text,
  onClick,
  href,
  className = "",
  gradientToWhite = false,
}) => {
  const buttonStyle: React.CSSProperties = gradientToWhite
    ? {
        backgroundImage: `linear-gradient(to right, ${primaryColor}, #E8CC7B)`,
      }
    : {
        backgroundColor: primaryColor,
      };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      className={`
        rounded-md px-3 py-3 text-xs md:text-sm font-semibold text-black
        shadow-md shadow-white cursor-pointer
        transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-lg hover:brightness-120
        active:translate-y-0 active:shadow-md
        ${className}
      `}
    >
      {text}
    </button>
  );
};
