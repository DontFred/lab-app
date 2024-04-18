import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import type { badgeVariants } from ".";

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  containerClassName?: undefined;
  content?: string;
}

export interface BadgeTopProps extends Omit<BadgeProps, "containerClassName"> {
  containerClassName?: string;
  content: string;
}
