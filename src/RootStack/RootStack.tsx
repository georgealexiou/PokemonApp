import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokemonListScreen from "../Components/Features/PokemonListScreen/PokemonListScreen";
import PokemonPage from "../Components/Features/PokemonPage/PokemonPage";
import GenerationsScreen from "../Components/Features/GenerationsScreen/GenerationsScreen";
import HomeScreen from "../Components/Features/HomeScreen/HomeScreen";
import CreditsScreen from "../Components/Features/CreditsScreen/CreditsScreen";
import SettingsScreen from "../Components/Features/SettingsScreen/SettingsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParams = {
  PokemonListScreen: {
    id: number;
    name: string;
  };
  PokemonPage: {
    name: string;
    url: string;
  };
};

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GenerationsScreen" component={GenerationsScreen} />
        <Stack.Screen name="PokemonListScreen" component={PokemonListScreen} />
        <Stack.Screen name="CreditsScreen" component={CreditsScreen} />
        <Stack.Screen name="PokemonPage" component={PokemonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: "black" } }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="gray" size={25} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => <Icon name="gear" color="gray" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}
