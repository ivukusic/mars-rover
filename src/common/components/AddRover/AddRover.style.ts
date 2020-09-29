import { StyleSheet } from 'react-native';

import { themeYellow } from '../../style';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  increaserMargin: {
    marginLeft: 10,
    marginRight: 10,
  },
  multiplierText: {
    paddingBottom: 10,
  },
  title: {
    backgroundColor: themeYellow,
    width: '100%',
    padding: 20,
  },
  content: {
    padding: 20,
    width: '100%',
  },
  buttonContainer: {
    padding: 20,
    paddingTop: 0,
    width: '100%',
  },
});
