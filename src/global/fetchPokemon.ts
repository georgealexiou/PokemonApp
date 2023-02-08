import axios from 'axios';
import { useMemo } from 'react';
import { Pokemon } from './types';

export const fetchPokemon = async (
  id: number,
  setPokemon?: React.Dispatch<React.SetStateAction<Pokemon | undefined>>
) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!setPokemon) return response.data;
    else setPokemon(response.data);
  } catch (error) {
    console.error(error);
  }
};
