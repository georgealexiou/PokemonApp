import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { RootStackParams } from '../../RootStack/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import Screen from '../../Components/Screen/Screen';
import { Pokeball } from '../../assets/svgs';
import { Generation } from '../../global/types';
import { PokemonList } from '../../Components/Organisms/PokemonList/PokemonList';
import { PokemonDetailsModal } from '../../Components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { Modal } from 'react-bootstrap';

type RenderItemProps = {
  generation: Generation;
};

export type PokedexProps = NativeStackScreenProps<RootStackParams, 'PokemonListScreen'>;

const PokemonListScreen = ({ route, navigation }: PokedexProps) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<Number>(1);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const list = route.params;
  const onPokemonSelect = (id: number) => {
    setSelectedPokemonId(id);
    setVisibleModal(true);
  };

  return (
    <Screen name={'Region'}>
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-start', right: -100 }}>
        <Pokeball />
      </View>
      <PokemonList pokemonIds={list} onPress={onPokemonSelect} />
      <PokemonDetailsModal visible={visibleModal} setModalVisible={setVisibleModal} pokemonId={selectedPokemonId} />
    </Screen>
  );
};

export default PokemonListScreen;
