import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

import type { AvatarGroupProps } from "./type";

/**
 * AvatarGroup is a component that displays a group of avatars.
 * @param AvatarGroup - The props of the AvatarGroup component.
 * @param AvatarGroup.className - To style the Avatars inside the group, mainly for size (additional class will get merged by cn()).
 * @param AvatarGroup.avatars - An array of avatars to display.
 * @param AvatarGroup.containerClassName - To style the avatar group (additional class will get merged by cn()).
 * @param AvatarGroup.limit -  To set the limit of avatars to display.
 * @returns JSX.Element
 * @example
 *  <AvatarGroup
 *      avatars={[
 *          { src: "/avatar-1.jpg", fallback: "A1" },
 *          { src: "/avatar-2.jpg", fallback: "A2" },
 *          { src: "/avatar-3.jpg", fallback: "A3" }
 *      ]}
 *      limit={2}
 *  />
 */
export function AvatarGroup({
  avatars,
  className,
  containerClassName,
  limit,
  ...rest
}: AvatarGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center [&>*:nth-child(n+2)]:[margin-left:-10px]",
        containerClassName
      )}
    >
      {avatars.map((avatar, index) => {
        if (limit && index > limit) {
          return null;
        }

        if (limit && index === limit) {
          return (
            <Avatar
              className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border",
                className
              )}
              key={index}
              {...rest}
            >
              <AvatarFallback>+{avatars.length - limit}</AvatarFallback>
            </Avatar>
          );
        }

        return (
          <Avatar className={className} key={index} {...rest}>
            <AvatarImage src={avatar.src} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        );
      })}
    </div>
  );
}
