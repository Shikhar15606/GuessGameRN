import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Color from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.titleText}>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1024-80.jpg.webp',
          // }}
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.fulltext}>
          Your Phone needed{' '}
          <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userChoice}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.restartGame}>NEW GAME</MainButton>
    </View>
  );
};
// Text styles are passed on to other text components inside
// but Views do not pass styles to children views

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
  highlight: {
    color: Color.primary,
    fontFamily: 'open-sans-bold',
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  fulltext: {
    textAlign: 'center',
  },
});

export default GameOverScreen;
