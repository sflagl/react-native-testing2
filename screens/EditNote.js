import React, { Component } from 'react';
import { View, Text} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Form, Item, Input} from 'native-base';

import Thumb from '../comps/thumbnail';

import HeaderComp from '../comps/header.js';
import FooterComp from '../comps/footer.js';
import ButtonOutline from '../comps/button-outline';

import ARCamera from '../comps/Other'

export class EditNote extends Component {

  static navigationOptions =  ({ navigation }) => {
     
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

    render() {
      return (
        <Grid>
        
          <Row>
            <ARCamera/>   
          </Row>
          <Row>
            <Col>
                  
              <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder='Underline Textbox' />
              </Item>
            </Form>  
             
            </Col>

          </Row>
          <Row size={1} style={{ padding:5, margin: 5, justifyContent: 'center',
        alignItems: 'center'}}>
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
          <Col>
            <Thumb/>
          </Col>   
        </Row>
          <Row>
            <Col>
              <ButtonOutline press={() => this.props.navigation.navigate('StartViewScreen')} title="Submit"/>   
            </Col>



          </Row>
       
      </Grid>
      )
    }
  }
  
  export default EditNote;