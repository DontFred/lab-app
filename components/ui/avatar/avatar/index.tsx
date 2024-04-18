"use client";

import { cn } from "@/lib/utils";
import { Fallback, Image, Root } from "@radix-ui/react-avatar";
import { forwardRef, Fragment } from "react";

import type {
  AvatarAdditionalProps,
  AvatarElementRef,
  AvatarFallbackElementRef,
  AvatarFallbackProps,
  AvatarImageElementRef,
  AvatarImageProps,
  AvatarProps,
} from "./type";

const Avatar = forwardRef<
  AvatarElementRef,
  AvatarProps & AvatarAdditionalProps
>(({ children, className, placeholder, ...rest }, ref) => (
  <Fragment>
    {placeholder && (
      <span
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border ",
          className
        )}
        ref={ref}
        {...rest}
      />
    )}
    {!placeholder && (
      <Root
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Root>
    )}
  </Fragment>
));
Avatar.displayName = Root.displayName;

const AvatarImage = forwardRef<AvatarImageElementRef, AvatarImageProps>(
  ({ className, ...rest }, ref) => (
    <Image
      alt="Avatar image"
      className={cn("aspect-square h-full w-full", className)}
      ref={ref}
      {...rest}
    />
  )
);
AvatarImage.displayName = Image.displayName;

const AvatarFallback = forwardRef<
  AvatarFallbackElementRef,
  AvatarFallbackProps
>(({ className, ...rest }, ref) => (
  <Fallback
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    ref={ref}
    {...rest}
  />
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
