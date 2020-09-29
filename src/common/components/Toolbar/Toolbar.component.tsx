import React from 'react';
import { Text, View } from 'react-native';

import styles from './Toolbar.style';
import { IToolbarProps } from './Toolbar.type';

const Toolbar = ({ label }: IToolbarProps): JSX.Element => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

export default Toolbar;
