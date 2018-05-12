import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonOutline extends Component {
  render() {
    return (

       
    
      <Button onPress={this.props.press} style={{ margin: 10,  borderWidth: 1, borderColor: '#A63A9F' }} block bordered rounded success>
        <Text style={{ color:'black' }}> {this.props.title}   </Text>
      </Button>
   
    
    );
  }
}


export default ButtonOutline;