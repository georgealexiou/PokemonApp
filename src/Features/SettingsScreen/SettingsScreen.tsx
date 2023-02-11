import * as React from 'react';
import { View, Text } from 'react-native';
import { textStyle } from '../../../themes/textStyle';

const Settings = ({ navigation }: any) => {
  return (
    <View>
      <Text style={textStyle.h1}>You can change stuff here</Text>
    </View>
  );
};

export default Settings;
