import * as React from 'react';
import { View } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { styles } from './styles';
import { SearchBar } from './components/SearchBar/SearchBar';

export const SearchScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <View style={styles.background}>
        <Pokeball />
      </View>
    </View>
  );
};
