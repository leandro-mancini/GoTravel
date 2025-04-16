import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "./icon";
import { useTheme } from "@emotion/react";
import { Rating } from "./rating";

type CardVariant = 'default' | 'price' | 'square';

interface CardProps {
  variant?: CardVariant;
  title: string;
  subtitle?: string;
  image: ImageSourcePropType;
  rating?: number;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  subtitle,
  image,
  rating = 4.5,
}) => {
  const isSquare = variant === 'square';
  const isPrice = variant === 'price';

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <ImageBackground
      source={image}
      style={[styles.container, variantStyles[variant]]}
      imageStyle={[styles.image, isPrice && styles.redBorder]}
    >
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.saveButton}>
        <Icon name="Bookmark" size={12} color={theme.colors.text.primary[100]} />
      </View>

      <View style={styles.content}>
        {variant !== 'price' && (
          <Rating value={rating} size={10} />
        )}

        <Text style={styles.title}>{title}</Text>

        {(isPrice || isSquare) && subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  saveButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: theme.colors.base,
    borderRadius: 100,
    zIndex: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    gap: 10
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    lineHeight: 24,
    fontFamily: theme.typography.fontFamily.medium
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
  },
  redBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

const variantStyles: Record<CardVariant, any> = {
  default: {
    height: 200,
    width: '100%',
  },
  price: {
    height: 180,
    width: '100%',
  },
  square: {
    height: 180,
    width: 160,
  },
};