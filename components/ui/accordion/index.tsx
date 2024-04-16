"use client";

import { cn } from "@/lib/utils";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

import { Text } from "../text";

import type {
  AccordionAdditionalProps,
  AccordionContentElementRef,
  AccordionContentProps,
  AccordionElementRef,
  AccordionItemElementRef,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerElementRef,
  AccordionTriggerProps,
} from "./types";

const Accordion = forwardRef<
  AccordionElementRef,
  AccordionProps & AccordionAdditionalProps
>(({ children, className, size = "default", ...rest }, ref) => (
  <Root className={cn("border-t", className)} ref={ref} {...rest}>
    {size === "small" && children}
    {size === "default" && (
      <Text heading size="h3">
        {children}
      </Text>
    )}
  </Root>
));

Accordion.displayName = "Accordion";

const AccordionItem = forwardRef<AccordionItemElementRef, AccordionItemProps>(
  ({ className, ...rest }, ref) => (
    <Item className={cn("border-b", className)} ref={ref} {...rest} />
  )
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  AccordionTriggerElementRef,
  AccordionTriggerProps
>(({ children, className, ...rest }, ref) => (
  <Header className="flex">
    <Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
));

AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<
  AccordionContentElementRef,
  AccordionContentProps
>(({ children, className, ...rest }, ref) => (
  <Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...rest}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
