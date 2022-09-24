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
    backgroundColor: "white",
    borderRadius: 20,
    height: 120,
    // borderColor: "#c1c1c1",
    // borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: "0.2",
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 },
    width: "47%",
    marginTop: 20,
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    alignSelf:'center',
  }
});