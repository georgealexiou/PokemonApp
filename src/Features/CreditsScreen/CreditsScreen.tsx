import * as React from 'react';
import { View, Text } from 'react-native';

const CreditsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginBottom: 16,
        }}>
        George Alexiou
      </Text>
    </View>
  );
};

export default CreditsScreen;
