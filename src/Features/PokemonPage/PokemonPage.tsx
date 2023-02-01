import { Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Stats } from '../../Components/Molecules/Stats/Stats';
import { theme } from '../../../themes/theme';
import Screen from '../../Components/Screen/Screen';
import { Type } from '../../Components/Atoms/Type/Type';

const { width, height } = Dimensions.get('window');

type RenderItemProps = {
  base_stat: number;
  item: {
    effort: number;
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  };
};

export default function PokemonPage({ route, navigation }: any) {
  var item = route.params;

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

  if (item.type === undefined || item.base === undefined) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Screen name={item.name.english} backgroundColor={theme.typePalette.get(item.type[0])} whiteText={true}>
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
                  <Type type={item.type[0]}></Type>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  <Type type={item.type[0]}></Type>
                  <Type type={item.type[1]}></Type>
                </View>
              )}
            </View>
            <View
              style={{
                shadowColor: 'black',
                shadowOpacity: '0.2',
                shadowRadius: 9,
                shadowOffset: { height: 5 },
                marginTop: 20,
                margin: 10,
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Stats
                hp={item.base.HP}
                attack={item.base.Attack}
                defence={item.base.Defense}
                spAttack={item.base.SpecialAttack}
                spDefence={item.base.SpecialDefense}
                speed={item.base.Speed}
                color={theme.typePalette.get(item.type[0])}></Stats>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
