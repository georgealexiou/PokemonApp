import { View, Text, Pressable } from 'react-native';
import { theme } from '../../../../themes/theme';
import { capitalizeFirstLetter, formatNumberForList } from '../../../helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { textStyle } from '../../Resource/textStyle';
import React, { useEffect, useMemo, useState } from 'react';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { Pokemon, PokemonTypes } from '../../../global/types';
import { styles } from './styles';
import axios from 'axios';

type PokemonPreviewProps = {
  id: number;
  onPress?: () => void;
};

export const PokemonPreview: React.FC<PokemonPreviewProps> = ({ id, onPress }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    if (pokemon) return;
    fetchPokemon;
  });

  const fetchPokemon = useMemo(async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!setPokemon) return response.data;
      else setPokemon(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      {pokemon && (
        <Pressable
          style={{
            ...styles.pressableStyle,
            shadowColor: theme.typePaletteBackground.get(
              capitalizeFirstLetter(pokemon.types[0].type.name) as PokemonTypes
            ),
            backgroundColor: theme.typePaletteBackground.get(
              capitalizeFirstLetter(pokemon.types[0].type.name) as PokemonTypes
            ),
          }}
          onPress={onPress}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberStyle}>{`#${formatNumberForList(pokemon.id)}`}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ ...textStyle.h1, color: theme.palette.white }}>{capitalizeFirstLetter(pokemon.name)}</Text>
            <Spacer.Column numberOfSpaces={1} />
            <View style={styles.imageContainer}>
              <PokemonImage style={styles.imageStyle} id={pokemon.id} />
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
};
