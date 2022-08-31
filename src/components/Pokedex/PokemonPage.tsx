import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Button } from 'react-native';

export default function PokemonPage({route, navigation} : any) {
    const {name, url} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
