import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { global } from '../../style';

import { IDirectionSelectProps } from './DirectionSelect.type';
import { styles } from './DirectionSelect.style';

export const Increaser = ({ onChange, value }: IDirectionSelectProps) => {
  const onDirectionSelect = (direction: string) => () => {
    onChange(direction);
  };

  const renderButton = (direction: string) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[global.alignCenter, global.justifyCenter, styles.button, value === direction && styles.buttonSelected]}
      onPress={onDirectionSelect(direction)}
    >
      <Text style={value === direction ? global.whiteTextColor : global.normalTextColor}>{direction}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[global.row]}>
      {renderButton('N')}
      {renderButton('E')}
      {renderButton('S')}
      {renderButton('W')}
    </View>
  );
};

Increaser.defaultProps = {
  label: '',
};

export default Increaser;
