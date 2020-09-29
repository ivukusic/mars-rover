import { ViewStyle } from 'react-native';

export interface IIncreaserProps {
  min: number;
  max?: number;
  onPress: (value: number) => void;
  style?: ViewStyle;
  value: number;
}
