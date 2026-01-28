"use client";

type YellowGlowProps = {
  className?: string;
};

export const YellowGlow = ({ className = "" }: YellowGlowProps) => {
  return (
    <div
      className={`
        pointer-events-none absolute
        rounded-full blur-3xl
        bg-[radial-gradient(ellipse_at_center,rgba(183,137,52,0.45),transparent_50%)]
        ${className}
      `}
    />
  );
};
