import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Type } from '../../../Components/Atoms/Type/Type';
import { textStyle } from '../../../Components/Resource/textStyle';
import axios from 'axios';
import { capitalizeFirstLetter } from '../../../global/helper';
import { Spacer } from '../../../Components/Atoms/Spacer.tsx/Spacer';
import { theme } from '../../../../themes/theme';
import { Pokemon, PokemonTypes } from '../../../global/types';
import { SimpleContainer } from '../../../Components/Atoms/SimpleContainer/SimpleContainer';
import { styles } from './styles';
import { fetchPokemon } from '../../../global/fetchPokemon';

type FeaturedPokemonProps = {
  id: number;
};

export const FeaturedPokemon: React.FC<FeaturedPokemonProps> = ({ id }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  const EXTENSION = '.png';

  useEffect(() => {
    fetchPokemon(id, setPokemon);
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
    <SimpleContainer style={styles.simpleContainer}>
      <View style={styles.innerContainer}>
        {pokemon && (
          <>
            <View>
              <Text style={textStyle.caption}>Featured Pokemon</Text>
              <Spacer.Column numberOfSpaces={1} />
              <Text style={textStyle.h1}>{`#${formatNumber(id)} ${capitalizeFirstLetter(pokemon.name)}`}</Text>
              <Spacer.Flex />
              <View style={{ flexDirection: 'row' }}>
                <Type
                  type={capitalizeFirstLetter(pokemon.types[0].type.name) as PokemonTypes | undefined}
                  small={true}
                />
                <Type
                  type={capitalizeFirstLetter(pokemon.types[1]?.type.name) as PokemonTypes | undefined}
                  small={true}
                />
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: BASE_URL + formatNumber(id) + EXTENSION,
                }}
                style={styles.imageStyle}
              />
            </View>
          </>
        )}
      </View>
    </SimpleContainer>
  );
};
