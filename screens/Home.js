import React, { Component } from 'react';
import { Div, View, Text, StyleSheet, Button, ImageBackground} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content} from 'native-base';

import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';
import ButtonLink from '../comps/button-link';
import UsernamePassword from '../comps/username-password';
import BackgroundImage from '../comps/background';
import Icon from 'react-native-ionicons';

import { StackNavigator, NavigationActions, navigationOptions } from 'react-navigation';


export class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {

    return (

    
      <Grid>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1513909619904-efd11e5b8666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5c80f82f52136a57d191b2e081eb82c&auto=format&fit=crop&w=668&q=80' }}
          style={styles.container}>
   
          <Row style={{ backgroundColor: 'rgba(255, 255, 255, .9)', marginTop: 30, marginBottom: 30, marginLeft: 10, marginRight: 10, height: 440, borderRadius: 10 }}>

            <Col>
              <Row>
                <Text style={{ fontSize: 40, padding: 10, fontWeight: '100', flex:1,justifyContent: "center",alignItems: "center" }}>NoteWorthy</Text>
              </Row>

              <Row >
                
                <Col style={{ padding: 10 }}>
                  <UsernamePassword />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: 10 }}>
                  <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')} title="Login" />
                  <ButtonLink style={{ fontSize: 15 }} press={() => this.props.navigation.navigate('CreateAccountScreen')} title="Don't Have an Account?" />
                </Col>

              </Row>

            </Col>



          </Row>


        </ImageBackground>
      </Grid>
  



    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;