import { Dimensions, View, Text } from "react-native";
import { styles } from "./styles";

type StatBarProps = {
  statName: string;
  stat: number;
  color?: string;
};

export const StatBar: React.FC<StatBarProps> = ({ statName, stat, color }) => {
  const percent = stat / 255;
  const width = 340;
  // var color = "#F34444";
  // if (stat > 30) color = "#F87E10";
  // if (stat > 60) color = "#FDDD57";
  // if (stat > 100) color = "#A0E514";
  // if (stat > 130) color = "#43CD5F";
  // if (stat > 200) color = "#3CC2B8";

  return (
    <View style={{ flexDirection: "row", width: "100%", marginTop: 4 }}>
      <View style={{ width: "42%" }}>
        <Text style={styles.statsTextLabel}>{statName}</Text>
      </View>
      <View style={{ width: "11%" }}>
        <Text style={styles.statsTextNumber}>{stat}</Text>
      </View>
      <View
        style={{
          borderRadius: 5,
          width: (width / 2) * percent,
          height: 10,
          backgroundColor: color,
          marginTop: 6,
        }}
      ></View>
    </View>
  );
};
