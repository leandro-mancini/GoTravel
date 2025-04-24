import { StyleProp, Text, View, ViewStyle } from "react-native";
import { IconButton } from "./icon-button";
import { Icon } from "./icon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@emotion/react";
import { appbarRecipe } from "../theme";

interface AppBarProps {
    title?: string;
    canGoBack?: boolean;
    leftActions?: React.ReactNode;
    rightActions?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
  }
  
  export const AppBar: React.FC<AppBarProps> = ({ title, canGoBack = false,leftActions, rightActions, style }) => {
    const navigation = useNavigation();
    const theme = useTheme();
    const styles = appbarRecipe(theme);
  
    return (
        <View
            style={[styles.container, style]}
        >
            <View style={styles.inner}>
                {canGoBack ? (
                    <IconButton onPress={navigation.goBack}>
                        <Icon name="ArrowLeft2" size={16} color={theme.colors.text.primary[100]} />
                    </IconButton>
                ) : (
                    <View style={styles.left}>{leftActions}</View>
                )}
                <Text style={[styles.title, { color: theme.colors.text.primary[100], fontFamily: theme.typography.fontFamily.medium }]}>
                    {title}
                </Text>
                <View style={styles.right}>{rightActions}</View>
            </View>
        </View>
    );
};