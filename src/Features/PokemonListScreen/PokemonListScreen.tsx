import React from "react";
import { FlatList, SafeAreaView, Pressable, Text, View } from "react-native";

import { RootStackParams } from "../../RootStack/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getRegionalDex } from "../../Components/Resource/Resource";
import { styles } from "./styles";
import { theme } from "../../../themes/darkMode";
import Screen from "../../Components/Screen/Screen";

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
      <Pressable style={styles.pressableStyle} onPress={onPress({ item })}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.palette.ghost,
            width: "100%",
            borderRadius: 12,
          }}
        ></View>
        <View>
          <Text style={styles.text}>{item.name}</Text>
        </View>
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
  item: { name: string; url: string };
}):
  | ((event: import("react-native").GestureResponderEvent) => void)
  | undefined {
  throw new Error("Function not implemented.");
}
