//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';

// create a component
const Note = (props) => {
    return (
        <Grid style={styles.container}>
            <Row size={10}>
                <Text>Note:</Text>
            </Row>
            <Row size={90}>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Note;
