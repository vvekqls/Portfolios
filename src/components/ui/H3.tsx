import { cn } from "@/lib/utils";
import React from "react";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("text-xl font-semibold tracking-tight ", props.className)}
    />
  );
}
