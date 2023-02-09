import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { default as allpokemon } from '../../assets/json/pokemon.json';
import { Pokeball } from '../../assets/svgs';
import { SimpleContainer } from '../../Components/Atoms/SimpleContainer/SimpleContainer';
import { Spacer } from '../../Components/Atoms/Spacer.tsx/Spacer';
import { PokemonDetailsModal } from '../../Components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { PokemonList } from '../../Components/Organisms/PokemonList/PokemonList';
import { textStyle } from '../../Components/Resource/textStyle';

export const SearchScreen: React.FC = ({ navigation }: any) => {
  interface PokemonSimple {
    name: string;
    id: number;
  }

  const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState<number[]>([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState<Number>(1);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const onPokemonSelect = (id: number) => {
      setSelectedPokemonId(id);
      setVisibleModal(true);
    };

    const handleSearch = (text: string) => {
      setSearchTerm(text);
      setFilteredPokemon(
        allpokemon
          .filter((pokemon) => pokemon.name.toLowerCase().includes(text.toLowerCase()))
          .map((pokemon) => pokemon.id)
      );
    };

    return (
      <View>
        <SimpleContainer
          style={{
            width: '100%',
            height: 50,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, padding: 10 }}>
            <Icon name={'search'} size={20} />
            <Spacer.Row numberOfSpaces={2} />
            <TextInput
              value={searchTerm}
              onChangeText={handleSearch}
              placeholder="Search for a Pokemon"
              style={{ flex: 1 }}
            />
            {searchTerm.length > 0 && (
              <Pressable
                onPress={() => {
                  setSearchTerm('');
                }}>
                <Icon name={'close'} size={20} />
              </Pressable>
            )}
          </View>
        </SimpleContainer>
        <Spacer.Column numberOfSpaces={2} />

        {searchTerm.length > 1 && <PokemonList pokemonIds={filteredPokemon} onPress={onPokemonSelect} />}
        {searchTerm.length > 1 && filteredPokemon.length === 0 && (
          <Text style={{ alignSelf: 'center', justifyContent: 'center', ...textStyle.caption }}>No pokemon found</Text>
        )}
        <PokemonDetailsModal visible={visibleModal} setModalVisible={setVisibleModal} pokemonId={selectedPokemonId} />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 70,
        backgroundColor: 'white',
      }}>
      <SearchBar />
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-end', right: -170 }}>
        <Pokeball />
      </View>
    </View>
  );
};
