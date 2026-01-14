import React from "react";

interface PrimaryButtonProps {
    primaryColor: string;
    text: string;
    onClick?: () => void;
    className?: string;
    // If true, use a left-to-right gradient from primaryColor to white
    gradientToWhite?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    primaryColor,
    text,
    onClick,
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

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            className={`rounded-md px-3 py-3 text-xs md:text-sm font-semibold text-black shadow-md shadow-white hover:brightness-110 transition-all duration-200 ${className}`}
        >
            {text}
        </button>
    );
};

