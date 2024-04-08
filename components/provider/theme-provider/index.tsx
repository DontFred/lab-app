"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Fragment } from "react";
import type { ThemeProviderProps } from "./types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Fragment>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Fragment>
  );
}

export { useTheme, ThemeProvider };
