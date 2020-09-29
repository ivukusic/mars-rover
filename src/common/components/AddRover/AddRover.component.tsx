import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';

import { Button, DirectionSelect, Increaser, TextInput } from '..';
import { regex } from '../../constants';
import { global } from '../../style';

import { IAddRoverProps } from './AddRover.type';
import styles from './AddRover.style';

const INITIAL_STATE = {
  x: 1,
  y: 1,
  direction: 'N',
  movement: '',
  movementError: '',
  plateau: [5, 5],
};

const AddRover = ({ isVisible, onClose, onConfirm }: IAddRoverProps): JSX.Element => {
  const [{ x, y, direction, movement, movementError, plateau }, setState] = useState(INITIAL_STATE);

  const onChangeText = (value: string) => {
    let error = '';
    if (value && !regex.direction.test(value)) {
      error = 'Movement should contain only LRM characters';
    }
    setState(prevState => ({ ...prevState, movement: value.toUpperCase(), movementError: error }));
  };

  const onDirectionChange = (field: string) => (value: string) => {
    setState(prevState => ({ ...prevState, [field]: value }));
  };

  const onIncreaserPress = (field: string) => (value: number) => {
    setState(prevState => ({ ...prevState, [field]: value }));
  };

  const onPlateauIncrease = (index: number) => (value: number) => {
    let newPlateau = [...plateau];
    newPlateau[index] = value;
    setState(prevState => ({ ...prevState, plateau: newPlateau }));
  };

  const onAddRoverPress = () => {
    if (movement) {
      let data = {
        plateau: `${plateau[0]} ${plateau[1]}`,
        startingPosition: `${x} ${y} ${direction}`,
        movement,
      };
      onConfirm(data);
      setState(INITIAL_STATE);
    } else {
      setState(prevState => ({ ...prevState, movementError: 'Please add movement' }));
    }
  };

  const onCancelPress = () => {
    onClose();
    setState(INITIAL_STATE);
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={[styles.container]}>
        <ScrollView style={global.width100} contentContainerStyle={[global.width100]}>
          <Text style={[global.whiteTextColor, styles.title]}>Plateau size</Text>
          <View style={[global.row, global.alignCenter, styles.content]}>
            <Increaser style={styles.increaserMargin} onPress={onPlateauIncrease(0)} value={plateau[0]} />
            <Text style={styles.multiplierText}>x</Text>
            <Increaser style={styles.increaserMargin} onPress={onPlateauIncrease(1)} value={plateau[1]} />
          </View>
          <Text style={[global.whiteTextColor, styles.title]}>Starting point</Text>
          <View style={styles.content}>
            <View style={[global.row, global.alignCenter]}>
              <Text>X: </Text>
              <Increaser
                style={[global.row, global.alignCenter]}
                min={0}
                max={plateau && plateau[0]}
                onPress={onIncreaserPress('x')}
                value={x}
              />
            </View>
            <View style={[global.row, global.alignCenter]}>
              <Text>Y: </Text>
              <Increaser
                style={[global.row, global.alignCenter]}
                min={0}
                max={plateau && plateau[1]}
                onPress={onIncreaserPress('y')}
                value={y}
              />
            </View>
          </View>
          <Text style={[global.whiteTextColor, styles.title]}>Starting direction</Text>
          <View style={styles.content}>
            <DirectionSelect onChange={onDirectionChange('direction')} value={direction} />
          </View>
          <Text style={[global.whiteTextColor, styles.title]}>Movement</Text>
          <View style={[global.container, styles.content]}>
            <TextInput
              style={[global.container]}
              error={movementError}
              onChangeText={onChangeText}
              placeholder="Movement - accepting only LRM characters..."
              testID="add-rover-movement-input"
              value={movement}
            />
          </View>
          <View style={[global.container, global.row]}>
            <Button style={global.container} label="Cancel" onPress={onCancelPress} testID="add-rover-button" />
            <Button style={global.container} label="Add rover" onPress={onAddRoverPress} testID="add-rover-button" />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AddRover;
