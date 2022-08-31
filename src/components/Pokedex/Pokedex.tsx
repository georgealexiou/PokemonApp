import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";

import { RootStackParams } from "../../Navigation/Navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getRegionalDex } from "../Resource/Resource";

const { width, height } = Dimensions.get("window");
const list = [];
type RenderItemProps = {
  item: {
    name: string;
    url: string;
  };
};

export type PokedexProps = NativeStackScreenProps<RootStackParams, "Pokedex">;

export default function Pokedex({ route, navigation }: PokedexProps) {
  const { id, name } = route.params;
  const pokemonList = getRegionalDex(id);
  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate("PokemonPage", item);
    };

    return (
      <View>
        <Button title={item.name} onPress={onPress({ item })} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.separatePokemon}>
        <FlatList data={pokemonList} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  separatePokemon: {
    width,
    fontSize: 20,
  },
});
