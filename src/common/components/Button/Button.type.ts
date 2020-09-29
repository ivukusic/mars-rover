import { GestureResponderEvent } from 'react-native';

export interface IButtonProps {
  activeOpacity?: number;
  fill?: string;
  label: string;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
  styleText?: any;
  testID?: string;
}
