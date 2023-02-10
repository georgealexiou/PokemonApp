import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { Screen } from '../../Components/Screen/Screen';
import { default as regions } from '../../assets/json/regions.json';
import { Generation } from '../../global/types';
import { SimplePressable } from '../../Components/Atoms/SimplePressable/SimplePressable';
import { textStyle } from '../../Components/Resource/textStyle';
import { PokemonImage } from '../../Components/Atoms/PokemonImage/PokemonImage';

type RenderItemProps = {
  item: Generation;
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: React.FC<GenerationScreenProps> = ({ navigation }) => {
  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const onPress = (arg: RenderItemProps) => () => {
      const generateList = () => {
        const list = [];
        for (let i = item.firstPokemonId; i <= item.lastPokemonId; i++) {
          list.push(i);
        }
        return list;
      };
      navigation.navigate('PokemonListScreen', generateList());
    };

    const starterPokemon = [];
    if (item.id === 5) {
      starterPokemon.push(item.firstPokemonId + 1);
      starterPokemon.push(item.firstPokemonId + 4);
      starterPokemon.push(item.firstPokemonId + 7);
    } else {
      starterPokemon.push(item.firstPokemonId);
      starterPokemon.push(item.firstPokemonId + 3);
      starterPokemon.push(item.firstPokemonId + 6);
    }

    return (
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <SimplePressable
          onPress={onPress({ item })}
          style={{
            width: '100%',
            height: 100,
          }}>
          <View style={{ padding: 10, flexDirection: 'row', flex: 1 }}>
            <View>
              <Text style={textStyle.caption}>{`Generation ${item.id}`}</Text>
              <Text style={textStyle.h1}>{item.region}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <PokemonImage
                id={starterPokemon[0]}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                }}
              />
              <PokemonImage
                id={starterPokemon[1]}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                }}
              />
              <PokemonImage
                id={starterPokemon[2]}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </SimplePressable>
      </View>
    );
  };

  return (
    <Screen name={'Generations'} safeAreaRequired={false}>
      <View style={{ width: '100%', height: '100%' }}>
        <FlatList data={regions} renderItem={renderItem} />
      </View>
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-start', right: -100 }}>
        <Pokeball />
      </View>
    </Screen>
  );
};
