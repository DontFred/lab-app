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

import type {
  AccordionContentElementRef,
  AccordionContentProps,
  AccordionItemElementRef,
  AccordionItemProps,
  AccordionTriggerElementRef,
  AccordionTriggerProps,
} from "./types";

const Accordion = Root;

const AccordionItem = forwardRef<AccordionItemElementRef, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <Item className={cn("border-b", className)} ref={ref} {...props} />
  )
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  AccordionTriggerElementRef,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
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
>(({ children, className, ...props }, ref) => (
  <Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
