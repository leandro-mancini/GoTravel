import { useTheme } from "@emotion/react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppBar, Avatar, Card, Categories, Icon, TextButton } from "../../components";
import Ripple from "react-native-material-ripple";

export const HomeScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const categories = [
        { id: "1", name: "Pacotes" },
        { id: "2", name: "Lugares ️" },
        { id: "3", name: "Hotéis" },
    ];
    
    return (
        <ScrollView style={styles.container}>
            <AppBar
                leftActions={
                    <View style={styles.location}>
                        <Icon name="Location" size={20} />
                        <Text style={styles.locationText}>Rio de Janeiro, Brasil</Text>
                    </View>
                }
                rightActions={
                    <Ripple onPress={() => {}} rippleContainerBorderRadius={100}>
                        <Avatar source="https://avatars.githubusercontent.com/u/8883746?v=4" size={44} />
                    </Ripple>
                }
            />
            <Categories
                items={categories}
                selected={"Pacotes"}
                onSelect={() => {}}
            />
            <View style={{ height: 30 }} />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>101 Packages</Text>
                <TextButton label="Ver todos" onPress={() => {}} />
            </View>
            <Card
                variant="square"
                title="Italy"
                subtitle="Manarola"
                image={{ uri: 'https://img.freepik.com/fotos-gratis/bondinho-do-pao-de-acucar-durante-o-por-do-sol_181624-36743.jpg?t=st=1745505903~exp=1745509503~hmac=1d693b60c17152ba464c6f91ba2e39614262b1ef93a8b1b2822b1b5eb5e7a431&w=900' }}
                rating={4.5}
            />
        </ScrollView>
    );
    // return (
    //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //         <Text>Home</Text>

    //         <Card
    //             variant="default"
    //             title="Italy, Manarola"
    //             image={{ uri: 'https://link-da-imagem.jpg' }}
    //             rating={4.5}
    //             />

    //             <Card
    //             variant="price"
    //             title="Water Hotel"
    //             subtitle="$15.99 / per day"
    //             image={{ uri: 'https://link-da-imagem.jpg' }}
    //             />

    //             <Card
    //             variant="square"
    //             title="Italy"
    //             subtitle="Manarola"
    //             image={{ uri: 'https://link-da-imagem.jpg' }}
    //             rating={4.5}
    //             />
    //     </View>
    // );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.base,
        flex: 1
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16
    },
    locationText: {
        fontFamily: theme.typography.fontFamily.medium,
        fontSize: 20,
        lineHeight: 22,
        color: theme.colors.text.primary[100]
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: theme.typography.fontFamily.regular,
        color: theme.colors.text.secondary[100]
    }
})