import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { SimplePressable } from '../../Components/Atoms/SimplePressable/SimplePressable';
import { Spacer } from '../../Components/Atoms/Spacer.tsx/Spacer';
import { textStyle } from '../../Components/Resource/textStyle';
import { FeaturedPokemon } from './FeaturedPokemon/FeaturedPokemon';
import { styles } from './styles';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 70,
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
        <FeaturedPokemon id={Math.floor(Math.random() * 1008)}></FeaturedPokemon>
        <Spacer.Column numberOfSpaces={3} />
        <View style={{ flexDirection: 'row' }}>
          <SimplePressable
            style={styles.button}
            onPress={() => navigation.navigate('GenerationsScreen', { screen: 'Settings' })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={textStyle.h2}>Pokédex</Text>
            </View>
          </SimplePressable>
          <Spacer.Flex />
          <SimplePressable style={styles.button} onPress={() => navigation.navigate('Credits')}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={textStyle.h2}>Credits</Text>
            </View>
          </SimplePressable>
        </View>
        <Spacer.Column numberOfSpaces={3} />
        <View style={{ flexDirection: 'row' }}>
          <SimplePressable style={styles.button}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={textStyle.h2}>Favourites</Text>
            </View>
          </SimplePressable>
          <Spacer.Flex />
        </View>
      </View>
      <Spacer.Flex />
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-end', right: -170 }}>
        <Pokeball />
      </View>
    </View>
  );
};

export default HomeScreen;
function typeOf(arg0: string): any {
  throw new Error('Function not implemented.');
}
