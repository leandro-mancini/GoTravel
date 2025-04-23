import { FlatList } from "react-native";
import { Card } from "../../components";
import Ripple from "react-native-material-ripple";

export const PackagesView = () => {
    return (
        <FlatList
            data={packages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            renderItem={({ item, index }) => (
                <Ripple
                    onPress={() => {}}
                    rippleContainerBorderRadius={30}
                    style={[{ marginVertical: 10 }, index === 0 && { marginTop: 0 }]}
                >
                    <Card
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        variant="default"
                    />
                </Ripple>
            )}
        />
    );
}

const packages = [
    {
      id: '1',
      title: 'Italy, Manarola',
      rating: 4.5,
      image: { uri: 'https://img.freepik.com/fotos-gratis/bela-foto-de-edificios-de-cores-variadas-na-colina-perto-do-mar-em-manarola-italia_181624-18586.jpg?t=st=1744419217~exp=1744422817~hmac=f00a9263114bc0b1819820024b2ce8e072d9140ac7a177394a9d834678f056a6&w=2000' },
    },
    {
      id: '2',
      title: 'Germany, Berlin',
      rating: 4.3,
      image: { uri: 'https://img.freepik.com/fotos-gratis/edificio-com-colunas_1160-803.jpg?t=st=1744419262~exp=1744422862~hmac=3ec19adb520dea7f84ad593e5e817860516f4a774066cf3bc92b432b9e6a5174&w=2000' },
    },
    {
      id: '3',
      title: 'France, Paris',
      rating: 2.5,
      image: { uri: 'https://img.freepik.com/fotos-gratis/bela-foto-ampla-da-torre-eiffel-em-paris-rodeada-de-agua-com-navios-sob-o-ceu-colorido_181624-5118.jpg?t=st=1744419283~exp=1744422883~hmac=9d4bd95ef7b211e8d2a0bba6d2bec5b67ad541d3a2b4d8ff7779b4cc0eea4232&w=2000' },
    },
    {
      id: '4',
      title: 'Spain, Barcelona',
      rating: 4.8,
      image: { uri: 'https://img.freepik.com/fotos-gratis/vista-do-parque-guell-no-inverno-barcelona_1398-4411.jpg?t=st=1744419334~exp=1744422934~hmac=fb752590414964a2346100fb2cb4d3f54aa936b6ba09caf7f994142652fb2793&w=2000' },
    },
    {
      id: '5',
      title: 'Japan, Kyoto',
      rating: 3.8,
      image: { uri: 'https://img.freepik.com/fotos-gratis/castelo-de-matsumoto-em-osaka-japao_1150-11177.jpg?t=st=1744419367~exp=1744422967~hmac=d162e9c0dc5bec26fd2be8a117f0c2df690aab461e35e5cd3b514634776a1b37&w=2000' },
    },
    // {
    //   id: '6',
    //   title: 'USA, New York',
    //   rating: 4.5,
    //   image: { uri: 'https://img.freepik.com/fotos-gratis/manhattan-skyline_649448-1559.jpg?t=st=1744419430~exp=1744423030~hmac=a5eee7e5051516b5b73baadb5f3babb4f19274354dc0c819afc38d308cd9620d&w=1800' },
    // },
    // {
    //   id: '7',
    //   title: 'Brazil, Rio de Janeiro',
    //   rating: 4.5,
    //   image: { uri: 'https://img.freepik.com/fotos-gratis/foto-aerea-do-rio-de-janeiro-cercado-pelo-mar-e-morros-sob-o-sol-no-brasil_181624-11362.jpg?t=st=1744419474~exp=1744423074~hmac=6f0cf2da070e45d4543e03a4ed6b6f185b417406b614408db5d359d86e295103&w=2000' },
    // },
    // {
    //   id: '8',
    //   title: 'Greece, Santorini',
    //   rating: 4.5,
    //   image: { uri: 'https://img.freepik.com/fotos-gratis/foto-vertical-de-alto-angulo-dos-edificios-brancos-em-santorini-grecia_181624-31643.jpg?t=st=1744419551~exp=1744423151~hmac=06327caac479527946b97ad533bacbbec75b697bcecbb82dd1521180165f3010&w=900' },
    // },
    // {
    //   id: '9',
    //   title: 'Thailand, Bangkok',
    //   rating: 4.5,
    //   image: { uri: 'https://img.freepik.com/fotos-gratis/templo-de-wat-arun-no-crepusculo-em-bangkok-tailandia_335224-772.jpg?t=st=1744419575~exp=1744423175~hmac=8a0fae58933abd7f9a75b46b7ec8bf78f500be12ed5f7581391cffc4a5c4a342&w=2000' },
    // },
    // {
    //   id: '10',
    //   title: 'Portugal, Lisbon',
    //   rating: 4.5,
    //   image: { uri: 'https://img.freepik.com/fotos-gratis/vista-famosa-do-rio-porto-e-douro-portugal-europa_268835-3493.jpg?t=st=1744419602~exp=1744423202~hmac=c86c34371d11bad39f8560d0d5324d1e071ecbea7868abd38e1119e805e1c96f&w=2000' },
    // },
];