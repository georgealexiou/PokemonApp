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
    ["Normal", "#D3CBC7"],
    ["Fire", "#FF4F58"],
    ["Water", "#86B4FF"],
    ["Electric", "#FFF261"],
    ["Grass", "#49D393"],
    ["Ice", "#B0EFEF"],
    ["Fighting", "#A12718"],
    ["Poison", "#9F4FA3"],
    ["Ground", "#DAB894"],
    ["Flying", "#97A2FF"],
    ["Psychic", "#FF8FAB"],
    ["Bug", "#E0E293"],
    ["Rock", "#897D6B"],
    ["Ghost", "#9B6DC6"],
    ["Dragon", "#6756BE"],
    ["Dark", "#4D4D4D"],
    ["Steel", "#C1C7CC"],
    ["Fairy", "#F4C3D7"],
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
