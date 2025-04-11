import { StyleSheet, View } from "react-native";
import { AppBar } from "../../components/appbar";
import { Avatar, BodyText } from "../../components";
import Ripple from "react-native-material-ripple";
import { Heading } from "../../components/heading";
import { useTheme } from "@emotion/react";

export const SavedScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);

    function alert(arg0: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={styles.container}>
            <AppBar
                canGoBack
                rightActions={
                    <Ripple onPress={() => {}} rippleContainerBorderRadius={100}>
                        <Avatar source="https://avatars.githubusercontent.com/u/8883746?v=4" size={44} />
                    </Ripple>
                }
            />
            <View style={styles.inner}>
                <View style={styles.infoPage}>
                    <Heading>Salvos</Heading>
                    <BodyText>Resultado encontrado (2)</BodyText>
                </View>
            </View>
        </View>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.base,
    },
    inner: {
        paddingHorizontal: 24,
        paddingBottom: 24
    },
    infoPage: {
        gap: 10
    }
})