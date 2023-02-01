import React from 'react';
import { Image, Text, View, FlatList, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import Screen from '../../Components/Screen/Screen';
import { regions } from '../../global/generations';
import { styles } from './styles';

type RenderItemProps = {
  item: {
    id: number;
    name: string;
    url: string;
  };
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: React.FC<GenerationScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: any) => {
    const onPress = (arg: RenderItemProps) => () => {
      navigation.navigate('PokemonListScreen', item);
    };

    return (
      <Pressable style={styles.generationContainer} onPress={onPress({ item })}>
        <Text>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <Screen name={'Generations'} safeAreaRequired={false}>
      <View style={{ width: '100%' }}>
        <FlatList data={regions} renderItem={renderItem} />
      </View>
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-start', right: -100 }}>
        <Pokeball />
      </View>
    </Screen>
  );
};

export default GenerationsScreen;
