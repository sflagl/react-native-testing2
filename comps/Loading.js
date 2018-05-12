//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ARText} from 'react-native-arkit'

// create a component
class Loading extends Component {
    render() {
        return (
            <ARText text="Loading..."
            position={{ x: 0, y: 0, z: -0.2 }}
            font={{ size: 0.025, depth: 0.0001 }} />
        );
    }
}


//make this component available to the app
export default Loading;
