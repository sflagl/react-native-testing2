import React, { Component } from 'react';
import { Div, View, Text, StyleSheet, Button, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';

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
    console.log(this.props.screenProps)
    return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Grid>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1513909619904-efd11e5b8666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5c80f82f52136a57d191b2e081eb82c&auto=format&fit=crop&w=668&q=80' }}
          style={styles.container}>

          <Row size={1}>

        

              <Text style={{ fontSize: 50, paddingLeft: 20, paddingTop: 70, fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlign: 'center', color:'white', fontFamily:'TrebuchetMS-Bold' }}>NoteWorthy</Text>
          
          </Row>
   
          <Row  size={2}  style={{ backgroundColor: 'rgba(255, 255, 255, .9)', marginLeft: 10, marginRight: 10, borderRadius: 10 , paddingTop:20}}>

            <Col>


              <Row>
                <Col>
                <UsernamePassword />
                  <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')} title="Login" />
                  <ButtonLink style={{ fontSize: 15 }} press={() => this.props.navigation.navigate('CreateAccountScreen')} title="Don't Have an Account?" />
                </Col>

              </Row>

 

            </Col>



          </Row>

                       <Row size={1}>

              </Row>


        </ImageBackground>
      </Grid>
    </TouchableWithoutFeedback>
  



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