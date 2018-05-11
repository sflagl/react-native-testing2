 
import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';

export class Thumb extends Component {
  render() {

    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (

       
        <Thumbnail square small source={{uri: uri}} />
    
    );
  }
}


export default Thumb;