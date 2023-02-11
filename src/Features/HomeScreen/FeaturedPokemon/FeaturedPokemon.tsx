import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Type } from '../../../Components/Atoms/Type/Type';
import { textStyle } from '../../../../themes/textStyle';
import { capitalizeFirstLetter, formatNumberForList } from '../../../global/helper';
import { Spacer } from '../../../Components/Atoms/Spacer.tsx/Spacer';
import { Pokemon, stringToType } from '../../../global/types';
import { styles } from './styles';
import { fetchPokemon } from '../../../global/fetchPokemon';
import { PokemonImage } from '../../../Components/Atoms/PokemonImage/PokemonImage';
import { SimplePressable } from '../../../Components/Atoms/SimplePressable/SimplePressable';
import { theme } from '../../../../themes/theme';

type FeaturedPokemonProps = {
  id: number;
  onPress?: () => void;
};

export const FeaturedPokemon: React.FC<FeaturedPokemonProps> = ({ id, onPress }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon(id, setPokemon);
  });

  return (
    <SimplePressable
      style={styles.simpleContainer}
      onPress={onPress}
      backgroundColor={theme.getBackgroundTypeColor(pokemon?.types[0].type.name)}>
      <View style={styles.innerContainer}>
        {pokemon && (
          <>
            <View>
              <Text style={{ ...textStyle.caption, color: 'white' }}>Featured Pokemon</Text>
              <Spacer.Column numberOfSpaces={1} />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...textStyle.h1, opacity: 0.3 }}>{`#${formatNumberForList(id)} `}</Text>

                <Text style={{ ...textStyle.h1, color: 'white' }}>{`${capitalizeFirstLetter(pokemon.name)}`}</Text>
              </View>
              <Spacer.Column numberOfSpaces={1} />
              <View style={{ flexDirection: 'row' }}>
                <Type type={stringToType(pokemon?.types[0].type.name)} small={true} />
                <Type type={stringToType(pokemon?.types[1]?.type.name)} small={true} />
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: 350,
                }}>
                <Text
                  style={{
                    fontSize: 120,
                    color: 'white',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    opacity: 0.3,
                  }}>{`#${formatNumberForList(pokemon.id)}`}</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <PokemonImage style={styles.imageStyle} id={id} />
            </View>
          </>
        )}
      </View>
    </SimplePressable>
  );
};
