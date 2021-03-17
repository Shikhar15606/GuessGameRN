import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Color from '../constants/colors';

const MainButton = props => {
  let MyTouchableComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    MyTouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <MyTouchableComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </MyTouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default MainButton;
