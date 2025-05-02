import { useTheme } from "@emotion/react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppBar, Avatar, Categories, Icon } from "../../components";
import Ripple from "react-native-material-ripple";
import { List } from "./list";
import { Popular } from "./popular";
import { TopScreen } from "./top";

export const HomeScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const categories = [
        { id: "1", name: "Pacotes" },
        { id: "2", name: "Lugares" },
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
            <List items={list} />
            <View style={{ height: 30 }} />
            <Popular />
            <View style={{ height: 20 }} />
            <TopScreen />
        </ScrollView>
    );
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
})

const list = [
    {
        id: '1',
        title: 'Itália',
        subtitle: 'Manarola',
        rating: 4.5,
        image: { uri: 'https://img.freepik.com/fotos-gratis/bela-foto-de-edificios-de-cores-variadas-na-colina-perto-do-mar-em-manarola-italia_181624-18586.jpg?t=st=1744419217~exp=1744422817~hmac=f00a9263114bc0b1819820024b2ce8e072d9140ac7a177394a9d834678f056a6&w=2000' },
    },
    {
        id: '2',
        title: 'Alemanha',
        subtitle: 'Berlim',
        rating: 4.3,
        image: { uri: 'https://img.freepik.com/fotos-gratis/edificio-com-colunas_1160-803.jpg?t=st=1744419262~exp=1744422862~hmac=3ec19adb520dea7f84ad593e5e817860516f4a774066cf3bc92b432b9e6a5174&w=2000' },
    },
    {
        id: '3',
        title: 'França',
        subtitle: 'Paris',
        rating: 2.5,
        image: { uri: 'https://img.freepik.com/fotos-gratis/bela-foto-ampla-da-torre-eiffel-em-paris-rodeada-de-agua-com-navios-sob-o-ceu-colorido_181624-5118.jpg?t=st=1744419283~exp=1744422883~hmac=9d4bd95ef7b211e8d2a0bba6d2bec5b67ad541d3a2b4d8ff7779b4cc0eea4232&w=2000' },
    },
    {
        id: '4',
        title: 'Espanha',
        subtitle: 'Barcelona',
        rating: 4.8,
        image: { uri: 'https://img.freepik.com/fotos-gratis/vista-do-parque-guell-no-inverno-barcelona_1398-4411.jpg?t=st=1744419334~exp=1744422934~hmac=fb752590414964a2346100fb2cb4d3f54aa936b6ba09caf7f994142652fb2793&w=2000' },
    },
    {
        id: '5',
        title: 'Japão',
        subtitle: 'Quioto',
        rating: 3.8,
        image: { uri: 'https://img.freepik.com/fotos-gratis/castelo-de-matsumoto-em-osaka-japao_1150-11177.jpg?t=st=1744419367~exp=1744422967~hmac=d162e9c0dc5bec26fd2be8a117f0c2df690aab461e35e5cd3b514634776a1b37&w=2000' },
    },
];