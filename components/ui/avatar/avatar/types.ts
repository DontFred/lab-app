import type { Fallback, Image, Root } from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

export type AvatarElementRef = ElementRef<typeof Root>;

export type AvatarProps = ComponentPropsWithoutRef<typeof Root>;

export interface AvatarAdditionalProps {
  placeholder?: boolean;
}

export type AvatarImageElementRef = ElementRef<typeof Image>;

export type AvatarImageProps = ComponentPropsWithoutRef<typeof Image>;

export type AvatarFallbackElementRef = ElementRef<typeof Fallback>;

export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof Fallback>;
