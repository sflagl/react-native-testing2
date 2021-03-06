//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {ARKit} from 'react-native-arkit';

const zPosition = -0.3
// create a component
const Note = (props) => {
    return (
        <Grid>
            <Row size={1}>
                <ARKit.Text
                text={props.object.name}
                position={{ x: 0, y: 0, z: zPosition }}
                font={{ size: 0.02, depth: 0.0001 }} 
                />
            </Row>
            <Row size={1}>
                <ARKit.Text
                text={props.object.note[0]}
                position={{ x: 0, y: -.025, z: zPosition }}
                font={{ size: 0.01, depth: 0.0001 }}
                />
            </Row>
            <Row size={1}>
                <ARKit.Text
                text={props.object.note[1]}
                position={{ x: 0, y: -.035, z: zPosition }}
                font={{ size: 0.01, depth: 0.0001 }}
                />
            </Row>
            <Row size={1}>
                <ARKit.Text
                text={props.object.note[2]}
                position={{ x: 0, y: -.045, z: zPosition }}
                font={{ size: 0.01, depth: 0.0001 }}
                />
            </Row>
        </Grid>
    );
};

// define your styles

//make this component available to the app
export default Note;
