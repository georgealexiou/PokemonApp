import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Pokeball } from '../../assets/svgs';
import { SimplePressable } from '../../Components/Atoms/SimplePressable/SimplePressable';
import { Spacer } from '../../Components/Atoms/Spacer.tsx/Spacer';
import { PokemonDetailsModal } from '../../Components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { PokemonList } from '../../Components/Organisms/PokemonList/PokemonList';
import { textStyle } from '../../Components/Resource/textStyle';
import { FeaturedPokemon } from './FeaturedPokemon/FeaturedPokemon';
import { styles } from './styles';

const HomeScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState<number>(1);
  const [featuredId, setFeaturedId] = useState<number>(0);

  useMemo(() => {
    setFeaturedId(Math.floor(Math.random() * 1008));
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop: 60,
      }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ ...textStyle.h1, textAlign: 'left', width: '100%' }}>Welcome to your Pokedex!</Text>
        <Spacer.Column numberOfSpaces={4} />
        <FeaturedPokemon
          id={featuredId as number}
          onPress={() => {
            setId(featuredId);
            setModalVisible(true);
          }}></FeaturedPokemon>
        <Spacer.Column numberOfSpaces={5} />

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
          <Spacer.Column numberOfSpaces={6} />
          <Text style={textStyle.h1}>Favourites</Text>
          <Spacer.Column numberOfSpaces={1} />
        </View>
      </View>
      <PokemonList
        horizontal
        pokemonIds={[814, 920, 1000]}
        onPress={(id: number) => {
          setModalVisible(true);
          setId(id);
        }}
      />
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
