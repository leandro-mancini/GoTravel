import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Icon } from "./icon";
import { useTheme } from "@emotion/react";

interface MiniCardProps {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
    rating: number;
  }
  
  export const MiniCard: React.FC<MiniCardProps> = ({
    image,
    title,
    subtitle,
    rating,
  }) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
  
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
  
          <View style={styles.ratingRow}>
            <Icon name="Star" size={10} color="#FFD600" />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
      backgroundColor: '#F7F8FC',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
      borderRadius: 20,
      gap: 10,
      width: 180
    },
    image: {
      width: 58,
      height: 58,
      borderRadius: 20,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    //   gap: 2,
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: theme.typography.fontFamily.medium,
        color: theme.colors.text.primary[100]
    },
    subtitle: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: theme.typography.fontFamily.regular,
        color: theme.colors.text.secondary[100]
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    },
    ratingText: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: theme.typography.fontFamily.regular,
        color: theme.colors.text.secondary[100]
    },
  });