//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';

// create a component
const Picture = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.alertFunc(props.picKey)}}>
            <Image style={{height: '100%', zIndex: 1}} source={{uri: props.picture.uri}}/>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        padding: 5
    },

    button: {
        // position: 'absolute',
        // top: -10,
        // zIndex: 10
    }
});

//make this component available to the app
export default Picture;
