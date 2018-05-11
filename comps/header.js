import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import { NativeRouter, Route, Link } from 'react-router-native'
import { StartView } from '../screens/StartView';

import ButtonOutline from '../comps/button-outline';



export class HeaderComp extends Component {
  
    render() {
      return (
   
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>NoteWorthy</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.press2}>
              <Icon name='lock' />
            </Button>
          </Right>
        </Header>
 
      )
    }
  }
  
  export default HeaderComp;


