import { useTheme } from "@emotion/react";
import { StyleSheet } from "react-native";

export const appbarRecipe = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        backgroundColor: theme.colors.base
    },
    inner: {
        // height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 28,
        paddingBottom: 30
    },
    title: {
        fontSize: 16,
        lineHeight: 18,
        flex: 1,
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.medium
    },
    right: {
        // width: 40,
        // alignItems: 'flex-end',
    },
})