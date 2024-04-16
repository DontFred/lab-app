import type { ReactNode, SVGProps } from "react";

import type { IconName } from "./icon-types";

export type { IconName };

interface IconGenealProps extends SVGProps<SVGSVGElement> {
  containerClassName?: string;
  name: IconName;
}

export type IconProps = IconGenealProps &
  (
    | {
        children: ReactNode | ReactNode[];
      }
    | {
        children?: undefined;
        containerClassName?: undefined;
      }
  );
