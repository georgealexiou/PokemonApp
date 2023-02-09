import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { SimpleContainer } from '../../Components/Atoms/SimpleContainer/SimpleContainer';
import { SimplePressable } from '../../Components/Atoms/SimplePressable/SimplePressable';
import { Spacer } from '../../Components/Atoms/Spacer.tsx/Spacer';
import { PokemonDetailsModal } from '../../Components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { textStyle } from '../../Components/Resource/textStyle';
import { FeaturedPokemon } from './FeaturedPokemon/FeaturedPokemon';
import { styles } from './styles';

const HomeScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState<number>();

  useMemo(() => {
    setId(Math.floor(Math.random() * 1008));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 120,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Spacer.Column numberOfSpaces={10} />
        <Text style={{ ...textStyle.h1, textAlign: 'left', width: '100%' }}>Welcome to your Pokedex!</Text>
        <Spacer.Column numberOfSpaces={5} />
        <FeaturedPokemon
          id={id as number}
          onPress={() => {
            setModalVisible(true);
          }}></FeaturedPokemon>
        <Spacer.Column numberOfSpaces={3} />
        <View style={{ flexDirection: 'row' }}>
          <SimplePressable
            style={styles.button}
            onPress={() => navigation.navigate('GenerationsScreen', { screen: 'Settings' })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={textStyle.h2}>Generations</Text>
            </View>
          </SimplePressable>
          <Spacer.Flex />
          <SimplePressable style={styles.button}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={textStyle.h2}>Favourites</Text>
            </View>
          </SimplePressable>
        </View>
        <View>
          <Spacer.Column numberOfSpaces={3} />
          <SimpleContainer>
            <View style={{ padding: 20 }}>
              <Text style={textStyle.h1}>What is a Pokédex?</Text>
              <Spacer.Column numberOfSpaces={2} />
              <Text style={textStyle.caption}>
                A Pokedex is a digital encyclopedia for the Pokemon universe. It provides a comprehensive database of
                information about all of the Pokemon species, including their attributes, abilities, stats, and moves.
              </Text>
            </View>
          </SimpleContainer>
        </View>
      </View>
      <Spacer.Flex />
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-end', right: -170 }}>
        <Pokeball />
      </View>
      <PokemonDetailsModal visible={modalVisible} setModalVisible={setModalVisible} pokemonId={id} />
    </View>
  );
};

export default HomeScreen;
function typeOf(arg0: string): any {
  throw new Error('Function not implemented.');
}
