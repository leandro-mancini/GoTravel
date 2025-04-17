import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "./icon";
import { useTheme } from "@emotion/react";

interface FlightCardProps {
    departureTime: string;
    arrivalTime: string;
    from: string;
    to: string;
    duration: string;
    price: string;
    status?: string;
}
  
export const FlightCard: React.FC<FlightCardProps> = ({
    departureTime,
    arrivalTime,
    from,
    to,
    duration,
    price,
    status = '100% no prazo',
}) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    return (
      <View style={styles.card}>
        {/* Status */}
        <Text style={styles.status}>{status}</Text>
  
        {/* Time and Locations */}
        <View style={styles.row}>
          <View style={styles.timeBlock}>
            <Text style={styles.time}>{departureTime}</Text>
            <Text style={styles.city}>{from}</Text>
          </View>
  
          <View style={styles.middleBlock}>
            <Icon name="Airplane" size={16} color={theme.colors.primary[100]} />
            <Text style={styles.duration}>{duration}</Text>
          </View>
  
          <View style={styles.timeBlock}>
            <Text style={styles.time}>{arrivalTime}</Text>
            <Text style={styles.city}>{to}</Text>
          </View>
        </View>
  
        {/* Price and Save */}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>
            <Text style={styles.priceStrong}>{price}</Text> / pessoa
          </Text>
  
          <View style={styles.saveBtn}>
            <Icon name="Bookmark" size={12} color={theme.colors.text.primary[100]} />
          </View>
        </View>
      </View>
    );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    card: {
        backgroundColor: theme.colors.base,
        borderColor: theme.colors.border.tertiary,
        borderWidth: 1,
        borderRadius: 24,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: "space-between",
        gap: 20
    },
    status: {
        color: theme.colors.primary[100],
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.medium,
        fontSize: 12,
        lineHeight: 14,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timeBlock: {
      alignItems: 'center',
      gap: 6
    },
    time: {
        fontSize: 14,
        lineHeight: 16,
        color: theme.colors.text.primary[100],
        fontFamily: theme.typography.fontFamily.semiBold
    },
    city: {
        color: theme.colors.text.secondary[100],
        fontSize: 12,
        lineHeight: 14,
        fontFamily: theme.typography.fontFamily.regular
    },
    middleBlock: {
      alignItems: 'center',
      gap: 4
    },
    duration: {
        color: theme.colors.text.secondary[100],
        fontSize: 12,
        lineHeight: 14,
        fontFamily: theme.typography.fontFamily.regular
    },
    bottomRow: {
        position: "relative",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    price: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: theme.typography.fontFamily.regular,
        color: theme.colors.text.secondary[100],
    },
    priceStrong: {
        fontSize: 16,
        lineHeight: 18,
        color: theme.colors.text.primary[100],
        fontFamily: theme.typography.fontFamily.semiBold
    },
    saveBtn: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderColor: theme.colors.border.tertiary,
        borderWidth: 1,
        borderRadius: 99,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
  });