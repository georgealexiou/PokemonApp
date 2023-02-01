import { Dimensions as NativeDimensions } from 'react-native';
import { PokemonTypes } from '../src/global/types';

const SCREEN_WIDTH = NativeDimensions.get('window').width;
const SCREEN_HEIGHT = NativeDimensions.get('window').height;
const BASE_UNIT = 4;

type Dimensions = {
  height: number;
  width: number;
};

export enum IconSizes {
  SMALL = 24,
  MEDIUM = 32,
  LARGE = 64,
  XXL = 100,
}

export const typeColors = new Map([
  [PokemonTypes.NORMAL, '#D3CBC7'],
  [PokemonTypes.FIRE, '#FF4F58'],
  [PokemonTypes.WATER, '#86B4FF'],
  [PokemonTypes.ELECTRIC, '#FFF261'],
  [PokemonTypes.GRASS, '#49D393'],
  [PokemonTypes.ICE, '#B0EFEF'],
  [PokemonTypes.FIGHTING, '#A12718'],
  [PokemonTypes.POISON, '#9F4FA3'],
  [PokemonTypes.GROUND, '#DAB894'],
  [PokemonTypes.FLYING, '#97A2FF'],
  [PokemonTypes.PSYCHIC, '#FF8FAB'],
  [PokemonTypes.BUG, '#E0E293'],
  [PokemonTypes.ROCK, '#897D6B'],
  [PokemonTypes.GHOST, '#9B6DC6'],
  [PokemonTypes.DRAGON, '#6756BE'],
  [PokemonTypes.DARK, '#4D4D4D'],
  [PokemonTypes.STEEL, '#C1C7CC'],
  [PokemonTypes.FAIRY, '#F4C3D7'],
]);

export enum COLORS {
  dark = '#FFFFFF',
  cadet = '#586f7c',
  ice = '#B8DBD9',
  ghost = '#f4f4f9',
  carbon = '#444444',
  darkCarbon = '#E8E8E8',
  white = 'white',
  platinum = '#E5E4E2',
}

class Theme {
  palette: typeof COLORS;
  typePalette;
  dimensions: Dimensions;
  iconSize: typeof IconSizes;

  constructor() {
    this.palette = { ...COLORS };
    this.dimensions = { height: SCREEN_HEIGHT, width: SCREEN_WIDTH };
    this.iconSize = { ...IconSizes };
    this.typePalette = typeColors;
  }

  spacing(multiplier: number) {
    return BASE_UNIT * multiplier;
  }
}

export const theme = new Theme();
