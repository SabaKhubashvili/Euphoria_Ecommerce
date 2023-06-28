"use client";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const OnlyClient = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div>{children}</div>;
};
