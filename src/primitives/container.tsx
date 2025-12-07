"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useContainerConfig } from "../provider/container-provider";

interface ContainerProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export default function Container({
  children,
  fullWidth = false,
  className,
}: ContainerProps) {
  const { defaultMaxWidth } = useContainerConfig();

  const merged = twMerge(
    clsx(
      "w-full mx-auto px-4",     // base styles
      fullWidth ? "max-w-none" : defaultMaxWidth,
      className                  // user styles merged correctly
    )
  );

  return <div className={merged}>{children}</div>;
}
