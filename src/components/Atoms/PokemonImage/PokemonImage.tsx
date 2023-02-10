import React from 'react';
import { Image, ImageResizeMode } from 'react-native';
import { formatNumber } from '../../../global/helper';

type PokemonImageProps = {
  id: number;
  style: { width: string | number; height: string | number; resizeMode: ImageResizeMode };
};

export const PokemonImage: React.FC<PokemonImageProps> = ({ id, style }) => {
  const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  const EXTENSION = '.png';

  return (
    <Image
      source={{
        uri: BASE_URL + formatNumber(id) + EXTENSION,
      }}
      style={style}
    />
  );
};
