import { useState } from "react";
import { SafeAreaView, Share, StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, IconButton, Switch } from "../../components";
import Ripple from "react-native-material-ripple";
import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import { useThemeMode } from "../../hooks";

export const SettingsScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [notification, setNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);
    const { themeMode, toggleTheme } = useThemeMode();
    const isDark = themeMode === 'dark';

    const handleShare = async () => {
        try {
            await Share.share({
                message: '✈️ Baixe o Go Travel e descubra experiências incríveis de viagem ao redor do mundo! 🌍\n\n👉 Disponível em: https://go-travel.app', // substitua com o link real se tiver
            });
        } catch (error) {
            console.error('Erro ao compartilhar o app:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <IconButton onPress={() => navigation.goBack()}>
                <Icon name="ArrowLeft2" size={16} color={theme.colors.text.primary[100]} />
            </IconButton>
            <Ripple onPress={() => {}} rippleContainerBorderRadius={100}>
                <Avatar source="https://avatars.githubusercontent.com/u/8883746?v=4" size={44} />
            </Ripple>
          </View>

          <Text style={styles.title}>Ajustes</Text>
    
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Notificação</Text>
            <Switch value={notification} onValueChange={setNotification} />
          </View>
    
          <View style={styles.separator} />
    
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Modo escuro</Text>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
    
          <View style={styles.separator} />
    
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Notificação por e-mail</Text>
            <Switch value={emailNotification} onValueChange={setEmailNotification} />
          </View>
    
          <View style={styles.separator} />
    
          <Ripple style={styles.navRow}>
            <Text style={styles.optionText}>Sobre o aplicativo</Text>
            <Icon name="ArrowRight2" size={16} color={theme.colors.text.primary[100]} />
          </Ripple>
    
          <View style={styles.separator} />
    
          <Ripple style={styles.navRow} onPress={handleShare}>
            <Text style={styles.optionText}>Compartilhar aplicativo</Text>
            <Icon name="ArrowRight2" size={16} color={theme.colors.text.primary[100]} />
          </Ripple>
    
          <View style={styles.separator} />
        </SafeAreaView>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.base,
    },
    avatar: {
        borderRadius: 999,
        boxShadow: "0 3 10 0 rgba(16,16,16,1)",
        backgroundColor: "black"
    },
    header: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24
    },
    title: {
      fontFamily: theme.typography.fontFamily.medium,
      color: theme.colors.text.primary[100],
      fontSize: 22,
      paddingHorizontal: 24
    },
    optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 24
    },
    navRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 24
    },
    optionText: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: theme.typography.fontFamily.medium,
      color: theme.colors.text.primary[100],
    },
    separator: {
      height: 1,
      backgroundColor: theme.colors.border.secondary,
      marginHorizontal: 24
    },
  });