import { useContext } from "react";
import { ThemeContext } from "../theme/provider";

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeMode deve ser usado dentro do ThemeProvider');
    return context;
};