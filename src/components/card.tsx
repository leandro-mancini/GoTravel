import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "./icon";

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
        <Icon name="Bookmark" size={20} color="#000" />
      </View>

      <View style={styles.content}>
        {variant !== 'price' && (
          <View style={styles.rating}>
            <Text style={styles.star}>⭐️⭐️⭐️⭐️⭐️</Text>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        )}

        <Text style={styles.title}>{title}</Text>

        {(variant === 'price' || variant === 'square') && subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
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
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 100,
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    bottom: 12,
    left: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 14,
    color: '#FFD700',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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