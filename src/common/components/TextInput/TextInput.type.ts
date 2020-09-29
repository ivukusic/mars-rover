import { ViewStyle } from 'react-native';

export interface ITextInputProps {
  error?: string;
  label?: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  testID?: string;
  style?: ViewStyle;
  value: string;
}
