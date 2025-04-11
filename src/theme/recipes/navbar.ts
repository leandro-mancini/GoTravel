import { useTheme } from "@emotion/react";
import { StyleSheet } from "react-native";

export const navbarRecipe = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        height: 80,
        borderTopWidth: 0,
        elevation: 34,
        backgroundColor: theme.colors.surface
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    label: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: theme.typography.fontFamily.medium,
        color: theme.colors.text.secondary[100]
    }
})