import { useState } from 'react';
import { Pokemon } from '../../../global/types';
import { fetchPokemon } from '../../../global/fetchPokemon';

type PokemonDetailsModalHookProps = {
  pokemonId: number;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const usePokemonDetailsModal = ({ pokemonId, setModalVisible }: PokemonDetailsModalHookProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const closeModal = () => setModalVisible(false);

  fetchPokemon(pokemonId, setPokemon);

  return { pokemon, closeModal };
};
