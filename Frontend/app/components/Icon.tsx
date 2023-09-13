import React from "react";

interface Props {
  svg: any;
  className?: string;
  onClick?: () => void;
  id?: string;
}

export const Icon = ({ svg, className, onClick, id }: Props) => {
  return onClick ? (
    <div
      id={id}
      className={className}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  ) : (
    <div
      id={id}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  );
};
