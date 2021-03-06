import React,{useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min,max,exclude) => {
    min = Math.floor(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random()*(max-min)) + min;
    if(rndNum == exclude){
        generateRandomBetween(min,max,exclude)
    }else{
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice))
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const nextGuessHandler = direction => {
        if((currentGuess < props.userChoice && direction === 'lower')||(currentGuess > props.userChoice && direction === 'greater'))
        {
            Alert.alert('Don/`t lie!','You know that this is wrong ...',[{text:'Sorry',style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess
        }else{
            currentLow.current = currentGuess
        }
        setcurrentGuess(generateRandomBetween(currentLow.current,currentHigh.current,currentGuess))
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        maxWidth:'80%',
        width:300
    }
})

export default GameScreen;