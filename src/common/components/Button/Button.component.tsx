import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { global, themeYellow } from '../../style';

import { styles } from './Button.style';
import { IButtonProps } from './Button.type';

export const Button = ({ activeOpacity, fill, label, loading, onPress, style, styleText, testID }: IButtonProps) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    testID={testID}
    style={[global.row, global.alignCenter, global.justifyCenter, styles.button, { backgroundColor: fill }, style]}
    onPress={onPress}
  >
    {!!loading && <View style={styles.spinnerContainer} />}
    <Text style={[global.whiteTextColor, global.boldWeight, styleText]}>{label}</Text>
    {!!loading && (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator color="white" />
      </View>
    )}
  </TouchableOpacity>
);

Button.defaultProps = {
  activeOpacity: 0.9,
  fill: themeYellow,
  loading: false,
  style: {},
  styleText: {},
  testID: 'button',
};

export default Button;
