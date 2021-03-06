import React from 'react';
import { View, Text ,StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>The Computer Gussed your number in : {props.guessRounds} gusses</Text>
            <Text>The entered number was : {props.userChoice}</Text>
            <Button title="NEW GAME" onPress={props.restartGame}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default GameOverScreen;