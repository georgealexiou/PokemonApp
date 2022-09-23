import { Dimensions, View, Text } from "react-native";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

type StatBarProps = {
  statName: string;
  stat: number;
};

export const StatBar: React.FC<StatBarProps> = ({ statName, stat }) => {
  const percent = stat / 255;
  var color = "#F34444";
  if (stat > 30) color = "#F87E10";
  if (stat > 60) color = "#FDDD57";
  if (stat > 100) color = "#A0E514";
  if (stat > 130) color = "#43CD5F";
  if (stat > 200) color = "#3CC2B8";

  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <View style={{ width: "33%" }}>
        <Text style={styles.statsTextColor}>{statName}</Text>
      </View>
      <View style={{ width: "11%" }}>
        <Text style={styles.statsTextColor}>{stat}</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          borderRadius: 5,
          width: (width / 2) * percent,
          height: 16,
          backgroundColor: color,
        }}
      ></View>
    </View>
  );
};
