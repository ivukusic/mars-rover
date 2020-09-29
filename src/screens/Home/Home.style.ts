import { StyleSheet } from 'react-native';

import { lightGray, ultralightGray } from '../../common/style';

export default StyleSheet.create({
  toolbar: {
    paddingTop: 50,
    height: 100,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    paddingBottom: 50,
  },
  title: {
    backgroundColor: ultralightGray,
    width: '100%',
    padding: 20,
  },
  content: {
    padding: 20,
    width: '100%',
  },
  rover: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  roverBorder: {
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 20,
  },
});
