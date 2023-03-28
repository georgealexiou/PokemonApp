import { theme } from "../../../themes/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  styledWhiteView: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
