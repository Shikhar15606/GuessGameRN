import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBar,
        ...Platform.select({
          ios: styles.headerBarIOS,
          android: styles.headerBarAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
  },
  headerBarIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerBarAndroid: {
    backgroundColor: Colors.primary,
  },
  headerText: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
    fontSize: 20,
  },
});

export default Header;
