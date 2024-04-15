import { cn } from "@/lib/utils";

import type { IconProps } from "./types";

/**
 * Icon
 * @param Icon - Has all SVGProps<SVGSVGElement>
 * @param Icon.childClassName
 * @param Icon.children
 * @param Icon.className
 * @param Icon.name
 * @returns JSX.Element
 */
export function Icon({
  childClassName,
  children,
  className,
  name,
  ...props
}: IconProps) {
  if (children) {
    return (
      <span
        className={cn("font inline-flex items-center gap-1.5", childClassName)}
      >
        <Icon className={className} name={name} {...props} />
        {children}
      </span>
    );
  } else {
    return (
      <svg
        {...props}
        className={cn(
          "inline h-[1em] w-[1em] self-center",
          className,
          childClassName
        )}
      >
        <use className="h-full w-full" href={`./icons/sprite.svg#${name}`} />
      </svg>
    );
  }
}
