import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  Modal,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Button,
  ListViewBase,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const regions = [
  {
    id: 1,
    name: "Kanto",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NQWVe_H0TaB9bh6ENOM66tn8p5kiSBvoqGKNkdJZa1KgTk6MZUJExUxAxk3eoZiU_Q&usqp=CAU",
  },
  {
    id: 2,
    name: "Johto",
    url: "https://www.seekpng.com/png/full/353-3536819_heart-gold-soul-silver-logos-pokemon-heart-gold.png",
  },
  {
    id: 3,
    name: "Hoenn",
    url: "https://static.wikia.nocookie.net/nintendo/images/e/e7/Pokemon-Omega-Ruby-and-Alpha-Sapphire-logos-640x208.png/revision/latest?cb=20170626120736&path-prefix=en",
  },
  {
    id: 4,
    name: "Sinnoh",
    url: "https://static.wikia.nocookie.net/logopedia/images/5/56/PokemonBDSP.png/revision/latest?cb=20210226211101",
  },
  {
    id: 5,
    name: "Unova",
    url: "https://pokejungle.net/wp-content/uploads/2012/10/black-2-white-2-logo.png",
  },
  {
    id: 6,
    name: "Kalos",
    url: "https://assets.vg247.com/current//2013/08/20130812_pokemon_x__y.jpg",
  },
  {
    id: 7,
    name: "Alola",
    url: "https://www.slashgear.com/wp-content/uploads/2017/06/ultra-sun-ultra-moon-980x420.jpg",
  },
  {
    id: 8,
    name: "Galar",
    url: "https://preview.redd.it/h9pnmm3wlaj21.jpg?width=1280&format=pjpg&auto=webp&s=d109c8fca199198c043b2971de86292c47e4698d",
  },
  {
    id: 9,
    name: "Paldea",
    url: "https://i0.wp.com/gaming-age.com/wp-content/uploads/2022/02/pokemon_violet_scarlet_logo.png?resize=645%2C163&ssl=1",
  },
];

type RenderItemProps = {
  item: {
    id: number;
    name: string;
    url: string;
  };
};

export default function Generations({ navigation }: any) {
  const renderItem = ({ item }: any) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate("Pokedex", item);
    };

    return (
      <View>
        {/* <Button title={item.name} onPress={onPress({ item })} /> */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onPress({ item })}
        >
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.tinyLogo}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={regions}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Text> </Text>}
        />
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
  tinyLogo: {
    width: width * 0.5,
    height: 50,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
  buttonTextStyle: {
    color: "#2c363a",
    fontWeight: "bold",
    marginBottom: 4,
    marginLeft: 10,
  },
});
