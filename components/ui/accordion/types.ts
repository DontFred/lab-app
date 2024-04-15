import type { Content, Item, Trigger } from "@radix-ui/react-accordion";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

export type AccordionItemElementRef = ElementRef<typeof Item>;

export type AccordionItemProps = ComponentPropsWithoutRef<typeof Item>;

export type AccordionTriggerElementRef = ElementRef<typeof Trigger>;

export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof Trigger>;

export type AccordionContentElementRef = ElementRef<typeof Content>;

export type AccordionContentProps = ComponentPropsWithoutRef<typeof Content>;
