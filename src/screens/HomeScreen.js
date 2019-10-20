import React from 'react';
import {Text, StyleSheet, View, Button, Platform, Dimensions} from 'react-native';

const HomeScreen = ({navigation}) => {
    const tablet = Dimensions.get('window').width > 600;
    const device = Platform.OS === 'android' ? (tablet ? 'Android tablet' : 'Android phone') : (tablet ? 'iPad' : 'iPhone');

    return (
        <View>
            <Text style={styles.text}>Hello and welcome! Enjoy this crappy app on your crappy, old, pitiful {device}!</Text>
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
            <Button
                title='Go To Color Demo!'
                color={'pink'}
                onPress={() => navigation.navigate('Color')}
            />
            <Button
                title='Go To Square Demo!'
                color={'brown'}
                onPress={() => navigation.navigate('Square')}
            />
            <Button
                title='Get Info About Your Crappy Device 😞'
                color={'blue'}
                onPress={() => navigation.navigate('DeviceInfo')}
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
