import { FlatList } from "react-native";
import { Card } from "../../components";
import Ripple from "react-native-material-ripple";

export const HotelsView = () => {
    return (
        <FlatList
            data={hotels}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            renderItem={({ item, index }) => (
                <Ripple
                    onPress={() => {}}
                    rippleContainerBorderRadius={30}
                    style={[{ marginVertical: 10 }, index === 0 && { marginTop: 0 }]}
                >
                    <Card
                        variant="price"
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                </Ripple>
            )}
        />
    );
}

const hotels = [
    {
      id: '1',
      title: 'USA, New York',
      rating: 4.5,
      price: 'R$220,00',
      image: { uri: 'https://img.freepik.com/fotos-gratis/manhattan-skyline_649448-1559.jpg?t=st=1744419430~exp=1744423030~hmac=a5eee7e5051516b5b73baadb5f3babb4f19274354dc0c819afc38d308cd9620d&w=1800' },
    },
    {
      id: '2',
      title: 'Brazil, Rio de Janeiro',
      rating: 4.5,
      price: 'R$89,99',
      image: { uri: 'https://img.freepik.com/fotos-gratis/foto-aerea-do-rio-de-janeiro-cercado-pelo-mar-e-morros-sob-o-sol-no-brasil_181624-11362.jpg?t=st=1744419474~exp=1744423074~hmac=6f0cf2da070e45d4543e03a4ed6b6f185b417406b614408db5d359d86e295103&w=2000' },
    },
];