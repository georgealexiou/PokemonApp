import React, { useMemo } from 'react';
import { FlatList, Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Generation } from '../../../global/types';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { PokemonPreview } from '../../Molecules/PokemonPreview/PokemonPreview';

type PokemonListProps = {
  pokemonIds: number[];
  onPress?: Function;
  horizontal?: boolean;
};

type RenderItemProps = {
  item: number;
};

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonIds, onPress, horizontal = false }) => {
  const renderItem = ({ item }: { item: number }) => {
    return (
      <>
        <PokemonPreview
          id={item}
          onPress={() => {
            if (onPress) {
              onPress(item);
            }
          }}
        />
      </>
    );
  };

  const renderItemSeparator = () => <Spacer.Column numberOfSpaces={1} />;

  const renderListFooter = () => <Spacer.Column numberOfSpaces={10} />;
  const renderListHeader = () => <Spacer.Column numberOfSpaces={10} />;

  const keyExtractor = (_: any, index: any) => `post-${index}`;

  return (
    <>
      {horizontal ? (
        <FlatList
          data={pokemonIds}
          renderItem={renderItem}
          numColumns={1}
          horizontal
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListFooterComponent={renderListFooter}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={renderListHeader}
        />
      ) : (
        <FlatList
          data={pokemonIds}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListFooterComponent={renderListFooter}
        />
      )}
    </>
  );
};
