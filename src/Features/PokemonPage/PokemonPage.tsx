import { Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { Stats } from "../../Components/Molecules/Stats/Stats";
import { theme } from "../../../themes/darkMode";
import Screen from "../../Components/Screen/Screen";

const { width, height } = Dimensions.get("window");

type RenderItemProps = {
  base_stat: number;
  item: {
    effort: number;
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  };
};

export default function PokemonPage({ route, navigation }: any) {
  var item = route.params;
  // const [sprite, setSprite] = useState<string>();
  // const [types, setType] = useState<string[]>();
  // const [ability, setAbility] = useState<string>();
  // const [id, setId] = useState<string>();
  // const [stats, setStats] = useState<RenderItemProps[]>();

  // //fetch item details from api
  // useEffect(() => {
  //   const getPokemonInfo = async () => {
  //     try {
  //       const response = await fetch(url, {});
  //       const json = await response.json();

  //       setSprite(json.sprites.front_default);
  //       const types = [];
  //       types[0] = json.types[0].type.name;
  //       types[1] = json.types[1]?.type.name;
  //       setType(types);
  //       setAbility(json.abilities[0].ability.name);
  //       setId(json.game_indices[0].game_index);
  //       setStats(json.stats);
  //     } catch (error) {}
  //   };
  //   getPokemonInfo();
  // }, []);

  //* Function to render Stats
  const renderStats: React.FC<RenderItemProps> = ({ item }) => {
    return (
      <View>
        <Text>ff</Text>
      </View>
    );
  };

  if (item.type === undefined || item.base === undefined) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading</Text>
      </View>
    );
  }
  console.log(item.base.Attack);

  return (
    <Screen
      name={item.name.english}
      backgroundColor={theme.typePalette.get(item.type[0])}
    >
      <View style={styles.topContainer}>
        {item.type.length < 2 ? (
          <View style={{ flexDirection: "row" }}>
            <View style={styles.typeBox}>
              <Text style={styles.text}>{item.type[0]}</Text>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <View style={styles.typeBox}>
              <Text style={styles.text}>{item.type[0]}</Text>
            </View>
            <View style={styles.typeBox}>
              <Text style={styles.text}>{item.type[1]}</Text>
            </View>
          </View>
        )}
      </View>
      {/* Title and Types */}
      <View
        style={{
          top: 40,
          backgroundColor: theme.palette.darkCarbon,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View>
          {/* <View style={{ alignItems: "center" }}>
              <Image
                style={styles.pokemonImg}
                source={{
                  uri: sprite,
                }}
              />
            </View> */}

          {/* <View style={styles.borderTop}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <View style={{ marginRight: 10 }}>
                  <Text style={styles.boldTextColor}>Pokedex Entry</Text>
                  <Text style={styles.boldTextColor}>Ability </Text>
                </View>
                <View>
                  <Text style={styles.textColor}>{id}</Text>
                  <Text style={styles.textColor}>{ability}</Text>
                </View>
              </View>
            </View> */}
          {/* <Stats
              hp={item.base[0].base_stat}
              attack={item.base[1].base_stat}
              defence={item.base[2].base_stat}
              spAttack={item.base[3].base_stat}
              spDefence={item.base[4].base_stat}
              speed={item.base[5].base_stat}
            ></Stats> */}
        </View>
      </View>
    </Screen>
  );
}
