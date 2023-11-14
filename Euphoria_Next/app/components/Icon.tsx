import React from "react";

interface Props {
  svg: any;
  className?: string;
  onClick?: (e?:any) => void;
  id?: string;
}

export const Icon = ({ svg, className, onClick, id }: Props) => {
  return onClick ? (
    <div
      id={id}
      className={'h-full w-full ' + className}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  ) : (
    <div
      id={id}
      className={'h-full w-full ' + className}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  );
};
