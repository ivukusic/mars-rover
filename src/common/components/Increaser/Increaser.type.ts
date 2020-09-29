export interface IIncreaserProps {
  min: number;
  max?: number;
  onPress: (value: number) => void;
  style?: any;
  value: number;
}
