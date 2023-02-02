import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { RootStackParams } from '../../RootStack/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getRegionalDex } from '../../Components/Resource/Resource';
import { styles } from './styles';
import Screen from '../../Components/Screen/Screen';
import { PokemonPreview } from '../../Components/Molecules/PokemonPreview/PokemonPreview';
import { Pokeball } from '../../assets/svgs';

type RenderItemProps = {
  item: {
    id: number;
    name: {};
    type: string[];
    base: {};
  };
};

export type PokedexProps = NativeStackScreenProps<RootStackParams, 'PokemonListScreen'>;

const PokemonListScreen = ({ route, navigation }: PokedexProps) => {
  const BASE_URL = 'https://www.serebii.net/pokedex-sv/icon/';
  const EXTENSION = '.png';

  const { id, name } = route.params;
  const pokemonList = getRegionalDex(id);
  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate('PokemonPage', item);
    };

    const formatNumber = (id: number) => {
      if (id < 10) {
        return '00' + id;
      } else if (id < 100) {
        return '0' + id;
      }
      return '' + id;
    };

    return <PokemonPreview item={item} />;
  };

  return (
    <Screen name={name}>
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-start', right: -100 }}>
        <Pokeball />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList data={pokemonList} renderItem={renderItem} numColumns={2} />
      </SafeAreaView>
    </Screen>
  );
};

export default PokemonListScreen;

function onPress(arg0: {
  item: RenderItemProps;
}): ((event: import('react-native').GestureResponderEvent) => void) | undefined {
  throw new Error('Function not implemented.');
}
