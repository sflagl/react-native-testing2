//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'

// create a component
class Home extends Component {
    render() {
        return (
            <View>
                <Button title="Write Note"/>
            </View>
        );
    }
}

// define your styles

//make this component available to the app
export default Home;
