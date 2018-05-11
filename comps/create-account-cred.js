 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export class CreateCred extends Component {
  render() {
    return (

       
    
        <Form style={{padding: 10}}>
        <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Full Name" />
        </Item>
        <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Email" />
        </Item>
        <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Password" />
        </Item>
        <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
          <Input placeholder="Confirm Password" />
        </Item>
      </Form>
    
    );
  }
}


export default CreateCred;





