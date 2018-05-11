//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Image = (props) => {
    return (
        <View style={styles.container}>
            <Text>Image</Text>
            <Image src={props.uri}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Image;
