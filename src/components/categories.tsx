import { useTheme } from "@emotion/react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { AnimatedFadeView } from "../animations";

interface CategoriesProps {
    items: { id: string; name: string }[];
    onSelect: (category: string) => void;
    selected: string;
}

export const Categories = ({ items, selected, onSelect }: CategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(selected);
    const theme = useTheme();
    const styles = createStyles(theme);

    return (
        <View>
          <FlatList
            data={items}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              const isSelected = selectedCategory === item.name;

              return (
                <View style={[styles.item, index === 0 && styles.itemFirst]}>
                  <Ripple
                    style={styles.button}
                    rippleColor="#4894FE"
                    rippleContainerBorderRadius={100}
                    onPress={() => {
                      setSelectedCategory(item.name);
                      onSelect(item.name);
                    }}
                  >
                    <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
                      {item.name}
                    </Text>
                  </Ripple>
                  <AnimatedFadeView animation="fadeIn" style={[styles.indicator, isSelected && styles.selectedindicator]}>
                        <View />
                    </AnimatedFadeView>
                </View>
              );
            }}
          />
        </View>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    item: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemFirst: {
      marginLeft: 8,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        position: "relative"
    },
    indicator: {
        backgroundColor: theme.colors.base,
        width: 10,
        height: 3,
        borderRadius: 99,
        marginHorizontal: 16
    },
    selectedindicator: {
        backgroundColor: theme.colors.secondary[100]
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: theme.typography.fontFamily.medium,
        color: theme.colors.text.secondary[100]
    },
    selectedButtonText: {
        color: theme.colors.secondary[100],
        fontFamily: theme.typography.fontFamily.semiBold
    },
});