import { Dimensions, View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../../themes/darkMode";

type TypeProps = {
  type: string;
};

export const Type: React.FC<TypeProps> = ({ type }) => {
  return (
    <View
      style={{
        ...styles.typeBox,
        backgroundColor: theme.typePalette.get(type),
      }}
    >
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};
