import { FlatList, StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";

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
                <View style={[styles.categoryItem, index === 0 && styles.categoryFirstItem]}>
                  <Ripple
                    style={styles.button}
                    rippleColor={theme.colors.secondary[100]}
                    rippleContainerBorderRadius={999}
                    onPress={() => {
                      setSelectedCategory(item.name);
                      onSelect(item.name);
                    }}
                  >
                    <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
                      {item.name}
                    </Text>
                    <View style={[styles.buttonBullet, isSelected && styles.selectedButtonBullet]} />
                  </Ripple>
                </View>
              );
            }}
          />
        </View>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    categoryItem: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 6,
    },
    categoryFirstItem: {
      marginLeft: -16
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    buttonBullet: {
        width: 10,
        height: 3,
        backgroundColor: theme.colors.base,
        borderRadius: 99,
        position: "absolute",
        bottom: 0,
        left: '50%',
        marginHorizontal: 16,
        transform: [{ translateX: -5 }],
    },
    selectedButtonBullet: {
        backgroundColor: theme.colors.secondary[100],
    },
    buttonText: {
        color: theme.colors.text.secondary[100],
        fontFamily: theme.typography.fontFamily.medium,
        fontSize: 16,
        lineHeight: 18
    },
    selectedButtonText: {
        color: theme.colors.secondary[100],
        fontFamily: theme.typography.fontFamily.semiBold
    },
});