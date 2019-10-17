import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const subText = <Text style={styles.subHeading}>My name is John</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            {subText}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeading: {
        fontSize: 20
    }
});

export default ComponentScreen;
