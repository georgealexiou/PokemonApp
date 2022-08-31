import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native'

export default function PokemonPage({route, navigation} : any) {
    const {name, url} = route.params;
    const [sprite, setSprite] = useState<string>()
    useEffect(() => {
        const getPokemonInfo = async () => {
            try{
                const response = await fetch(url, {});
                const json = await response.json();
                setSprite(json.sprites.front_default)
            } catch(error){
                console.log('Error: ', error)
            };
        }
        getPokemonInfo();

    },);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{name}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: sprite,
                }}
            />
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
    tinyLogo: {
        width: 200,
        height: 200,
    },
});
