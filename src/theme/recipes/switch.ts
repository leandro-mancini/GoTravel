import { useTheme } from "@emotion/react";
import { StyleSheet } from "react-native";

export const switchRecipe = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        width: 50,
        height: 30,
        justifyContent: 'center',
    },
    track: {
        width: 44,
        height: 24,
        borderRadius: 999,
        padding: 2,
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
})