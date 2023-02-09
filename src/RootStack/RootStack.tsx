import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonListScreen from '../Features/PokemonListScreen/PokemonListScreen';
import GenerationsScreen from '../Features/GenerationsScreen/GenerationsScreen';
import HomeScreen from '../Features/HomeScreen/HomeScreen';
import { SearchScreen } from '../Features/SearchScreen/SearchScreen';
import SettingsScreen from '../Features/SettingsScreen/SettingsScreen';
import { styles } from './styles';
import { TabOption } from './components/TabOption';
import { PokemonPage } from '../Features/PokemonPage/PokemonPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParams = {
  PokemonListScreen: {
    list: number[];
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
        <Stack.Screen name="PokemonPage" component={PokemonPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.shadow,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabOption focused={focused} icon="home" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <TabOption icon="search" isSearch />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => <TabOption focused={focused} icon="gear" />,
        }}
      />
    </Tab.Navigator>
  );
}
