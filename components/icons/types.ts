import type { ReactNode, SVGProps } from "react";

import type { IconName } from "./icon-types";

export type { IconName };

interface IconGenealProps extends SVGProps<SVGSVGElement> {
  childClassName?: string;
  name: IconName;
}

export type IconProps = IconGenealProps &
  (
    | {
        childClassName?: undefined;
        children?: undefined;
      }
    | {
        children: ReactNode | ReactNode[];
      }
  );
