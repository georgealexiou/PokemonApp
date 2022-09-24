import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../themes/darkMode";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    alignContent:'center',

  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  pressableStyle: {
    width: "47%",
    height: 80,
    borderRadius: 12,
    backgroundColor: theme.palette.carbon,
    margin: 7,
    alignItems: "center",
  },
  text: {
    color: theme.palette.ghost,
    fontSize: 20,
  }
});