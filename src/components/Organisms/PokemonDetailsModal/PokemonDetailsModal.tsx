import React from 'react';
import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../../themes/theme';
import { Pokeball } from '../../../assets/svgs';
import { fetchPokemon } from '../../../global/fetchPokemon';
import { Pokemon, PokemonTypes, stringToType } from '../../../global/types';
import { capitalizeFirstLetter, formatNumberForList } from '../../../global/helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { Type } from '../../Atoms/Type/Type';
import { Stats } from '../../Molecules/Stats/Stats';
import { textStyle } from '../../Resource/textStyle';

type PokemonDetailsModalProps = {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonId: number;
};

export const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ visible, pokemonId, setModalVisible }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  fetchPokemon(pokemonId, setPokemon);
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View
        style={{
          backgroundColor: theme.getBackgroundTypeColor(pokemon?.types[0].type.name),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: '100%',
          height: '100%',
          top: 55,
        }}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            justifyContent: 'center',
            height: 300,
          }}>
          <Text
            style={{
              fontSize: 130,
              color: 'white',
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              opacity: 0.3,
              left: 5,
            }}>{`#${formatNumberForList(pokemon?.id)}`}</Text>
        </View>
        <Spacer.Column numberOfSpaces={3} />
        <Text style={{ ...textStyle.title, color: 'white', alignSelf: 'center' }}>
          {capitalizeFirstLetter(pokemon?.name)}
        </Text>
        <Pressable onPress={() => setModalVisible(false)} style={{ padding: 20, position: 'absolute' }}>
          <Icon name={'close'} color={'white'} size={20} />
        </Pressable>

        <View style={{ alignItems: 'center' }}>
          <PokemonImage style={{ width: 200, height: 200, resizeMode: 'contain' }} id={pokemonId} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: '100%',
            height: '100%',
            paddingTop: 20,
          }}>
          <View>
            <View style={{ position: 'absolute', height: '100%', justifyContent: 'flex-end', top: 250, right: 200 }}>
              <Pokeball />
            </View>
            <View style={{ alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Type type={stringToType(pokemon?.types[0]?.type.name)} />
                <Type type={stringToType(pokemon?.types[1]?.type.name)} />
              </View>
            </View>
            <Spacer.Column numberOfSpaces={2} />
            <Stats
              hp={pokemon?.stats[0].base_stat}
              attack={pokemon?.stats[1].base_stat}
              defence={pokemon?.stats[2].base_stat}
              spAttack={pokemon?.stats[2].base_stat}
              spDefence={pokemon?.stats[4].base_stat}
              speed={pokemon?.stats[5].base_stat}
              color={theme.typePalette.get(capitalizeFirstLetter(pokemon?.types[0].type.name) as PokemonTypes)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
