import { useTheme } from "@emotion/react";
import { StyleSheet } from "react-native";

export const iconButtonRecipe = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    outline: {
        borderWidth: 1,
        borderColor: theme.colors.border.primary,
    },
    ghost: {
        backgroundColor: 'transparent',
    },
})