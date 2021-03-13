import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.titleText}>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/success.png')}
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 150,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontSize: 20,
  },
});

export default GameOverScreen;
