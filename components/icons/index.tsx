import { cn } from "@/lib/utils";

import type { IconProps } from "./types";

/**
 * Icon
 * @param Icon - Has all SVGProps<SVGSVGElement>
 * @param Icon.children - Normally a string to give the icon a label
 * @param Icon.className - To style the SVG element
 * @param Icon.name - IconName from icon-types.ts e. g. "accessibility"
 * @param Icon.containerClassName - To style the container of the icon and children. Only used when children are present
 * @returns JSX.Element
 * @example
 *  <Icon className="h-6 w-6" name="accessibility"/>
 *  ...
 *  <Icon className="h-6 w-6" name="accessibility">
 *    <div>Accessibility</div>
 *  </Icon>
 */
export function Icon({
  children,
  className,
  containerClassName,
  name,
  ...props
}: IconProps) {
  if (children) {
    return (
      <span
        className={cn(
          "font inline-flex items-center gap-1.5",
          containerClassName
        )}
      >
        <Icon className={className} name={name} {...props} />
        {children}
      </span>
    );
  } else {
    return (
      <svg {...props} className={cn("inline h-4 w-4 self-center", className)}>
        <use className="h-full w-full" href={`./icons/sprite.svg#${name}`} />
      </svg>
    );
  }
}
