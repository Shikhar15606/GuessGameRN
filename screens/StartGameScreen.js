import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../constants/colors';

const StartGameScreen = () => {
    const [enteredValue, setenteredValue] = useState('')
    const [confirmed, setconfirmed] = useState(false)
    const [selectedNumber, setselectedNumber] = useState()

    const numberInputHandler = inputText => {
        setenteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setenteredValue('')
        setconfirmed(false)
    }

    const confirmInputHandler = () => {
        let chosenNumber = parseInt(enteredValue)
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber>99)
        {
            return;
        }
        setenteredValue('')
        setconfirmed(true)
        setselectedNumber(chosenNumber)
        // this will be batched by react
    }

    let confirmedOutput

    if(confirmed){
        confirmedOutput = <Text>Chosen Number : {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} onChangeText={numberInputHandler} value={enteredValue} blurOnSubmit autoCapitalize="none" keyboardType="number-pad" autoCorrect={false} maxLength={2}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={resetInputHandler} color={Colors.primary}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={confirmInputHandler} color={Colors.accent}></Button>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

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
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input:{
        width:50,
        textAlign:'center'
    }
})

export default StartGameScreen;