import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    tinyLogo: {
      width: width * 0.5,
      height: 50,
      margin: 8,
    },
    buttonStyle: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      width: 300,
      borderRadius: 5,
      opacity: 0.7,
      borderColor: "black",
      borderWidth: 2,
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
    image: {
      flex: 1,
      justifyContent: "center",
    },
  });