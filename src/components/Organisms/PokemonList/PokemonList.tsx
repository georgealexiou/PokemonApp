import React, { useMemo } from 'react';
import { FlatList, Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Generation } from '../../../global/types';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { PokemonPreview } from '../../Molecules/PokemonPreview/PokemonPreview';

type PokemonListProps = {
  pokemonIds: number[];
  onPress?: Function;
};

type RenderItemProps = {
  item: number;
};

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonIds, onPress }) => {
  const renderItem = ({ item }) => {
    return (
      <>
        <PokemonPreview
          id={item}
          onPress={() => {
            onPress(item);
          }}
        />
      </>
    );
  };

  const renderItemSeparator = () => <Spacer.Column numberOfSpaces={1} />;

  const renderListFooter = () => <Spacer.Column numberOfSpaces={10} />;

  const keyExtractor = (_: any, index: any) => `post-${index}`;

  return (
    <FlatList
      data={pokemonIds}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderItemSeparator}
      ListFooterComponent={renderListFooter}
    />
  );
};
