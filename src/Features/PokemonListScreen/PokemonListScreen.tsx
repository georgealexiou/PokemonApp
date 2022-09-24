import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";

import { RootStackParams } from "../../RootStack/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getRegionalDex } from "../../Components/Resource/Resource";
import { styles } from "./styles";
import Screen from "../../Components/Screen/Screen";
import { theme } from "../../../themes/darkMode";

type RenderItemProps = {
  item: {
    id: number;
    name: {};
    type: string[];
    base: {};
  };
};

export type PokedexProps = NativeStackScreenProps<
  RootStackParams,
  "PokemonListScreen"
>;

const PokemonListScreen = ({ route, navigation }: PokedexProps) => {
  const BASE_URL =
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/";
  const EXTENSION = "MS.png";

  const { id, name } = route.params;
  const pokemonList = getRegionalDex(id);
  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate("PokemonPage", item);
    };

    const formatNumber = (id: number) => {
      if (id < 10) {
        return "00" + id;
      } else if (id < 100) {
        return "0" + id;
      }
      return "" + id;
    };

    return (
      <Pressable
        style={{
          ...styles.pressableStyle,
          backgroundColor: theme.typePalette.get(item.type[0]),
        }}
        onPress={onPress({ item })}
      >
        <View
          style={{
            top: -10,
            backgroundColor: "#343434",
            borderRadius: 9,
            alignSelf: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"#" + formatNumber(item.id)}
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={{
              uri: BASE_URL + formatNumber(item.id) + EXTENSION,
            }}
            style={{ width: 80, height: 80, alignSelf: "center", top: -10 }}
          />
        </View>
        <Text style={{ ...styles.text, top: -15 }}>{item.name.english}</Text>
      </Pressable>
    );
  };

  return (
    <Screen name={name}>
      <SafeAreaView style={styles.container}>
        <FlatList data={pokemonList} renderItem={renderItem} numColumns={2} />
      </SafeAreaView>
    </Screen>
  );
};

export default PokemonListScreen;

function onPress(arg0: {
  item: RenderItemProps;
}):
  | ((event: import("react-native").GestureResponderEvent) => void)
  | undefined {
  throw new Error("Function not implemented.");
}
