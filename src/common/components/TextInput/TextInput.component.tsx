import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { global } from '../../style';

import { ITextInputProps } from './TextInput.type';
import styles from './TextInput.style';

const Input = ({ error, label, onChangeText, placeholder, style, testID, value }: ITextInputProps): JSX.Element => (
  <View style={[global.column, style]}>
    {!!label && <Text>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      onChangeText={onChangeText}
      testID={testID}
      value={value}
    />
    <Text style={[global.errorTextColor, global.smallerTextSize]}>{error}</Text>
  </View>
);

Input.defaultProps = {
  error: '',
  label: '',
  placeholder: '',
  testID: 'text-input-input',
};

export default Input;
