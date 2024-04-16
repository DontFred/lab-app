import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { buttonVariants, iconButtonVariants } from ".";

export interface DefaultButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix">,
    VariantProps<typeof buttonVariants> {
  "aria-label"?: string;
  icon?: false;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix">,
    VariantProps<typeof iconButtonVariants> {
  "aria-label": string;
  icon: true;
  prefix?: undefined;
  suffix?: undefined;
}

export type ButtonProps = {
  asChild?: boolean;
  loading?: boolean;
  shape?: "rounded";
} & (DefaultButtonProps | IconButtonProps);
