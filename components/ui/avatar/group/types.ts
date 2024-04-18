import type { AvatarProps as RadixAvatarProps } from "@radix-ui/react-avatar";

interface Avatar {
  fallback?: string;
  src?: string;
}

export interface AvatarGroupProps extends RadixAvatarProps {
  avatars: Avatar[];
  containerClassName?: string;
  limit?: number;
}
