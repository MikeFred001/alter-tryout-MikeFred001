import React from "react";

type TypographyProps = {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  children: number | React.ReactNode;
  className?: string;
  currency?: boolean;
  onClick?: () => void;
};

export const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  children,
  currency,
  className = "",
  onClick,
}) => {
  const formattedChildren =
    currency && typeof children === "number"
      ? `$${children.toFixed(2)}`
      : children;

  return (
    <Tag className={className} onClick={onClick}>
      {formattedChildren}
    </Tag>
  );
};

