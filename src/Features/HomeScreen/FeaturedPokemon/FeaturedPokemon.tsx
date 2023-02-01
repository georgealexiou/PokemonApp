import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Type } from '../../../Components/Atoms/Type/Type';
import { textStyle } from '../../../Components/Resource/textStyle';
import axios from 'axios';
import { capitalizeFirstLetter } from '../../../helper';
import { Spacer } from '../../../Components/Atoms/Spacer.tsx/Spacer';
import { theme } from '../../../../themes/theme';

type FeaturedPokemonProps = {
  id: number;
};

export const FeaturedPokemon: React.FC<FeaturedPokemonProps> = ({ id }) => {
  const [name, setName] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  const EXTENSION = '.png';

  useEffect(() => {
    async function getPokemon(id: number) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setName(response.data.name);
        setTypes([response.data.types[0].type.name, response.data.types[1]?.type.name]);
      } catch (error) {
        console.error(error);
      }
    }

    getPokemon(id);
  });

  const formatNumber = (id: number) => {
    if (id < 10) {
      return '00' + id;
    } else if (id < 100) {
      return '0' + id;
    }
    return '' + id;
  };

  return (
    <View
      style={{
        backgroundColor: theme.palette.white,
        width: '100%',
        height: 200,
        borderRadius: 12,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowOffset: { width: -5, height: 5 },
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingTop: 15,
          paddingLeft: 15,
          paddingBottom: 15,
          flexDirection: 'row',
          paddingRight: 5,
        }}>
        <View>
          <Text style={textStyle.caption}>Featured Pokemon</Text>
          <Spacer.Column numberOfSpaces={1} />
          <Text style={textStyle.h1}>{`#${formatNumber(id)} ${capitalizeFirstLetter(name)}`}</Text>
          <Spacer.Flex />
          <View style={{ flexDirection: 'row' }}>
            <Type type={types[0]} small={true} />
            <Type type={types[1]} small={true} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
          }}>
          <Image
            source={{
              uri: BASE_URL + formatNumber(id) + EXTENSION,
            }}
            style={{
              width: 170,
              height: 170,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};
