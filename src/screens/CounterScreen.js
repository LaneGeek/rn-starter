import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment' :
            return { counter: state.counter + 1};
        case 'decrement' :
            return { counter: state.counter - 1};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });


    return (
        <View>
            <Button title='Increase' color={'red'} onPress={() => dispatch({ type: 'increment' })}/>
            <Button title='Decrease' color={'green'} onPress={() => dispatch({ type: 'decrement' })}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
