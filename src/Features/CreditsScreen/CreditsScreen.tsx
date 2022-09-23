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

const CreditsScreen = ({ navigation }: any) => {
  return (
    <View>
      {/* <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      > */}
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        George Alexiou
      </Text>
      {/* </ImageBackground> */}
    </View>
  );
};

export default CreditsScreen;
