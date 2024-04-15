"use client";

import { cn } from "@/lib/utils";
import { Root } from "@radix-ui/react-separator";
import { forwardRef } from "react";

import type { SeparatorElementRef, SeparatorProps } from "./types";

const Separator = forwardRef<SeparatorElementRef, SeparatorProps>(
  (
    { className, decorative = true, orientation = "horizontal", ...props },
    ref
  ) => (
    <Root
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  )
);

Separator.displayName = Root.displayName;

export { Separator };
