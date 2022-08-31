import React from 'react';
import { StyleSheet, Text, Modal, View, FlatList, SafeAreaView, Dimensions, Button } from 'react-native';
import pokemonList from "../../../assets/kanto.json"
import { RootStackParams } from '../../navigation/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');

type RenderItemProps = {
    item: {
        name: string,
        url: string
    }
}

export type PokedexProps = NativeStackScreenProps<RootStackParams, 'Pokedex'>

export default function Pokedex({navigation}: PokedexProps) {
    const renderItem : React.FC < RenderItemProps > = ({item}) =>
    {
        const onPress = (arg: RenderItemProps) => () => {
            navigation.navigate('PokemonPage', item)
        };

        return <View>
                    <Button
                        title={item.name}
                        onPress={onPress({item})}
                    />
                </View>
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.separatePokemon}>
                <FlatList
                    data={pokemonList}
                    renderItem={renderItem}
                />
            </SafeAreaView>

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
    separatePokemon: {
        width,
        fontSize: 20
    }
});
