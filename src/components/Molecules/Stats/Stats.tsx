import { View, Text } from 'react-native';
import { styles } from './styles';
import { StatBar } from '../../Atoms/StatBar/StatBar';

type StatsProps = {
  color: string | undefined;
  hp: number;
  attack: number;
  defence: number;
  spAttack: number;
  spDefence: number;
  speed: number;
};

export const Stats: React.FC<StatsProps> = ({ color, hp, attack, defence, spAttack, spDefence, speed }) => {
  return (
    <View style={styles.border}>
      <Text style={styles.statsHeadingTextColor}>Stats</Text>
      <View style={{ marginBottom: 6 }}>
        <StatBar statName={'HP'} stat={hp} color={color}></StatBar>
        <StatBar statName={'Attack'} stat={attack} color={color}></StatBar>
        <StatBar statName={'Defence'} stat={defence} color={color}></StatBar>
        <StatBar statName={'Special Attack'} stat={spAttack} color={color}></StatBar>
        <StatBar statName={'Special Defence'} stat={spDefence} color={color}></StatBar>
        <StatBar statName={'Speed'} stat={speed} color={color}></StatBar>
      </View>
      {/* )} */}
    </View>
  );
};
