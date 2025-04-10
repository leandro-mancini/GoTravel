import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, IconButton, Switch } from "../../components";
import Ripple from "react-native-material-ripple";
import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [notification, setNotification] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <IconButton onPress={() => navigation.goBack()}>
                <Icon name="ArrowLeft2" size={16} color="#23262F" />
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
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
    
          <View style={styles.separator} />
    
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Notificação por e-mail</Text>
            <Switch value={emailNotification} onValueChange={setEmailNotification} />
          </View>
    
          <View style={styles.separator} />
    
          <Ripple style={styles.navRow}>
            <Text style={styles.optionText}>Sobre o aplicativo</Text>
            <Icon name="ArrowRight2" size={16} color="#23262F" />
          </Ripple>
    
          <View style={styles.separator} />
    
          <Ripple style={styles.navRow}>
            <Text style={styles.optionText}>Compartilhar aplicativo</Text>
            <Icon name="ArrowRight2" size={16} color="#23262F" />
          </Ripple>
    
          <View style={styles.separator} />
        </SafeAreaView>
    );
}

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: theme.typography.fontFamily.medium,
      color: "#23262F",
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
      color: '#23262F',
    },
    separator: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginHorizontal: 24
    },
  });