import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold',
  },
});

export default TitleText;
