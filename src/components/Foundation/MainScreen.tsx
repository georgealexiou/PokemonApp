// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/originals/65/81/81/6581813147f0f62f50a492b2bedeabec.jpg",
};

const MainScreen = ({ navigation }: any) => {
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
                navigation.navigate("Generations", { screen: "Settings" })
              }
            >
              <Text>Pokedex</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Credits")}
            >
              <Text>Credits</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  tinyLogo: {
    width: 350,
    height: 60,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MainScreen;
