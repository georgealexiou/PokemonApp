import { View, Text, Pressable } from 'react-native';
import { theme } from '../../../../themes/theme';
import { capitalizeFirstLetter, formatNumber, formatNumberForList } from '../../../helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { SimplePressable } from '../../Atoms/SimplePressable/SimplePressable';
import { textStyle } from '../../Resource/textStyle';
import React from 'react';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { PokemonTypes } from '../../../global/types';
import { Type } from '../../Atoms/Type/Type';
import { styles } from './styles';

type PokemonPreviewProps = {
  item: any;
};

export const PokemonPreview: React.FC<PokemonPreviewProps> = ({ item }) => {
  return (
    <Pressable
      style={{
        ...styles.pressableStyle,
        shadowColor: theme.typePaletteBackground.get(item.type[0]),
        backgroundColor: theme.typePaletteBackground.get(item.type[0]),
        padding: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 55,
            color: 'white',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            opacity: 0.3,
            top: 60,
            left: 5,
            width: 160,
          }}>
          {`#${formatNumberForList(item.id)}`}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...textStyle.h1, color: theme.palette.white }}>{item.name.english}</Text>
        <Spacer.Column numberOfSpaces={1} />
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '60%' }}>
          <PokemonImage style={{ height: 80, width: 80, resizeMode: 'contain' }} id={item.id} />
        </View>
      </View>
    </Pressable>
  );
};
