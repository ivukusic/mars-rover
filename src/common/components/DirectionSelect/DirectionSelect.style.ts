import { StyleSheet } from 'react-native';
import { themeYellow } from '../../style';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  button: {
    borderColor: themeYellow,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginRight: 5,
    height: 50,
    width: 50,
  },
  buttonSelected: {
    backgroundColor: themeYellow,
  },
  valueText: {
    padding: 10,
  },
});
