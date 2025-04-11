import { useTheme } from "@emotion/react";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components";

const TABS = ['Packages', 'Flights', 'Hotels'];

export const SavedScreen = () => {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState('Packages');

    const renderTabs = () => {
        return (
        <View style={styles.tabContainer}>
            {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
                <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tab}
                >
                <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                    {tab}
                </Text>
                {isActive && <View style={styles.underline} />}
                </Pressable>
            );
            })}
        </View>
        );
    };

    const renderContent = () => {
        if (activeTab === 'Packages') {
        return (
            <FlatList
            data={[
                {
                title: 'Italy, Manarola',
                image: { uri: 'https://img.freepik.com/fotos-gratis/tipo-complexo-de-entretenimento-o-popular-resort-com-piscinas-e-parques-aquaticos-na-turquia-com-mais-de-5-milhoes-de-visitantes-por-ano-hotel-de-luxo-amara-dolce-vita-recorrer-tekirova-kemer_146671-18728.jpg?t=st=1744374206~exp=1744377806~hmac=c672e32a2b1bed9a323dd3d24286db8ddaf84daf49434f663c408ca422aafa44&w=2000' },
                },
                {
                title: 'Germany, Berlin',
                image: { uri: 'https://img.freepik.com/fotos-gratis/ponte-de-madeira-na-ilha-de-koh-nangyuan-em-surat-thani-tailandia_335224-1082.jpg?t=st=1744374265~exp=1744377865~hmac=863e1361fe1a105789d3977c8f7051ca9a328f69aa8eca7638328d5dcd22b1fc&w=2000' },
                },
            ]}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
                <Card
                title={item.title}
                image={item.image}
                variant="default"
                />
            )}
            />
        );
        }

        return (
        <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Nenhum item em {activeTab}</Text>
        </View>
        );
    };
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>My Trip !</Text>
          <Text style={styles.subtitle}>Result found (2)</Text>
          {renderTabs()}
          {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 60,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      paddingHorizontal: 16,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 14,
      color: '#999',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    tabContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    tab: {
      marginRight: 24,
      alignItems: 'center',
    },
    tabText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#999',
    },
    activeTabText: {
      color: '#e74c3c',
    },
    underline: {
      marginTop: 4,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#e74c3c',
    },
    placeholder: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    placeholderText: {
      fontSize: 16,
      color: '#ccc',
    },
});







// import { ScrollView, StyleSheet, View } from "react-native";
// import { AppBar } from "../../components/appbar";
// import { Avatar, BodyText, Card } from "../../components";
// import Ripple from "react-native-material-ripple";
// import { Heading } from "../../components/heading";
// import { useTheme } from "@emotion/react";
// import { Categories } from "./categories";

// export const SavedScreen = () => {
//     const theme = useTheme();
//     const styles = createStyles(theme);

//     const categories = [
//         { id: "1", name: "Pacotes" },
//         { id: "2", name: "Voos ️" },
//         { id: "3", name: "Hotéis" },
//     ];

//     return (
//         <ScrollView style={styles.container}>
//             <AppBar
//                 canGoBack
//                 rightActions={
//                     <Ripple onPress={() => {}} rippleContainerBorderRadius={100}>
//                         <Avatar source="https://avatars.githubusercontent.com/u/8883746?v=4" size={44} />
//                     </Ripple>
//                 }
//             />
//             <View style={styles.inner}>
//                 <View style={styles.infoPage}>
//                     <Heading>Salvos</Heading>
//                     <BodyText>Resultado encontrado (2)</BodyText>
//                     <View style={{ paddingTop: 10 }}>
//                         <Categories items={categories} selected={"Pacotes"} onSelect={() => {}} />
//                     </View>
//                     <View>
//                         <Card
//                             variant="default"
//                             title="Italy, Manarola"
//                             image={{ uri: 'https://img.freepik.com/fotos-gratis/tipo-complexo-de-entretenimento-o-popular-resort-com-piscinas-e-parques-aquaticos-na-turquia-com-mais-de-5-milhoes-de-visitantes-por-ano-hotel-de-luxo-amara-dolce-vita-recorrer-tekirova-kemer_146671-18728.jpg?t=st=1744374206~exp=1744377806~hmac=c672e32a2b1bed9a323dd3d24286db8ddaf84daf49434f663c408ca422aafa44&w=2000' }}
//                             rating={4.5}
//                         />

//                         <Card
//                             variant="price"
//                             title="Water Hotel"
//                             subtitle="$15.99 / per day"
//                             image={{ uri: 'https://img.freepik.com/fotos-gratis/ponte-de-madeira-na-ilha-de-koh-nangyuan-em-surat-thani-tailandia_335224-1082.jpg?t=st=1744374265~exp=1744377865~hmac=863e1361fe1a105789d3977c8f7051ca9a328f69aa8eca7638328d5dcd22b1fc&w=2000' }}
//                         />

//                         <Card
//                             variant="square"
//                             title="Italy"
//                             subtitle="Manarola"
//                             image={{ uri: 'https://img.freepik.com/fotos-gratis/relaxamento-oceano-recreacao-turismo-dia_1232-4208.jpg?t=st=1744374324~exp=1744377924~hmac=d90896c80381d64a0b52f08ff2f5206e86ee1bb18f6f646b508a3dfb53f5b4c8&w=826' }}
//                             rating={4.5}
//                         />
//                     </View>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }

// const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
//     container: {
//         backgroundColor: theme.colors.base,
//     },
//     inner: {
//         paddingHorizontal: 24,
//         paddingBottom: 24
//     },
//     infoPage: {
//         gap: 10
//     }
// })