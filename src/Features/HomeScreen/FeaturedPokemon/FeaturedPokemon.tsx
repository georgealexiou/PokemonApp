import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Type } from '../../../Components/Atoms/Type/Type';
import { textStyle } from '../../../Components/Resource/textStyle';
import { capitalizeFirstLetter, formatNumberForList } from '../../../helper';
import { Spacer } from '../../../Components/Atoms/Spacer.tsx/Spacer';
import { Pokemon, PokemonTypes } from '../../../global/types';
import { styles } from './styles';
import { fetchPokemon } from '../../../global/fetchPokemon';
import { PokemonImage } from '../../../Components/Atoms/PokemonImage/PokemonImage';
import { SimplePressable } from '../../../Components/Atoms/SimplePressable/SimplePressable';

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
    <SimplePressable style={styles.simpleContainer} onPress={onPress}>
      <View style={styles.innerContainer}>
        {pokemon && (
          <>
            <View>
              <Text style={textStyle.caption}>Featured Pokemon</Text>
              <Spacer.Column numberOfSpaces={1} />
              <Text style={textStyle.h1}>{`#${formatNumberForList(id)} ${capitalizeFirstLetter(pokemon.name)}`}</Text>
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
              <PokemonImage style={styles.imageStyle} id={id} />
            </View>
          </>
        )}
      </View>
    </SimplePressable>
  );
};
