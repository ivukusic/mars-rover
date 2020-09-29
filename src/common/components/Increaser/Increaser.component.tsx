import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { global } from '../../style';

import { IIncreaserProps } from './Increaser.type';
import { styles } from './Increaser.style';

export const Increaser = ({ min, max, onPress, style, value }: IIncreaserProps) => {
  const onDecreasePress = () => {
    if (value - 1 >= min) {
      onPress(value - 1);
    }
  };

  const onIncreasePress = () => {
    if (!max || value < max) {
      onPress(value + 1);
    }
  };

  return (
    <View style={[global.column, styles.container, style]}>
      <View style={global.row}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[global.alignCenter, global.justifyCenter, styles.button]}
          onPress={onDecreasePress}
        >
          <Text style={global.whiteTextColor}>-</Text>
        </TouchableOpacity>
        <Text style={[global.normalTextColor, styles.valueText]}>{value}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[global.row, global.alignCenter, global.justifyCenter, styles.button]}
          onPress={onIncreasePress}
        >
          <Text style={global.whiteTextColor}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Increaser.defaultProps = {
  label: '',
  min: 1,
};

export default Increaser;
