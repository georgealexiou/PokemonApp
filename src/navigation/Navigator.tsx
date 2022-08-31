import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonPage from '../components/Pokedex/PokemonPage'

const Stack = createNativeStackNavigator()

export type RootStackParams = {
    Pokedex:undefined;
    PokemonPage: {
            name: string,
            url: string
    };
}

export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pokedex" component={Pokedex}/>
                <Stack.Screen name="PokemonPage" component={PokemonPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
