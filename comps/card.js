import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-ionicons';



export class GalleryCard extends Component {
  render() {
    return (
     
     
        <Card style={{paddingBottom: 5}}>
          <CardItem>
            <Image source={require('../images/bear.jpg')} style={{height: 180, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{marginTop: -5,marginBottom: -5 }}>
            <Left>
              <Body >
                <Button transparent>
                <Text>NativeBase</Text>
                </Button>
              </Body>
            </Left>
            <Right>
            <Button transparent onPress={this.props.press}>
              <Icon active name="arrow-round-forward" />
              </Button>
            </Right>
          </CardItem>
        </Card>
 
     

    );
  }
}


const styles = StyleSheet.create({
  mtop: {
    marginTop: 10,
  }
});

StyleSheet.flatten([styles.mtop])

export default GalleryCard;