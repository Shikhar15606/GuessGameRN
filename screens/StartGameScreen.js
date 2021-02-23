import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = () => {
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            padding: 10,
            alignItems: "center"
        },
        title: {
            fontSize: 20,
            marginVertical: 10,
        },
        inputContainer: {
            width: 300,
            maxWidth: "80%",
            alignItems: "center",
            // only for ios
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            // till here
            elevation: 5, //for android
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10
        },
        buttonContainer: {
            flexDirection: 'row',
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: 15
        }
    })
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }}></Button>
                    <Button title="Confirm" onPress={() => { }}></Button>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;