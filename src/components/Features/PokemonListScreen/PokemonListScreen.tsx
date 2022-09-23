import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";

import { RootStackParams } from "../../../RootStack/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getRegionalDex } from "../../Resource/Resource";
import { styles } from "./styles";

type RenderItemProps = {
  item: {
    name: string;
    url: string;
  };
};

export type PokedexProps = NativeStackScreenProps<
  RootStackParams,
  "PokemonListScreen"
>;

const PokemonListScreen = ({ route, navigation }: PokedexProps) => {
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
      <SafeAreaView>
        <FlatList data={pokemonList} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
};

export default PokemonListScreen;
