import { Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Stats } from '../../Components/Molecules/Stats/Stats';
import { theme } from '../../../themes/theme';
import Screen from '../../Components/Screen/Screen';
import { Type } from '../../Components/Atoms/Type/Type';
import { Pokemon, PokemonTypes } from '../../global/types';
import { capitalizeFirstLetter } from '../../helper';

const { width, height } = Dimensions.get('window');

export const PokemonPage: React.FC = ({ route, navigation }: any) => {
  var item: Pokemon = route.params;

  const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  const EXTENSION = '.png';

  const { id, name } = route.params;

  const formatNumber = (id: number) => {
    if (id < 10) {
      return '00' + id;
    } else if (id < 100) {
      return '0' + id;
    }
    return '' + id;
  };

  if (item === undefined) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Screen
      name={capitalizeFirstLetter(item.name) as string}
      backgroundColor={theme.typePaletteBackground.get(capitalizeFirstLetter(item.types[0].type.name) as PokemonTypes)}
      whiteText={true}>
      {/* Title and Types */}
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          width: '100%',
          height: '100%',
          top: 140,
        }}>
        <View style={{ top: -120 }}>
          <Image
            source={{
              uri: BASE_URL + formatNumber(item.id) + EXTENSION,
            }}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              marginBottom: 20,
            }}
          />
          <View>
            <View style={{ alignSelf: 'center' }}>
              {item.type.length < 2 ? (
                <View style={{ flexDirection: 'row' }}>
                  <Type type={capitalizeFirstLetter(item.types[0].type.name) as PokemonTypes}></Type>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  <Type type={capitalizeFirstLetter(item.types[0].type.name) as PokemonTypes}></Type>
                  <Type type={capitalizeFirstLetter(item.types[1].type.name) as PokemonTypes}></Type>
                </View>
              )}
            </View>
            <View
              style={{
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 9,
                shadowOffset: { height: 5 },
                marginTop: 20,
                margin: 10,
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Stats
                hp={item.stats[0].base_stat}
                attack={item.stats[1].base_stat}
                defence={item.stats[2].base_stat}
                spAttack={item.stats[2].base_stat}
                spDefence={item.stats[4].base_stat}
                speed={item.stats[5].base_stat}
                color={theme.typePalette.get(capitalizeFirstLetter(item.types[0].type.name) as PokemonTypes)}></Stats>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};
