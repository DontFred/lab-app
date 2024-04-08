import type { ReactNode } from "react";
import { ThemeProviderProps } from "./theme-provider/types";

export interface ProviderProps {
	children: ReactNode | ReactNode[];
	themeProviderDefaultTheme: ThemeProviderProps["defaultTheme"];
	themeProviderEnableSystem: ThemeProviderProps["enableSystem"];
	themeProviderDisableTransitionOnChange: ThemeProviderProps["disableTransitionOnChange"];
}
