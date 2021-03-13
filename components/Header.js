import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
  return (
    <View style={styles.headerBar}>
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Header;
