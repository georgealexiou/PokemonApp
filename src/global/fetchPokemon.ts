import axios from 'axios';
import { capitalizeFirstLetter } from './helper';
import { Pokemon } from './types';

export const fetchPokemon = async (
  id: number,
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>
) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(response.data);
  } catch (error) {
    console.error(error);
  }
};
