import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonSolid extends Component {
  render() {
    
     
      return (


      <Button onPress={this.props.press} style={{ margin: 10 }} block rounded success>
       <Text style={{color:'white'}}> {this.props.title} </Text>
      </Button>

        

      );



  }
}




export default ButtonSolid;