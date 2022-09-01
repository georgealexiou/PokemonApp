import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";

/*
TODO: Stuff I want to show here:
 * Type
 * Abilities
 * Description
*/

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function PokemonPage({ route, navigation }: any) {
  var { name, url } = route.params;
  name = capitalizeFirstLetter(name);
  const [sprite, setSprite] = useState<string>();

  //fetch pokemon details from api
  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await fetch(url, {});
        const json = await response.json();
        setSprite(json.sprites.front_default);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getPokemonInfo();
  });

  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: sprite,
            }}
          />
          <Text>Sprite</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Table</Text>
        </View>
      </View>
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
  tinyLogo: {
    width: 200,
    height: 200,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
