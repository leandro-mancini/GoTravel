import { useTheme } from "@emotion/react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppBar, Avatar, BodyText, Heading, TabBar } from "../../components";
import Ripple from "react-native-material-ripple";
import { PackagesView } from "./packages";
import { FightsView } from "./flights";
import { HotelsView } from "./hotels";

export const SavedScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    
    return (
        <ScrollView style={styles.container}>
            <AppBar
                canGoBack
                rightActions={
                    <Ripple onPress={() => {}} rippleContainerBorderRadius={100}>
                        <Avatar source="https://avatars.githubusercontent.com/u/8883746?v=4" size={44} />
                    </Ripple>
                }
            />
            <View style={styles.infoPage}>
                <Heading>Salvos</Heading>
                <BodyText>Resultado encontrado (9)</BodyText>
            </View>
            <TabBar
                style={{ paddingHorizontal: 8 }}
                screens={[
                    {
                        key: 'packages',
                        title: 'Pacotes',
                        component: <PackagesView />,
                    },
                    {
                        key: 'flights',
                        title: 'Voos',
                        component: <FightsView />,
                    },
                    {
                        key: 'hotels',
                        title: 'Hotéis',
                        component: <HotelsView />,
                    },
                ]}
            />
        </ScrollView>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.base,
        flex: 1
    },
    inner: {
        paddingHorizontal: 24,
        paddingBottom: 24
    },
    infoPage: {
        gap: 10,
        paddingHorizontal: 24,
        paddingBottom: 24
    }
})