export interface ITextInputProps {
  error?: string;
  label?: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: any;
  value: string;
}
