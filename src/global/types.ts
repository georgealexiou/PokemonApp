export enum PokemonTypes {
  NORMAL = 'Normal',
  FIRE = 'Fire',
  WATER = 'Water',
  GRASS = 'Grass',
  ELECTRIC = 'Electric',
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
