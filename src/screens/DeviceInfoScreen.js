import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList, ToastAndroid, Platform, Text, Dimensions} from 'react-native';

const DeviceInfoScreen = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const os = Platform.OS;
    const version = Platform.Version;

    return (
        <View>
            <Text>
                Sadly, your device sucks big time :( The operating system is {os} and the version is {version}. The screen
                width is {screenWidth} and the screen height is {screenHeight}. Sad!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default DeviceInfoScreen;
