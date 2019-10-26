import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View>
                <Text style={styles.app}>App</Text>
            </View>
            <View style={styles.viewStyle}>
                <View style={styles.boxOneStyle}/>
                <View style={styles.boxTwoStyle}/>
                <View style={styles.boxThreeStyle}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    app: {
        fontSize: 24,
        borderWidth: 4,
        textAlign: 'center',
        padding: 10
    },
    boxOneStyle: {
        height: 80,
        width: 100,
        backgroundColor: 'pink',
    },
    boxTwoStyle: {
        height: 80,
        width: 100,
        backgroundColor: 'green',
        top: 80
    },
    boxThreeStyle: {
        height: 80,
        width: 100,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;
