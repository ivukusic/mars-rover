import { StyleSheet } from 'react-native';
import { themeYellow } from '../../style';

export const styles = StyleSheet.create({
  button: {
    padding: 12,
  },
  spinnerContainer: {
    width: 50,
  },
  border: {
    borderWidth: 0.6,
  },
  borderGray: {
    borderColor: themeYellow,
  },
  disabledOpacity: {
    opacity: 0.4,
  },
});
