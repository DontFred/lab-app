import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import type { BadgeProps } from "./types";

const badgeVariants = cva(
  "inline-flex h-6 flex-shrink-0 items-center justify-center whitespace-nowrap px-2.5 text-xs font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    defaultVariants: {
      variant: "grey",
    },
    variants: {
      variant: {
        blue: "bg-[hsla(212,100%,48%,1)] text-white",
        "blue-subtle": "bg-[hsla(214,59%,15%,1)] text-[hsla(210,100%,66%,1)]",
        green: "bg-[hsla(131,41%,46%,1)] text-white",
        "green-subtle": "bg-[hsla(137,50%,12%,1)] text-[hsla(131,43%,57%,1)]",
        grey: "bg-[hsla(0,0%,56%,1)] text-white",
        "grey-subtle": "bg-[hsla(0,0%,12%,1)] text-[hsla(0,0%,93%,1)]",
        inverted: "bg-white text-[hsla(0,0%,10%,1)]",
        pink: "bg-[hsla(336,80%,58%,1)] text-white",
        "pink-subtle": "bg-[hsla(335,47%,21%,1)] text-[hsla(341,90%,67%,1)]",
        purple: "bg-[hsla(272,51%,54%,1)] text-white",
        "purple-subtle": "bg-[hsla(281,38%,16%,1)] text-[hsla(275,80%,71%,1)]",
        red: "bg-[hsla(358,75%,59%,1)] text-white",
        "red-subtle": "bg-[hsla(357,46%,16%,1)] text-[hsla(358,100%,69%,1)]",
        teal: "bg-[hsla(173,80%,36%,1)] text-white",
        "teal-subtle": "bg-[hsla(171,75%,13%,1)] text-[hsla(174,90%,41%,1)]",
      },
    },
  }
);

/**
 * Badge is a component that displays a small status descriptor.
 * @param Badge - The props of the Badge component.
 * @param Badge.className - To style the Badge (additional class will get merged by cn()).
 * @param Badge.variant - To set the variant of the Badge.
 * @param Badge.content - To set the content of the Badge. Only when top badge is used.
 * @param Badge.containerClassName - To style the Badge container (additional class will get merged by cn()). Only when top badge is used.
 * @param Badge.children
 * @returns JSX.Element
 * @example
 *  <Badge variant="default">Badge</Badge>
 *  ...
 *  <Badge variant="default" content="New">
 *      <Button>Click Me</Button>
 *  </Badge>
 */
function Badge({
  children,
  className,
  containerClassName,
  content,
  variant,
  ...props
}: BadgeProps) {
  if (content) {
    return (
      <div className={cn("relative inline-flex shrink-0", containerClassName)}>
        {children}
        <span
          className={cn(
            badgeVariants({ variant }),
            "absolute right-[5%] top-[5%] z-10 -translate-y-1/2 translate-x-1/2 shadow",
            className
          )}
          {...props}
        >
          <div className="bg-[hsla(0,0%,56%,1)]" />
          <span className="flex items-center gap-1">{content}</span>
        </span>
      </div>
    );
  }

  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      <span className="flex items-center gap-1">{children}</span>
      {/* <div className="inline-flex h-6 flex-shrink-0 items-center justify-center whitespace-nowrap px-2.5 text-xs font-medium">
        Badge
      </div> */}
    </span>
  );
}

export { Badge, badgeVariants };
