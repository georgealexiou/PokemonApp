import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";

import { styles } from "./styles";

const image = {
  uri: "https://static.wikia.nocookie.net/pokemongo/images/4/47/Fall_2021_loading_screen.png/revision/latest/scale-to-width-down/1000?cb=20211024052333",
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1, padding: 16 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png",
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("GenerationsScreen", { screen: "Settings" })
              }
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Pokédex
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Credits")}
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Credits
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
