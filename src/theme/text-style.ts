import { Theme } from "@emotion/react";
import { typography } from "./typography";

export const textStyle: Theme['textStyle'] = {
    heading: {
        "1": {
          fontSize: typography.fontSize["6xl"],
          fontFamily: typography.fontFamily.bold,
          lineHeight: 30
        },
        "2": {
          fontSize: typography.fontSize["5xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 28
        },
        "3": {
          fontSize: typography.fontSize["4xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 26
        },
        "4": {
          fontSize: typography.fontSize["3xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 24
        },
        "5": {
          fontSize: typography.fontSize["2xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 22
        }
      },
      subHeading: {
        "1": {
          fontSize: typography.fontSize["xl"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 20
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 18
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 16
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.medium,
          lineHeight: 14
        }
      },
      bodyText: {
        "1": {
          fontSize: typography.fontSize["xl"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 20
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 18
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 16
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 14
        },
        "5": {
          fontSize: typography.fontSize["xs"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 12
        }
      },
      buttonText: {
        "1": {
          fontSize: typography.fontSize["2xl"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 22
        },
        "2": {
          fontSize: typography.fontSize["lg"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 18
        },
        "3": {
          fontSize: typography.fontSize["md"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 16
        },
        "4": {
          fontSize: typography.fontSize["sm"],
          fontFamily: typography.fontFamily.regular,
          lineHeight: 14
        }
      }
}