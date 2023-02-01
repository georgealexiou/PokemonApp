import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 20,
  },
  smallText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 15,
  },
  typeBox: {
    marginRight: 4,
    borderRadius: 12,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  smallTypeBox: {
    marginRight: 4,
    borderRadius: 12,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
