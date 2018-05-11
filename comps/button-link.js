import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonLink extends Component {
  render() {
    
     
      return (


      <Button onPress={this.props.press} style={{ backgroundColor:'transparent'}} >
        <Text style={{ fontSize: 15,color:'black'}}> {this.props.title} </Text>
      </Button>


        

      );



  }
}

// const BtnS = (props) => <Button>{props.children}</Button>


export default ButtonLink;