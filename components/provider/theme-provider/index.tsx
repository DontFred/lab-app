"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Fragment } from "react";

import type { ThemeProviderProps } from "./types";

/**
 * ThemeProvider
 * @param ThemeProviderProps - Has all the props from next-themes
 * @param ThemeProviderProps.children - The children to render. Usually the whole app
 * @returns JSX.Element
 * @example
 *  <ThemeProvider
 *   attribute="class"
 *   defaultTheme="system"
 *   enableSystem={true}
 *  >
 *    ...
 *  </ThemeProvider>
 */
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Fragment>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Fragment>
  );
}

export { ThemeProvider, useTheme };
