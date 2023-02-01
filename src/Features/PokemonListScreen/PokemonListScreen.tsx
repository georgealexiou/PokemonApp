import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Pressable, Text, View, Image } from 'react-native';

import { RootStackParams } from '../../RootStack/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getRegionalDex } from '../../Components/Resource/Resource';
import { styles } from './styles';
import Screen from '../../Components/Screen/Screen';
import { theme } from '../../../themes/theme';
import { Spacer } from '../../Components/Atoms/Spacer.tsx/Spacer';

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

    return (
      <Pressable
        style={{
          ...styles.pressableStyle,
          backgroundColor: theme.typePalette.get(item.type[0]),
        }}
        onPress={onPress({ item })}>
        <View
          style={{
            top: -10,
            backgroundColor: '#343434',
            borderRadius: 9,
            alignSelf: 'center',
            width: '50%',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {'#' + formatNumber(item.id)}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Spacer.Column numberOfSpaces={1} />
          <Image
            source={{
              uri: BASE_URL + formatNumber(item.id) + EXTENSION,
            }}
            style={{ width: 60, height: 60, alignSelf: 'center', top: -10, resizeMode: 'contain' }}
          />
        </View>
        <Spacer.Flex />
        <Text style={{ ...styles.text, top: -15 }}>{item.name.english}</Text>
      </Pressable>
    );
  };

  return (
    <Screen name={name}>
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
