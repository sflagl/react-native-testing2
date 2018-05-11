import React, { Component } from 'react';
import { Div, View, Text, StyleSheet} from 'react-native';


import { Container, Content} from 'native-base';


import Icon from 'react-native-ionicons';

export class Cam extends Component {
  render() {
    return (

            <Icon name='camera'  style={{ fontSize: 100, color: 'white', marginTop: 70 }}/>

    )
  }
}



export default Cam;