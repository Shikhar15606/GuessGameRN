import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataLoaded, setdataLoaded] = useState(true);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setdataLoaded(true);
        }}
        onError={err => {
          console.log(err);
        }}
      />
    );
  }
  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
  };

  const gameOverHandler = noOfRounds => {
    setguessRounds(noOfRounds);
  };

  const fetchFonts = () => {
    // loadAsync function returns a promise
    // fetchFonts fxn also return a promise which is provided
    // to the startAsync to the AppLoading component
    // when the promise resolves the onFinish is executed
    // which sets the data loaded to true
    // onError will be called is the promise do not resolve or throws an error
    return Font.loadAsync({
      OpenSans: require('./assets/fonts/OpenSans.ttf'),
      OpenSansBold: require('./assets/fonts/OpenSansBold.ttf'),
      ...Ionicons.font,
    });
  };

  const setNewGameHandler = () => {
    setguessRounds(0);
    setuserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        restartGame={setNewGameHandler}
        userChoice={userNumber}
        guessRounds={guessRounds}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess Game' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
