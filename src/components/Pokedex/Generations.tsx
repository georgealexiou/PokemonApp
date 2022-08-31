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
  },
  {
    id: 2,
    name: "Johto",
  },
  {
    id: 3,
    name: "Hoenn",
  },
  {
    id: 4,
    name: "Sinnoh",
  },
  {
    id: 5,
    name: "Unova",
  },
  {
    id: 6,
    name: "Kalos",
  },
  {
    id: 7,
    name: "Alola",
  },
  {
    id: 8,
    name: "Galar",
  },
  {
    id: 9,
    name: "Paldea",
  },
];

type RenderItemProps = {
  item: {
    id: number;
    name: string;
  };
};

export default function Generations({ navigation }: any) {
  const renderItem = ({ item }: any) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate("Pokedex", item);
    };

    return (
      <View>
        <Button title={item.name} onPress={onPress({ item })} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.separateRegions}>
        <FlatList data={regions} renderItem={renderItem} />
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
  separateRegions: {
    width,
    fontSize: 20,
  },
});
