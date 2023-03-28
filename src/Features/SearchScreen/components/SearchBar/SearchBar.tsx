import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SimpleContainer } from '../../../../components/Atoms/SimpleContainer/SimpleContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { Spacer } from '../../../../components/Atoms/Spacer.tsx/Spacer';
import { PokemonList } from '../../../../components/Organisms/PokemonList/PokemonList';
import { PokemonDetailsModal } from '../../../../components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { useSearchBar } from './useSearchBar';

export const SearchBar: React.FC = () => {
  const {
    searchTerm,
    filteredPokemon,
    selectedPokemonId,
    onPokemonSelect,
    visibleModal,
    setVisibleModal,
    handleSearch,
    onXIconPress,
  } = useSearchBar();
  return (
    <View>
      <SimpleContainer style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon name={'search'} size={20} />
          <Spacer.Row numberOfSpaces={2} />
          <TextInput
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder="Search for a Pokemon"
            style={styles.textField}
          />
          {searchTerm.length > 0 && (
            <Pressable onPress={onXIconPress}>
              <Icon name={'close'} size={20} />
            </Pressable>
          )}
        </View>
      </SimpleContainer>
      <Spacer.Column numberOfSpaces={2} />

      {searchTerm.length > 1 && <PokemonList pokemonIds={filteredPokemon} onPress={onPokemonSelect} />}
      {searchTerm.length > 1 && filteredPokemon.length === 0 && <Text style={styles.text}>No pokemon found</Text>}
      <PokemonDetailsModal visible={visibleModal} setModalVisible={setVisibleModal} pokemonId={selectedPokemonId} />
    </View>
  );
};
