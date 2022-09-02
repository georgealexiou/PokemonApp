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
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    <View style={{ backgroundColor: typeColors.get(types[0]) }}>
      <View>
        <View style={{ alignItems: "start", margin: 10, flexDirection: "row" }}>
          <View>
            <Text style={styles.titleText}>{name}</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.typeBox}>
                <Text style={{ color: "white", margin: 3 }}>{types[0]}</Text>
              </View>
              <View style={styles.typeBox}>
                <Text style={{ color: "white", margin: 3 }}>{types[1]}</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: sprite,
              }}
            />
          </View>
        </View>
      </View>
      {/* Title and Types */}
      <View
        style={{
          top: 40,
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.pokemonImg}
              source={{
                uri: sprite,
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderColor: "#dadada",
              borderBottomWidth: 3,
              flexDirection: "row",
              top: -190,
              margin: 10,
              marginBottom: 1,
            }}
          >
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Pokedex Entry</Text>
                <Text style={{ fontWeight: "bold" }}>Ability </Text>
              </View>
              <View>
                <Text>{id}</Text>
                <Text>{ability}</Text>
              </View>
            </View>
          </View>

          {/* stats */}
          <View
            style={{
              borderColor: "#dadada",
              borderBottomWidth: 3,
              top: -200,
              margin: 10,
              marginBottom: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 6, fontSize: 20 }}>
              Stats
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>HP</Text>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                  Attack
                </Text>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                  Defence
                </Text>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                  Special Attack
                </Text>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                  Special Defence
                </Text>
                <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
                  Speed
                </Text>
              </View>
              <View style={{ marginBottom: 6, marginRight: 10 }}>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[0].base_stat}
                </Text>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[1].base_stat}
                </Text>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[2].base_stat}
                </Text>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[3].base_stat}
                </Text>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[4].base_stat}
                </Text>
                <Text style={{ marginTop: 5.5, color: "black" }}>
                  {stats[5].base_stat}
                </Text>
              </View>
              <View style={{ marginBottom: 6 }}>
                <StatBar stat={stats[0].base_stat}></StatBar>
                <StatBar stat={stats[1].base_stat}></StatBar>
                <StatBar stat={stats[2].base_stat}></StatBar>
                <StatBar stat={stats[3].base_stat}></StatBar>
                <StatBar stat={stats[4].base_stat}></StatBar>
                <StatBar stat={stats[5].base_stat}></StatBar>
              </View>
            </View>
          </View>
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
  var color = "#F34444";
  if (stat > 30) color = "#F87E10";
  if (stat > 60) color = "#FDDD57";
  if (stat > 100) color = "#A0E514";
  if (stat > 130) color = "#43CD5F";
  if (stat > 200) color = "#3CC2B8";

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          marginTop: 5,
          borderRadius: 5,
          width: (width / 2) * percent,
          height: 16,
          backgroundColor: color,
        }}
      ></View>
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
    width: 0,
    height: height / 6,
  },
  pokemonImg: {
    width: width / 1.5,
    height: height / 3,
    top: -160,
  },
  titleText: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  separateStats: {
    width,
    fontSize: 20,
  },
  typeBox: {
    backgroundColor: "#9b9b9b",
    opacity: 0.7,
    marginRight: 4,
    marginTop: 8,
    borderRadius: 7,
  },
});

// return (
//   <View style={{ flex: 1, backgroundColor: typeColors.get(types[0]) }}>
//     <View style={{ margin: 20 }}>
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.titleText}>{name}</Text>
//       </View>

//       <View style={{ flexDirection: "row" }}>
//         <View style={{ alignItems: "stretch" }}>
//           <Image
//             style={styles.tinyLogo}
//             source={{
//               uri: sprite,
//             }}
//           />
//         </View>
//         <View
//           style={{
//             marginTop: 20,
//             flexDirection: "row",
//           }}
//         >
//           <View style={{ marginRight: 10 }}>
//             <Text style={{ fontWeight: "bold" }}>Pokedex Entry</Text>
//             <Text style={{ fontWeight: "bold" }}>Type </Text>
//             <Text style={{ fontWeight: "bold" }}>Ability </Text>
//           </View>
//           <View>
//             <Text>{id}</Text>
//             <Text>{types[0] + " " + types[1]}</Text>
//             <Text>{ability}</Text>
//           </View>
//         </View>
//       </View>

//       {/* stats */}
//       <View
//         style={{
//           borderColor: "white",
//           borderTopWidth: 1,
//           borderBottomWidth: 1,
//         }}
//       >
//         <Text style={{ fontWeight: "bold", marginTop: 6, fontSize: 20 }}>
//           Stats
//         </Text>
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ marginRight: 10 }}>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>HP</Text>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>Attack</Text>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
//               Defence
//             </Text>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
//               Special Attack
//             </Text>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>
//               Special Defence
//             </Text>
//             <Text style={{ marginTop: 5.5, fontWeight: "bold" }}>Speed</Text>
//           </View>
//           <View style={{ marginBottom: 6 }}>
//             <StatBar stat={stats[0].base_stat}></StatBar>
//             <StatBar stat={stats[1].base_stat}></StatBar>
//             <StatBar stat={stats[2].base_stat}></StatBar>
//             <StatBar stat={stats[3].base_stat}></StatBar>
//             <StatBar stat={stats[4].base_stat}></StatBar>
//             <StatBar stat={stats[5].base_stat}></StatBar>
//           </View>
//         </View>
//       </View>
//     </View>
//   </View>
// );
