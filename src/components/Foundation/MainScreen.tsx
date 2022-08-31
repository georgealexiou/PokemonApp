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
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 16,
                color: "#ffffff",
              }}
            >
              Welcome to your Pokedex
            </Text>
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
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MainScreen;
