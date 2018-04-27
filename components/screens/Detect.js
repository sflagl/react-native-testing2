//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Grid, Row} from 'react-native-easy-grid'
import Camera from '../Camera'
import { Button } from 'react-native-elements'

// create a component
class DetectNotes extends Component {
    render() {
        return (
            <Grid style={styles.container}>
                <Row size={70}>
                    <Camera/>
                </Row>
                <Row size={30}>
                </Row>
            </Grid>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        flexDirection: 'column'
    },

    // camera: {
    //     width: 300,
    //     flex: 8
    // }
});

//make this component available to the app
export default DetectNotes;
