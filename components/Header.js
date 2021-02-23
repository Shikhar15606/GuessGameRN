import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
    const styles = StyleSheet.create({
        headerBar: {
            backgroundColor: "#7C4DFF",
            width: "100%",
            height: 90,
            paddingTop: 36,
            alignItems: "center",
        },
        headerText: {
            color: "#FFFFFF",
            fontSize: 20
        }
    })
    return (
        <View style={styles.headerBar} >
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );

};

export default Header;