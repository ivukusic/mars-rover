import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { AddRover, Button, Toolbar } from '../../common/components';
import { calculateRoversPosition } from '../../utils';

import styles from './Home.style';

const Home = (): JSX.Element => {
  const [addRoverVisible, setAddRoverVisible] = useState<boolean>(false);
  const [rovers, setRovers] = useState<string[][]>([]);

  const onAddRoverPress = () => {
    setAddRoverVisible(!addRoverVisible);
  };

  const onAddRoverConfirm = (data: { plateau: string; startingPosition: string; movement: string }) => {
    let dataToSend = [data.plateau, data.startingPosition, data.movement];
    const res = calculateRoversPosition([...dataToSend]);
    if (typeof res === 'object') {
      dataToSend.push(res[0]);
      const newRovers = [...rovers, dataToSend];
      setRovers(newRovers);
      setAddRoverVisible(!addRoverVisible);
    }
  };

  return (
    <>
      <Toolbar label="Mars Rovers" />
      <ScrollView contentContainerStyle={[styles.container]}>
        {!!rovers.length && (
          <>
            <Text style={styles.title}>ROVERS</Text>
            <View style={styles.content}>
              {rovers.map((rover, index) => (
                <View key={index} style={[styles.rover, index + 1 < rovers.length && styles.roverBorder]}>
                  <Text>Plateau size: {rover[0]}</Text>
                  <Text>Starting position: {rover[1]}</Text>
                  <Text>Movement: {rover[2]}</Text>
                  <Text>Final position: {rover[3]}</Text>
                </View>
              ))}
            </View>
          </>
        )}
        <Button style={styles.button} label="Add rover" onPress={onAddRoverPress} />
      </ScrollView>
      <AddRover isVisible={addRoverVisible} onConfirm={onAddRoverConfirm} />
    </>
  );
};

export default Home;
