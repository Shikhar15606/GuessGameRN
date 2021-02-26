import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

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
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={()=>{}}/>
                <Button title="UPPER" onPress={()=>{}}/>
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