export enum PokemonTypes {
  NORMAL = 'Normal',
  FIRE = 'Fire',
  WATER = 'Water',
  ELECTRIC = 'Electric',
  GRASS = 'Grass',
  ICE = 'Ice',
  FIGHTING = 'Fighting',
  POISON = 'Poison',
  GROUND = 'Ground',
  FLYING = 'Flying',
  PSYCHIC = 'Psychic',
  BUG = 'Bug',
  ROCK = 'Rock',
  GHOST = 'Ghost',
  DRAGON = 'Dragon',
  DARK = 'Dark',
  STEEL = 'Steel',
  FAIRY = 'Fairy',
}

export const stringToType = (typeString?: string) => {
  if (!typeString) {
    return undefined;
  }
  return Object.values(PokemonTypes).find((t) => t.toLowerCase() === typeString.toLowerCase());
};

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  baseExperience: number;
  types: Type[];
  moves: { move: Move[] };
  stats: Stats[];
  abilities: { ability: Ability; isHidden: boolean }[];
};

export type Move = {
  name: string;
  url: string;
};

type Stats = {
  base_stat: number;
  stat: { name: string };
};

export type Ability = {
  name: string;
  url: string;
};

export type Type = {
  slot: number;
  type: { name: string; url: string };
};

export type Generation = {
  id: number;
  region: string;
  games?: string[];
  firstPokemonId: number;
  lastPokemonId: number;
};
