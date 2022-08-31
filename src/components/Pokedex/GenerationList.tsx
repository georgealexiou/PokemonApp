import React from 'react';
import { StyleSheet, Text, Modal, View, FlatList, SafeAreaView, Dimensions, Button, ListViewBase } from 'react-native';
import pokemonList from "../../../assets/kanto.json"
import { RootStackParams } from '../../navigation/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');

const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea']

export default function Regions({navigation}:any) {
    const renderRegion : React.FC < string > = (region) =>
    {
        const onPress = (arg: string) => () => {
            navigation.navigate('Pokedex', region)
        };

        return <View>
                    <Button
                        title={region}
                        onPress={onPress(region)}
                    />
                </View>
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.separatePokemon}>
                <FlatList
                    data = {regions}
                    renderRegion={renderRegion}
                />
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignregions: 'center',
        justifyContent: 'center',
    },
    separatePokemon: {
        width,
        fontSize: 20
    }
});
