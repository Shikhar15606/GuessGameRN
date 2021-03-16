import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

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
    backgroundColor: Platform.OS === 'android' ? Colors.primary : white,
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  headerText: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
    fontSize: 20,
  },
});

export default Header;
