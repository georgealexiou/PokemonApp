import { Dimensions, View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../../themes/theme";
import { capitalizeFirstLetter } from "../../../helper";

type TypeProps = {
  type: string;
  small?: boolean;
};

export const Type: React.FC<TypeProps> = ({ type, small = false }) => {
  if (!type) return <></>;
  type = capitalizeFirstLetter(type);

  return (
    <>
      {small ? (
        <View
          style={{
            ...styles.smallTypeBox,
            backgroundColor: theme.typePalette.get(type),
          }}
        >
          <Text style={styles.smallText}>{type}</Text>
        </View>
      ) : (
        <View
          style={{
            ...styles.typeBox,
            backgroundColor: theme.typePalette.get(type),
          }}
        >
          <Text style={styles.text}>{type}</Text>
        </View>
      )}
    </>
  );
};
