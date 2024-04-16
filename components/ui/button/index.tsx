import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Spinner } from "../spinner";

import type { ButtonProps } from "./types";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-2.5",
        lg: "h-12 rounded-lg px-3.5 text-base",
        sm: "h-8 px-1.5 text-sm font-medium",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-foreground text-secondary hover:bg-secondary/80 hover:text-secondary-foreground",
      },
    },
  }
);

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 w-10 rounded-md",
        lg: "h-12 w-12 rounded-md",
        sm: "h-8 w-8 rounded-md",
        xs: "h-6 w-6 rounded-sm -px-1.5",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-foreground text-secondary hover:bg-secondary/80 hover:text-secondary-foreground",
      },
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      disabled,
      icon,
      loading,
      prefix,
      shape,
      size,
      suffix,
      variant,
      ...rest
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          !icon
            ? buttonVariants({ className, size, variant })
            : iconButtonVariants({ className, size, variant }),
          shape === "rounded" && "rounded-full",
          (loading ?? disabled) &&
            "cursor-not-allowed border border-muted-foreground/20 bg-muted text-muted-foreground hover:bg-muted"
        )}
        disabled={loading ?? disabled}
        ref={ref}
        {...rest}
      >
        {prefix && !icon && !loading && (
          <span className="mr-0.5 flex min-w-5 items-center justify-center">
            {prefix}
          </span>
        )}
        {loading && !icon && (
          <span className="mr-0.5 flex min-w-5 items-center justify-center">
            <Spinner
              className={
                size == "sm" ? "h-4 w-4" : size == "lg" ? "h-6 w-6" : ""
              }
            />
          </span>
        )}
        <span className="px-1.5">
          {loading && icon ? (
            <Spinner
              className={
                size == "xs" ? "h-4 w-4" : size == "lg" ? "h-6 w-6" : ""
              }
            />
          ) : (
            children
          )}
        </span>
        {suffix && !icon && !loading && (
          <span className="ml-0.5 flex min-w-5 items-center justify-center">
            {suffix}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, iconButtonVariants };
