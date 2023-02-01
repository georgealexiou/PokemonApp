import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonListScreen from '../Features/PokemonListScreen/PokemonListScreen';
import PokemonPage from '../Features/PokemonPage/PokemonPage';
import GenerationsScreen from '../Features/GenerationsScreen/GenerationsScreen';
import HomeScreen from '../Features/HomeScreen/HomeScreen';
import CreditsScreen from '../Features/CreditsScreen/CreditsScreen';
import SettingsScreen from '../Features/SettingsScreen/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="GenerationsScreen" component={GenerationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PokemonListScreen" component={PokemonListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreditsScreen" component={CreditsScreen} />
        <Stack.Screen name="PokemonPage" component={PokemonPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'black' } }}>
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
