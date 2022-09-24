import { Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { Stats } from "../../Components/Molecules/Stats/Stats";
import { theme } from "../../../themes/darkMode";

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
      } catch (error) {}
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
    <View style={{ backgroundColor: theme.typePalette.get(types[0]) }}>
      <View>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.titleText}>{name}</Text>
            {types[1] === "" ? (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.typeBox}>
                  <Text style={styles.text}>{types[0]}</Text>
                </View>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.typeBox}>
                  <Text style={styles.text}>{types[0]}</Text>
                </View>
                <View style={styles.typeBox}>
                  <Text style={styles.text}>{types[1]}</Text>
                </View>
              </View>
            )}
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
          backgroundColor: theme.palette.darkCarbon,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
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

          <View style={styles.borderTop}>
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
          </View>
          <Stats
            hp={stats[0].base_stat}
            attack={stats[1].base_stat}
            defence={stats[2].base_stat}
            spAttack={stats[3].base_stat}
            spDefence={stats[4].base_stat}
            speed={stats[5].base_stat}
          ></Stats>
        </View>
      </View>
    </View>
  );
}
