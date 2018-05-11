import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';





import Icon from 'react-native-ionicons';



export class FooterComp extends Component {
  render() {

    
    return (
    
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('GalleryScreen')}>


            <Icon name="images" />
              <Text>Gallery</Text>
            </Button> */}
            <Button>
            <Icon name='camera' />
              <Text>Camera</Text>
            </Button>
            <Button onPress={() => this.props.something('AddNoteScreen')}>
              <Icon name="create" />
              <Text>Add Note</Text>
            </Button>
         
          </FooterTab>
        </Footer>

      );
    
  }
}
  export default FooterComp;