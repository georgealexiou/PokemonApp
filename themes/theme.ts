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

export const typeColorsBackground = new Map([
  [PokemonTypes.NORMAL, '#B5B9C4'],
  [PokemonTypes.FIRE, '#FFA756'],
  [PokemonTypes.WATER, '#58ABF6'],
  [PokemonTypes.ELECTRIC, '#F2CB55'],
  [PokemonTypes.GRASS, '#8BBE8A'],
  [PokemonTypes.ICE, '#91D8DF'],
  [PokemonTypes.FIGHTING, '#EB4971'],
  [PokemonTypes.POISON, '#9F6E97'],
  [PokemonTypes.GROUND, '#F78551'],
  [PokemonTypes.FLYING, '#83A2E3'],
  [PokemonTypes.PSYCHIC, '#FF6568'],
  [PokemonTypes.BUG, '#8BD674'],
  [PokemonTypes.ROCK, '#D4C294'],
  [PokemonTypes.GHOST, '#8571BE'],
  [PokemonTypes.DRAGON, '#7383B9'],
  [PokemonTypes.DARK, '#6F6E78'],
  [PokemonTypes.STEEL, '#4C91B2'],
  [PokemonTypes.FAIRY, '#EBA8C3'],
]);

export const typeColors = new Map([
  [PokemonTypes.NORMAL, '#9DA0AA'],
  [PokemonTypes.FIRE, '#FD7D24'],
  [PokemonTypes.WATER, '#4A90DA'],
  [PokemonTypes.ELECTRIC, '#EED535'],
  [PokemonTypes.GRASS, '#62B957'],
  [PokemonTypes.ICE, '#61CEC0'],
  [PokemonTypes.FIGHTING, '#D04164'],
  [PokemonTypes.POISON, '#A552CC'],
  [PokemonTypes.GROUND, '#DD7748'],
  [PokemonTypes.FLYING, '#748FC9'],
  [PokemonTypes.PSYCHIC, '#EA5D60'],
  [PokemonTypes.BUG, '#8CB230'],
  [PokemonTypes.ROCK, '#BAAB82'],
  [PokemonTypes.GHOST, '#556AAE'],
  [PokemonTypes.DRAGON, '#0F6AC0'],
  [PokemonTypes.DARK, '#58575F'],
  [PokemonTypes.STEEL, '#417D9A'],
  [PokemonTypes.FAIRY, '#ED6EC7'],
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
  typePaletteBackground;
  dimensions: Dimensions;
  iconSize: typeof IconSizes;

  constructor() {
    this.palette = { ...COLORS };
    this.dimensions = { height: SCREEN_HEIGHT, width: SCREEN_WIDTH };
    this.iconSize = { ...IconSizes };
    this.typePaletteBackground = typeColorsBackground;
    this.typePalette = typeColors;
  }

  spacing(multiplier: number) {
    return BASE_UNIT * multiplier;
  }
}

export const theme = new Theme();
