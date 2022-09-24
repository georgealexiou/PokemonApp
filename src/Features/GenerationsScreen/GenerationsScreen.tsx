import React from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import { theme } from "../../../themes/darkMode";
import Screen from "../../Components/Screen/Screen";
import { styles } from "./styles";

const image = {
  uri: "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Season_of_Alola_loading_screen.png/revision/latest?cb=20220628154345",
};

const regions = [
  {
    id: 1,
    name: "Kanto",
    url: "https://imgur.com/K4038w2.png",
  },
  {
    id: 2,
    name: "Johto",
    url: "https://imgur.com/sn2A271.png",
  },
  {
    id: 3,
    name: "Hoenn",
    url: "https://imgur.com/MF6hag6.png",
  },
  {
    id: 4,
    name: "Sinnoh",
    url: "https://imgur.com/bPHEKht.png",
  },
  {
    id: 5,
    name: "Unova",
    url: "https://imgur.com/CH9YUbl.png",
  },
  {
    id: 6,
    name: "Kalos",
    url: "https://imgur.com/HXR8Hr3.png",
  },
  {
    id: 7,
    name: "Alola",
    url: "https://imgur.com/9DiuTnm.png",
  },
  // {
  //   id: 8,
  //   name: "Galar",
  //   url: "https://imgur.com/QZUmPvH.png",
  // },
  // {
  //   id: 9,
  //   name: "Paldea",
  //   url: "https://i0.wp.com/gaming-age.com/wp-content/uploads/2022/02/pokemon_violet_scarlet_logo.png?resize=645%2C163&ssl=1",
  // },
];

type RenderItemProps = {
  item: {
    id: number;
    name: string;
    url: string;
  };
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: React.FC<GenerationScreenProps> = ({
  navigation,
}) => {
  const renderItem = ({ item }: any) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate("PokemonListScreen", item);
    };

    return (
      <Pressable
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: 140,
          backgroundColor: "#f0f0f0",
          borderColor: "#343434",
          borderWidth: 2,
          shadowColor: "black",
          shadowOpacity: "0.1",
          shadowRadius: 8,
          shadowOffset: { width: 5, height: 5 },
          width: "90%",
          marginTop: 30,
          margin: 15,
        }}
        onPress={onPress({ item })}
      >
        <View
          style={{
            top: -20,
            backgroundColor: "#343434",
            borderRadius: 13,
            alignSelf: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 33,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
        </View>
        <Image
          source={{
            uri: item.url,
          }}
          style={{ width: 320, height: 100, alignSelf: "center", top: -10 }}
        />
      </Pressable>
    );
  };

  return (
    <Screen name={"Generations"} safeAreaRequired={false}>
      <ImageBackground
        source={{
          uri: "https://imgur.com/iROBToX.png",
        }}
        resizeMode="cover"
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <SafeAreaView>
              <FlatList data={regions} renderItem={renderItem} />
            </SafeAreaView>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  );
};

export default GenerationsScreen;
