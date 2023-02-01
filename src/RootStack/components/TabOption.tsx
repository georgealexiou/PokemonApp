import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

type TabOptionProps = {
  focused?: boolean;
  isSearch?: boolean;
  icon: string;
};

export const TabOption: React.FC<TabOptionProps> = ({ focused, isSearch = false, icon }) => (
  <>
    {isSearch ? (
      <View style={styles.tabBarOptionSearch}>
        <Icon name={icon} color="white" size={25} />
      </View>
    ) : (
      <View style={focused ? styles.tabBarOptionSelected : styles.tabBarOptionNotSelected}>
        <Icon name={icon} color="white" size={25} />
      </View>
    )}
  </>
);
