import * as React from "react";
import { View, Text } from "react-native";

const image = {
  uri: "https://i.pinimg.com/originals/65/81/81/6581813147f0f62f50a492b2bedeabec.jpg",
};

const Settings = ({ navigation }: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        You can change stuff here
      </Text>
    </View>
  );
};

export default Settings;
