import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <BodyText>
        The Computer Gussed your number in : {props.guessRounds} gusses
      </BodyText>
      <BodyText>The entered number was : {props.userChoice}</BodyText>
      <Button title='NEW GAME' onPress={props.restartGame}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
