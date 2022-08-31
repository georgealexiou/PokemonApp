import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonPage from "../components/Pokedex/PokemonPage";
import Generations from "../components/Pokedex/Generations";
import MainScreen from "../components/Foundation/MainScreen";
import Credits from "../components/Foundation/Credits";
import Settings from "../components/Foundation/Settings";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParams = {
  Pokedex: {
    id: number;
    name: string;
  };
  PokemonPage: {
    name: string;
    url: string;
  };
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Generations" component={Generations} />
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <Stack.Screen name="Credits" component={Credits} />
        <Stack.Screen name="PokemonPage" component={PokemonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
