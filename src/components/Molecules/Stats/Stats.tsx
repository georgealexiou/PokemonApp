import { View, Text } from "react-native";
import { styles } from "./styles";
import { StatBar } from "../../Atoms/StatBar/StatBar";

type StatsProps = {
  hp: number;
  attack: number;
  defence: number;
  spAttack: number;
  spDefence: number;
  speed: number;
};

export const Stats: React.FC<StatsProps> = ({
  hp,
  attack,
  defence,
  spAttack,
  spDefence,
  speed,
}) => {
  return (
    <View style={styles.border}>
      <Text style={styles.statsHeadingTextColor}>Stats</Text>
      <View style={{ marginBottom: 6 }}>
        <StatBar statName={"HP"} stat={hp}></StatBar>
        <StatBar statName={"Attack"} stat={attack}></StatBar>
        <StatBar statName={"Defence"} stat={defence}></StatBar>
        <StatBar statName={"Special Attack"} stat={spAttack}></StatBar>
        <StatBar statName={"Special Defence"} stat={spDefence}></StatBar>
        <StatBar statName={"Speed"} stat={speed}></StatBar>
      </View>
    </View>
  );
};
