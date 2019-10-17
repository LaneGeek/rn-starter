import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Hello and welcome to my lair!!!</Text>
            <Button
                title='Go To Components Demo'
                onPress={() => props.navigation.navigate('Components')}
            />
            <Button
                title='Go To List Demo'
                color={'red'}
                onPress={() => props.navigation.navigate('List')}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
