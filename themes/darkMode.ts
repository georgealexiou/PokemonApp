import { Dimensions as NativeDimensions } from "react-native";

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
    ["Normal", "#AAAA99"],
    ["Fire", "#F64423"],
    ["Water", "#3399FF"],
    ["Electric", "#FCCC33"],
    ["Grass", "#77CC55"],
    ["Ice", "#66CCFF"],
    ["Fighting", "#BB5545"],
    ["Poison", "#AA5599"],
    ["Ground", "#DDBB55"],
    ["Flying", "#8899FF"],
    ["Psychic", "#ED5293"],
    ["Bug", "#AABB23"],
    ["Rock", "#BBAA66"],
    ["Ghost", "#6666BB"],
    ["Dragon", "#7766EE"],
    ["Dark", "#775545"],
    ["Steel", "#AAAABB"],
    ["Fairy", "#EE99EE"],
  ]);

export enum COLORS {
    dark = "#FFFFFF",
    cadet = "#586f7c",
    ice = "#B8DBD9",
    ghost = "#f4f4f9",
    carbon = "#444444",
    darkCarbon = "#E8E8E8",
    white = "white",
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
