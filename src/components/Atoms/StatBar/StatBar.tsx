import { Dimensions, View, Text } from 'react-native';
import { textStyle } from '../../Resource/textStyle';
import { styles } from './styles';

type StatBarProps = {
  statName: string;
  stat: number;
  color?: string;
};

export const StatBar: React.FC<StatBarProps> = ({ statName, stat, color }) => {
  const percent = stat / 255;
  const width = 340;

  return (
    <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
      <View style={{ width: '42%' }}>
        <Text style={textStyle.h2}>{statName}</Text>
      </View>
      <View style={{ width: '11%' }}>
        <Text style={textStyle.caption}>{stat}</Text>
      </View>
      <View
        style={{
          borderRadius: 5,
          width: (width / 2) * percent,
          height: 10,
          backgroundColor: color,
          marginTop: 6,
        }}
      />
    </View>
  );
};
