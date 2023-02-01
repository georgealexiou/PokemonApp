import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    height: height / 6,
  },
  pokemonImg: {
    width: width / 1.5,
    height: height / 3,
    top: -160,
  },
  titleText: {
    fontSize: 35,
    color: theme.palette.ghost,
    fontWeight: "bold",
  },
  separateStats: {
    width,
    fontSize: 20,
  },
  typeBox: {
    marginRight: 4,
    width: 100,
    height: 30,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textColor: {
    color: "theme.palette.ghost",
  },
  boldTextColor: {
    fontWeight: "bold",
    color: theme.palette.ghost,
  },
  borderTop: {
    borderColor: theme.palette.carbon,
    borderBottomWidth: 3,
    top: -200,
    margin: 10,
    marginBottom: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
