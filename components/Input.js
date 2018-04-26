//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';

// create a component
const Input = (props) => {
    return (
        <Grid style={styles.container}>
            <Row>
                <Text>Object name:</Text>
            </Row>
            <Row>
                <TextInput onChange={(text)=>{props.handleChange(text)}} value={props.concept} style={{backgroundColor: 'white', width: '75%', borderWidth: 3, borderColor: 'gray', paddingRight: 10, paddingLeft: 10}}>
                </TextInput>
            </Row>
        </Grid>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Input;
