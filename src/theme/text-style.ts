import { Theme } from "@emotion/react";
import { typography } from "./typography";

export const textStyle: Theme['textStyle'] = {
    heading: {
        "1": {
          fontSize: typography.fontSize["6xl"],
          fontFamily: typography.fontFamily.bold,
          lineHeight: typography.lineHeight["6xl"]
        },
        "2": {
          fontSize: typography.fontSize["5xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["5xl"]
        },
        "3": {
          fontSize: typography.fontSize["4xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["4xl"]
        },
        "4": {
          fontSize: typography.fontSize["3xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["3xl"]
        },
        "5": {
          fontSize: typography.fontSize["2xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["2xl"]
        }
      },
      subHeading: {
        "1": {
          fontSize: typography.fontSize["xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["xl"]
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["lg"]
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["md"]
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: typography.lineHeight["sm"]
        }
      },
      bodyText: {
        "1": {
          fontSize: typography.fontSize["xl"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["xl"]
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["lg"]
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["md"]
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["sm"]
        }
      },
      buttonText: {
        "1": {
          fontSize: typography.fontSize["2xl"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["2xl"]
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["lg"]
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["md"]
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: typography.lineHeight["sm"]
        }
      }
}