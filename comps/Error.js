import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ARKit} from 'react-native-arkit';
import {Grid} from 'react-native-easy-grid';

// create a component
class Loading extends Component {
    render() {
        return (
            <Grid>
                <ARKit.Text text="No notes found!"
                position={{ x: 0, y: 0, z: -0.2 }}
                font={{ size: 0.02, depth: 0.001 }} />
            </Grid>
        );
    }
}


//make this component available to the app
export default Loading;
