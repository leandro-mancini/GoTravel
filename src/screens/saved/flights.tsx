import { FlatList } from "react-native";
import { FlightCard } from "../../components";
import Ripple from "react-native-material-ripple";

export const FightsView = () => {
    return (
        <FlatList
            data={fights}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            renderItem={({ item, index }) => (
                <Ripple
                    onPress={() => {}}
                    rippleContainerBorderRadius={24}
                    style={[{ marginVertical: 10 }, index === 0 && { marginTop: 0 }]}
                >
                    <FlightCard
                        departureTime={item.departureTime}
                        arrivalTime={item.arrivalTime}
                        from={item.origin}
                        to={item.destination}
                        duration={item.duration}
                        price={item.price}
                        status={`${item.punctuality} no horário`}
                        bookmarked={item.bookmarked}
                    />
                </Ripple>
            )}
        />
    );
}

const fights = [
    {
        id: '1',
        departureTime: '7:30 AM',
        arrivalTime: '9:30 PM',
        origin: 'Larkrow',
        destination: 'Goa',
        duration: '2h 40m',
        punctuality: '100%',
        price: 'R$150,00',
        perPerson: true,
        bookmarked: true,
    },
    {
        id: '2',
        departureTime: '7:50 AM',
        arrivalTime: '9:50 PM',
        origin: 'Larkrow',
        destination: 'Goa',
        duration: '2h 40m',
        punctuality: '90%',
        price: 'R$220,00',
        perPerson: true,
        bookmarked: false,
    },
];