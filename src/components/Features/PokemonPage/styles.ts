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
    width: 0,
    height: height / 6,
  },
  pokemonImg: {
    width: width / 1.5,
    height: height / 3,
    top: -160,
  },
  titleText: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  separateStats: {
    width,
    fontSize: 20,
  },
  typeBox: {
    backgroundColor: "#9b9b9b",
    opacity: 0.7,
    marginRight: 4,
    marginTop: 8,
    borderRadius: 7,
  },
});