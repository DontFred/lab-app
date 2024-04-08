import { Fragment } from "react";
import { ThemeProvider, useTheme as useThemeTheme } from "./theme-provider";
import type { ProviderProps } from "./types";

export default function Provider({
	children,
	themeProviderDefaultTheme = "system",
	themeProviderDisableTransitionOnChange = true,
	themeProviderEnableSystem = true,
}: ProviderProps) {
	return (
		<Fragment>
			<ThemeProvider
				attribute="class"
				defaultTheme={themeProviderDefaultTheme}
				enableSystem={themeProviderEnableSystem}
				disableTransitionOnChange={themeProviderDisableTransitionOnChange}
			>
				{children}
			</ThemeProvider>
		</Fragment>
	);
}

export { useThemeTheme };
