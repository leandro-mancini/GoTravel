import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@react-native-vector-icons/ionicons';
import { Icon } from "./icon";

interface RatingProps {
    value: number; // Ex: 4.5, 4.8
    max?: number;  // Quantidade máxima de estrelas (padrão: 5)
    size?: number; // Tamanho das estrelas
    showText?: boolean; // Exibe o valor numérico
  }
  
  export const Rating: React.FC<RatingProps> = ({
    value,
    max = 5,
    size = 16,
    showText = true,
  }) => {
    const fullStars = Math.floor(value);
    const hasHalfStar = value - fullStars >= 0.25 && value - fullStars < 0.75;
    const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <View style={styles.container}>
        {Array.from({ length: fullStars }).map((_, i) => (
          // <Ionicons key={`full-${i}`} name="star" color="#FFD601" />
            <Icon key={`full-${i}`} name="Star" color="tomato" size={size} />
        //   <Ionicons key={`full-${i}`} name="star" size={size} color="#FFD601" />
        ))}
        {hasHalfStar && (
            <Icon name="Star" size={size} color="blue" />
        //   <Ionicons name="star-half" size={size} color="#FFD601" />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
            <Icon key={`empty-${i}`} name="Star" size={size} color="#FFD601" />
        //   <Ionicons key={`empty-${i}`} name="star-outline" size={size} color="#FFD601" />
        ))}
  
        {showText && (
          <Text style={[styles.text, { fontSize: size * 0.85 }]}>{value.toFixed(1)}</Text>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    text: {
      marginLeft: 4,
      color: '#fff',
      fontWeight: '500',
    },
  });