import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  activeOpacity?: number;
  fill?: string;
  label: string;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  styleText?: TextStyle;
  testID?: string;
}
