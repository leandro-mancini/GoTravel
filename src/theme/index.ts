import { Theme } from "@emotion/react";
import { colorsDark, colorsLight } from "./colors";
import { typography } from "./typography";
import { textStyle } from "./text-style";

export * from './recipes'

export const lightTheme: Theme = {
  colors: colorsLight,
  typography: typography,
  textStyle: textStyle
};

export const darkTheme: Theme = {
  colors: colorsDark,
  typography: typography,
  textStyle: textStyle
};

export type ThemeType = typeof lightTheme;