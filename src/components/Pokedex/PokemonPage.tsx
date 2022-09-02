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
import { typeColors } from "../Resource/Resource";
import { setStatusBarBackgroundColor } from "expo-status-bar";

/*
TODO: Stuff I want to show here:
 * Type
 * Abilities
 * Description
*/

const { width, height } = Dimensions.get("window");

type RenderItemProps = {
  item: {
    effort: number;
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  };
};

const capitalizeFirstLetter = (str: string) => {
  if (str != undefined)
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  else return "";
};

export default function PokemonPage({ route, navigation }: any) {
  var { name, url } = route.params;
  name = capitalizeFirstLetter(name);
  const [sprite, setSprite] = useState<string>();
  const [types, setType] = useState<string[]>();
  const [ability, setAbility] = useState<string>();
  const [id, setId] = useState<string>();
  const [stats, setStats] = useState<RenderItemProps[]>();

  //fetch pokemon details from api
  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await fetch(url, {});
        const json = await response.json();

        setSprite(json.sprites.front_default);
        const types = [];
        types[0] = capitalizeFirstLetter(json.types[0].type.name);
        types[1] = capitalizeFirstLetter(json.types[1]?.type.name);
        setType(types);
        setAbility(capitalizeFirstLetter(json.abilities[0].ability.name));
        setId(json.game_indices[0].game_index);
        setStats(json.stats);
        console.log(stats);
      } catch (error) {
        //console.log("Error: ", error);
      }
    };
    getPokemonInfo();
  }, []);

  //* Function to render Stats
  const renderStats: React.FC<RenderItemProps> = ({ item }) => {
    return (
      <View>
        <Text>ff</Text>
      </View>
    );
  };

  if (types === undefined || stats === undefined) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: typeColors.get(types[0]) }}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titleText}>{name}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "stretch" }}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: sprite,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Pokedex Entry</Text>
              <Text style={{ fontWeight: "bold" }}>Type </Text>
              <Text style={{ fontWeight: "bold" }}>Ability </Text>
            </View>
            <View>
              <Text>{id}</Text>
              <Text>{ability}</Text>
              <Text>{types}</Text>
            </View>
          </View>
        </View>

        {/* stats */}
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Stats</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>HP</Text>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>Attack</Text>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                Defence
              </Text>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                Special Attack
              </Text>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                Special Defence
              </Text>
              <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>Speed</Text>
            </View>
            <View>
              <StatBar stat={stats[0].base_stat}></StatBar>
              <StatBar stat={stats[1].base_stat}></StatBar>
              <StatBar stat={stats[2].base_stat}></StatBar>
              <StatBar stat={stats[3].base_stat}></StatBar>
              <StatBar stat={stats[4].base_stat}></StatBar>
              <StatBar stat={stats[5].base_stat}></StatBar>
            </View>
          </View>
          {/* <SafeAreaView style={styles.separateStats}>
            <FlatList>
              <FlatList data={stats} renderItem={renderStats} />
            </FlatList>
          </SafeAreaView> */}
        </View>
      </View>
    </View>
  );
}

type StatBarProps = {
  stat: number;
};

const StatBar: React.FC<StatBarProps> = ({ stat }) => {
  const percent = stat / 255;
  return (
    <View
      style={{
        marginTop: 5,
        width: (width / 2) * percent,
        height: 16,
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>{stat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: width / 2.5,
    height: height / 5,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separateStats: {
    width,
    fontSize: 20,
  },
});
