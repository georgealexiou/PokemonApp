import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView, Edge } from "react-native-safe-area-context";
import { theme } from "../../../themes/darkMode";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

export type ScreenAreaProps = {
  name: string;
  onBackButtonPress?: any;
  children?: React.ReactNode | React.ReactNode[];
  safeAreaRequired?: boolean;
  bottomSafeArea?: boolean;
  topSafeArea?: boolean;
  hasNoPadding?: boolean;
  backgroundColor?: string;
  whiteText?: boolean;
};

export const Screen: FunctionComponent<ScreenAreaProps> = ({
  name,
  onBackButtonPress,
  children,
  safeAreaRequired,
  bottomSafeArea,
  topSafeArea,
  backgroundColor = "white",
  whiteText,
}) => {
  const getSafeAreaViewEdges = (): Edge[] => {
    if (safeAreaRequired) {
      return ["top", "bottom", "left", "right"];
    } else if (bottomSafeArea) {
      return ["bottom", "left", "right"];
    } else if (topSafeArea) {
      return ["top", "left", "right"];
    }
    return ["left", "right"];
  };

  return (
    <SafeAreaView
      style={{ ...styles.styledWhiteView, backgroundColor }}
      testID="safeAreaView"
      edges={getSafeAreaViewEdges()}
    >
      {whiteText ? (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            alignSelf: "center",
            position: "absolute",
            top: 50,
          }}
        >
          {name}
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
            position: "absolute",
            top: 50,
          }}
        >
          {name}
        </Text>
      )}
      <View
        style={{
          width: "100%",
          height: 90,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{ width: "37%", justifyContent: "flex-end", top: -5 }}
          onPress={onBackButtonPress}
        >
          <Icon name="chevron-left" color="black" size={25} />
        </Pressable>
        <View
          style={{
            width: "60%",
            justifyContent: "flex-end",
          }}
        ></View>
      </View>
      <View style={{ ...styles.styledWhiteView }}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
