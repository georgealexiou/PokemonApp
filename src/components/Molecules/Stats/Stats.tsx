import { View, Text } from 'react-native';
import { styles } from './styles';
import { StatBar } from '../../Atoms/StatBar/StatBar';
import { SimpleContainer } from '../../Atoms/SimpleContainer/SimpleContainer';
import { textStyle } from '../../Resource/textStyle';

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
    <SimpleContainer
      style={{
        width: '100%',
      }}>
      <View style={{ padding: 10 }}>
        <Text style={textStyle.h1}>Stats</Text>
        <View style={{ marginBottom: 6 }}>
          <StatBar statName={'HP'} stat={hp} color={color}></StatBar>
          <StatBar statName={'Attack'} stat={attack} color={color}></StatBar>
          <StatBar statName={'Defence'} stat={defence} color={color}></StatBar>
          <StatBar statName={'Special Attack'} stat={spAttack} color={color}></StatBar>
          <StatBar statName={'Special Defence'} stat={spDefence} color={color}></StatBar>
          <StatBar statName={'Speed'} stat={speed} color={color}></StatBar>
        </View>
      </View>
    </SimpleContainer>
  );
};
