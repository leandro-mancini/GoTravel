import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";
import { Card, MiniCard, TextButton } from "../../components";
import { useTheme } from "@emotion/react";

const { width } = Dimensions.get("window");

const DATA = [
    {
      id: '6',
      title: 'EUA',
      subtitle: 'Nova York',
      rating: 4.5,
      image: { uri: 'https://img.freepik.com/fotos-gratis/manhattan-skyline_649448-1559.jpg?t=st=1744419430~exp=1744423030~hmac=a5eee7e5051516b5b73baadb5f3babb4f19274354dc0c819afc38d308cd9620d&w=1800' },
    },
    {
      id: '7',
      title: 'Brasil',
      subtitle: 'Rio de Janeiro',
      rating: 4.5,
      image: { uri: 'https://img.freepik.com/fotos-gratis/foto-aerea-do-rio-de-janeiro-cercado-pelo-mar-e-morros-sob-o-sol-no-brasil_181624-11362.jpg?t=st=1744419474~exp=1744423074~hmac=6f0cf2da070e45d4543e03a4ed6b6f185b417406b614408db5d359d86e295103&w=2000' },
    },
    {
        id: '3',
        title: 'França',
        subtitle: 'Paris',
        rating: 4.5,
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
        rating: 4.8,
        image: { uri: 'https://img.freepik.com/fotos-gratis/castelo-de-matsumoto-em-osaka-japao_1150-11177.jpg?t=st=1744419367~exp=1744422967~hmac=d162e9c0dc5bec26fd2be8a117f0c2df690aab461e35e5cd3b514634776a1b37&w=2000' },
    },
];

export const TopScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>Top Pacotes</Text>
                <TextButton label="Ver todos" onPress={() => {}} />
            </View>
            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[
                            styles.favoriteItem, 
                            index === 0 && styles.favoriteFirstItem,
                            index === DATA.length -1 && styles.favoriteLastItem
                        ]}>
                            <Ripple
                                onPress={() => {}}
                                rippleContainerBorderRadius={20}
                            >
                                <MiniCard
                                    image={item.image}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    rating={item.rating}
                                />
                            </Ripple>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        marginBottom: 30
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        justifyContent: "space-between",
        marginBottom: 20
    },
    infoTitle: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: theme.typography.fontFamily.medium,
        color: theme.colors.text.primary[100]
    },
    favoriteItem: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    },
    favoriteFirstItem: {
        marginLeft: 24,
    },
    favoriteLastItem: {
        marginRight: 24,
    }
});