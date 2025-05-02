import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";
import { Card, TextButton } from "../../components";
import { useTheme } from "@emotion/react";

interface ListProps {
    items: {
        id: string;
        title: string;
        subtitle: string;
        image: { uri: string; };
        rating: number;
    }[];
}

const { width } = Dimensions.get("window");

export const List = ({ items }: ListProps) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>101 Packages</Text>
                <TextButton label="Ver todos" onPress={() => {}} />
            </View>
            <FlatList
                data={items}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[
                            styles.favoriteItem, 
                            index === 0 && styles.favoriteFirstItem,
                            index === items.length -1 && styles.favoriteLastItem
                        ]}>
                            <Ripple
                                onPress={() => {}}
                                rippleContainerBorderRadius={30}
                            >
                                <Card
                                    variant="square"
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    image={item.image}
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
        marginBottom: -32
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        justifyContent: "space-between",
    },
    infoTitle: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: theme.typography.fontFamily.regular,
        color: theme.colors.text.secondary[100]
    },
    favoriteItem: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
      paddingBottom: 32,
      paddingTop: 16,
      width: (width / 2) - 24,
    },
    favoriteFirstItem: {
        marginLeft: 24,
    },
    favoriteLastItem: {
        marginRight: 24,
    },
    button: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 6,
      height: 193,
      width: "100%"
    },
    buttonText: {
      fontSize: 14,
      lineHeight: 16,
      color: "#939393",
      fontFamily: "Inter_24pt-Regular"
    },
});