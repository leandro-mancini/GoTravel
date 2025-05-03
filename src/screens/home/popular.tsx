import { StyleSheet, Text, View } from "react-native";
import { Card, SliderPager, TextButton } from "../../components";
import { useTheme } from "@emotion/react";
import Ripple from "react-native-material-ripple";

const DATA = [
  {
    id: '1',
    title: 'Grécia, Santorini',
    rating: 4.5,
    image: { uri: 'https://img.freepik.com/fotos-gratis/foto-vertical-de-alto-angulo-dos-edificios-brancos-em-santorini-grecia_181624-31643.jpg?t=st=1744419551~exp=1744423151~hmac=06327caac479527946b97ad533bacbbec75b697bcecbb82dd1521180165f3010&w=900' },
  },
  {
    id: '2',
    title: 'Tailândia, Bangkok',
    rating: 4.5,
    image: { uri: 'https://img.freepik.com/fotos-gratis/templo-de-wat-arun-no-crepusculo-em-bangkok-tailandia_335224-772.jpg?t=st=1744419575~exp=1744423175~hmac=8a0fae58933abd7f9a75b46b7ec8bf78f500be12ed5f7581391cffc4a5c4a342&w=2000' },
  },
  {
    id: '3',
    title: 'Portugal, Lisboa',
    rating: 4.5,
    image: { uri: 'https://img.freepik.com/fotos-gratis/vista-famosa-do-rio-porto-e-douro-portugal-europa_268835-3493.jpg?t=st=1744419602~exp=1744423202~hmac=c86c34371d11bad39f8560d0d5324d1e071ecbea7868abd38e1119e805e1c96f&w=2000' },
  },
];

export const Popular = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
  
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
            <Text style={styles.title}>Pacotes populares</Text>
            <TextButton label="Ver todos" onPress={() => {}} />
        </View>

        <SliderPager total={3} onFinish={() => {}}>
            {DATA.map((item) => (
                <View key={item.id} style={{ paddingHorizontal: 24 }}>
                    <Ripple
                        onPress={() => {}}
                        rippleContainerBorderRadius={30}
                    >
                        <Card
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            variant="default"
                        />
                    </Ripple>
                </View>
            ))}
        </SliderPager>
      </View>
    );
  };
  
  const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
      flex: 1,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        justifyContent: "space-between",
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: theme.typography.fontFamily.medium,
        color: theme.colors.text.primary[100]
    },
  });