import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Color from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  const [availableDeviceWidth, setavailableDeviceWidth] = useState(
    Dimensions.get('window').width
  );
  const [availableDeviceHeight, setavailableDeviceHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const updateLayout = () => {
      setavailableDeviceWidth(Dimensions.get('window').width);
      setavailableDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      // Cleanup Can Be Done Here
      Dimensions.removeEventListener('change', updateLayout);
    };
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={{ fontSize: availableDeviceHeight < 400 ? 16 : 20 }}>
          The Game is Over!
        </TitleText>
        <View
          style={{
            ...styles.imageContainer,
            marginVertical: availableDeviceHeight / 30,
            borderRadius: (availableDeviceWidth * 0.7) / 2,
            width: availableDeviceWidth * 0.7,
            height: availableDeviceWidth * 0.7,
          }}
        >
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
        <View
          style={{
            ...styles.textContainer,
            marginVertical: availableDeviceHeight / 60,
          }}
        >
          <BodyText style={styles.fulltext}>
            Your Phone needed{' '}
            <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userChoice}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.restartGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
// Text styles are passed on to other text components inside
// but Views do not pass styles to children views

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Color.primary,
    fontFamily: 'open-sans-bold',
  },
  textContainer: {
    marginHorizontal: 30,
  },
  fulltext: {
    textAlign: 'center',
  },
});

export default GameOverScreen;
