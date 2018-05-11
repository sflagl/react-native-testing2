 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export class UsernamePassword extends Component {
  render() {
    return (

       
    
        <Form style={{padding: 10}}>
        <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Username" />
        </Item>
        <Item rounded style={{paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Password" />
        </Item>
      </Form>
    
    );
  }
}


export default UsernamePassword;





