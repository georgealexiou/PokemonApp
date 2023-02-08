import { useState } from 'react';
import { Button, Modal, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../../themes/theme';
import { fetchPokemon } from '../../../global/fetchPokemon';
import { Pokemon, PokemonTypes } from '../../../global/types';
import { capitalizeFirstLetter, formatNumberForList } from '../../../helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { Type } from '../../Atoms/Type/Type';
import { Stats } from '../../Molecules/Stats/Stats';
import { textStyle } from '../../Resource/textStyle';
import Screen from '../../Screen/Screen';

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
          backgroundColor: theme.typePaletteBackground.get(
            capitalizeFirstLetter(pokemon?.types[0].type.name) as PokemonTypes
          ),
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          width: '100%',
          height: '100%',
          top: 60,
        }}>
        <View style={{ position: 'absolute' }}>
          <Text
            style={{
              fontSize: 130,
              color: 'white',
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              opacity: 0.3,
              top: 100,
              left: 5,
              width: '100%',
            }}>{`#${formatNumberForList(pokemon?.id)}`}</Text>
        </View>
        <Pressable onPress={() => setModalVisible(false)} style={{ padding: 20 }}>
          <Icon name={'close'} color={'white'} size={20} />
        </Pressable>
        <Text style={{ ...textStyle.h1, color: 'white', alignSelf: 'center' }}>
          {capitalizeFirstLetter(pokemon?.name)}
        </Text>
        <View style={{ alignItems: 'center' }}>
          <PokemonImage style={{ width: 200, height: 200, resizeMode: 'contain' }} id={pokemonId} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            width: '100%',
            height: '100%',
            paddingTop: 20,
          }}>
          <View>
            <View style={{ alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Type type={capitalizeFirstLetter(pokemon?.types[0].type.name) as PokemonTypes}></Type>
                <Type type={capitalizeFirstLetter(pokemon?.types[1]?.type.name) as PokemonTypes | undefined}></Type>
              </View>
            </View>
            <View
              style={{
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 9,
                shadowOffset: { height: 5, width: 0 },
                marginTop: 20,
                margin: 10,
                borderRadius: 20,
                backgroundColor: 'white',
              }}>
              <Stats
                hp={pokemon?.stats[0].base_stat}
                attack={pokemon?.stats[1].base_stat}
                defence={pokemon?.stats[2].base_stat}
                spAttack={pokemon?.stats[2].base_stat}
                spDefence={pokemon?.stats[4].base_stat}
                speed={pokemon?.stats[5].base_stat}
                color={theme.typePalette.get(
                  capitalizeFirstLetter(pokemon?.types[0].type.name) as PokemonTypes
                )}></Stats>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
