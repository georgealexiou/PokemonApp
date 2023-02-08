import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../../../themes/theme';
import { PokemonTypes } from '../../../global/types';
import React from 'react';
import { BugUnselected } from '../../../assets/svgs';

type TypeProps = {
  type?: PokemonTypes;
  small?: boolean;
};

export const Type: React.FC<TypeProps> = ({ type, small = false }) => {
  if (!type) return <></>;

  return (
    <>
      {small ? (
        <View
          style={{
            ...styles.smallTypeBox,
            backgroundColor: theme.typePalette.get(type),
          }}>
          <Text style={styles.smallText}>{type}</Text>
        </View>
      ) : (
        <View
          style={{
            ...styles.typeBox,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: theme.typePalette.get(type),
          }}>
          <BugUnselected />
          <Text style={styles.text}>{type}</Text>
        </View>
      )}
    </>
  );
};
