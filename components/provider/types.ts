import { ThemeProviderProps } from "./theme-provider/types";

import type { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode | ReactNode[];
  themeProviderAttribute: ThemeProviderProps["attribute"];
  themeProviderDefaultTheme: ThemeProviderProps["defaultTheme"];
  themeProviderDisableTransitionOnChange: ThemeProviderProps["disableTransitionOnChange"];
  themeProviderEnableColorScheme: ThemeProviderProps["enableColorScheme"];
  themeProviderEnableSystem: ThemeProviderProps["enableSystem"];
  themeProviderForcedTheme: ThemeProviderProps["forcedTheme"];
  themeProviderNonce: ThemeProviderProps["nonce"];
  themeProviderStorageKey: ThemeProviderProps["storageKey"];
  themeProviderThemes: ThemeProviderProps["themes"];
  themeProviderValue: ThemeProviderProps["value"];
}
