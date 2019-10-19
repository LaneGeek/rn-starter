import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Hello and welcome to my underground lair!!!</Text>
            <Button
                title='Go To Components Demo'
                onPress={() => navigation.navigate('Components')}
            />
            <Button
                title='Go To List Demo'
                color={'red'}
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title='Go To Image Demo!'
                color={'green'}
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title='Go To Counter Demo!'
                color={'black'}
                onPress={() => navigation.navigate('Counter')}
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
