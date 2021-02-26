import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NumberContainer from '../components/NumberContainer';

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
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1,100,this.props.userChoice))
    return (
        <View>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    );
};
const styles = StyleSheet.create({
    
})

export default GameScreen;