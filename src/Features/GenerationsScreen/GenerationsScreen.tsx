import React from 'react';
import { View, FlatList } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { Screen } from '../../Components/Screen/Screen';
import { default as regions } from '../../assets/json/regions.json';
import { Generation } from '../../global/types';
import { styles } from './styles';
import { useGenerationsScreen } from './useGenerationsScreen';

type RenderItemProps = {
  item: Generation;
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: React.FC<GenerationScreenProps> = ({ navigation }) => {
  const { renderItem } = useGenerationsScreen({ navigation });
  return (
    <Screen name={'Generations'} safeAreaRequired={false}>
      <View style={styles.flatList}>
        <FlatList data={regions} renderItem={renderItem} />
      </View>
      <View style={styles.backgroundPokeball}>
        <Pokeball />
      </View>
    </Screen>
  );
};
