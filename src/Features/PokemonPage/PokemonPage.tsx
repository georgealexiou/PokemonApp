import { Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { Stats } from "../../Components/Molecules/Stats/Stats";
import { theme } from "../../../themes/darkMode";
import Screen from "../../Components/Screen/Screen";
import { Type } from "../../Components/Atoms/Type/Type";

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

  const BASE_URL =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails/";
  const EXTENSION = ".png";

  const { id, name } = route.params;

  const formatNumber = (id: number) => {
    if (id < 10) {
      return "00" + id;
    } else if (id < 100) {
      return "0" + id;
    }
    return "" + id;
  };
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

  console.log(item.base);

  return (
    <Screen
      name={item.name.english}
      backgroundColor={theme.typePalette.get(item.type[0])}
    >
      {/* Title and Types */}
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          width: "100%",
          height: "100%",
          top: 140,
        }}
      >
        <View style={{ top: -120 }}>
          <Image
            source={{
              uri: BASE_URL + formatNumber(item.id) + EXTENSION,
            }}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <View>
            <View style={{ alignSelf: "center" }}>
              {item.type.length < 2 ? (
                <View style={{ flexDirection: "row" }}>
                  <Type type={item.type[0]}></Type>
                </View>
              ) : (
                <View style={{ flexDirection: "row" }}>
                  <Type type={item.type[0]}></Type>
                  <Type type={item.type[1]}></Type>
                </View>
              )}
            </View>
            <Stats
              hp={item.base.HP}
              attack={item.base.Attack}
              defence={item.base.Defense}
              spAttack={item.base.SpecialAttack}
              spDefence={item.base.SpecialDefense}
              speed={item.base.Speed}
              color={theme.typePalette.get(item.type[0])}
            ></Stats>
          </View>
        </View>
      </View>
    </Screen>
  );
}
