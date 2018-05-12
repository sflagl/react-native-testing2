import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import ButtonOutline from '../comps/button-outline';

import Icon from 'react-native-ionicons';
import { HeaderComp } from '../comps/header';
import { FooterComp } from '../comps/footer';

import GalleryCard from '../comps/card.js';

import Thumb from '../comps/thumbnail';
import Cam from '../comps/camera';

import ButtonSolid from '../comps/button';

import { TabNavigator, navigationOptions } from 'react-navigation'; // Version can be specified in package.json

import Add from '../screens/AddNote'
import ARCamera from '../comps/Other'
import Camera from '../comps/ARKitCamera'

import clarifai from '../utils/clarifai'

// const provideIsFocused = Comp => {
//   class IsFocusedProvider extends React.Component {
//     state = {
//       isFocused: false,
//     };

//     componentDidMount() {
//       this.subs = [
//         this.props.navigation.addListener("didFocus", () => this.setState({isFocused: true})),
//         this.props.navigation.addListener("willBlur", () => this.setState({isFocused: false})),
//       ];
//     }

//     componentWillUnmount() {
//       this.subs.forEach(sub => sub.remove());
//     }

//     render() {
//       return (
//         <Comp isFocused={this.state.isFocused} {...this.props}/>
//       )
//     }
//   }

//   return IsFocusedProvider;
// };

class StartView extends Component {

  static navigationOptions =  ({ navigation }) => {
   
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')}/>  
  }
};


render() {
  return (
    <ARCamera use="detection" getFunc={(func) => {console.log('Detecting...')}} objects={this.props.screenProps.objects}/>

  );
}
}



class GalleryTest extends Component {

    static navigationOptions =  ({ navigation }) => {
     
      return {
        header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')}/>  
    }
  };

  componentDidMount = () => {
    if(!this.props.screenProps.downloadedPics){
      const that = this
      clarifai.getImages()
      .then(
        function(response) {
          console.log(response.rawData)
          that.showPictures(response.rawData)
        },
        function(err) {
          console.log('Oh no!')
        }
      );
    }
  }

  showPictures = (imgArray) => {
    console.log('Running...')
    const {objects} = this.props.screenProps
    for (object in objects){
      imgArray.forEach(img => {
        if (img.id.includes(object)){
          console.log(img.id)
          console.log(object)
          objects[object].pictures.push(img.data.image.url)
        }
      })
    };
    this.props.screenProps.addPicturesToNotes(objects)
  }

  returnGalleryCards = (objects) => {
    
    const components = []
    for (object in objects){
      console.log(object)
      const obj = objects[object]
      components.push(
        <Row>
          <GalleryCard press={() => this.props.navigation.navigate('GalleryOpenScreen', {obj: obj})} object={obj} />   
        </Row>
      )
    }

    return components
  }

  render() {
    const {objects} = this.props.screenProps
    console.log('Making cards')
    console.log(objects)
    return (
      <ScrollView>
      <Grid>
        {this.returnGalleryCards(objects)}
    </Grid>
    </ScrollView>
    );
  }
}

class AddNoteInstructions extends Component {


  static navigationOptions =  ({ navigation }) => {
     
    return {
      header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('LoginScreen')}/>  
    }
  };

  render() {
    this.props.isFocused ? console.log('Add note') : console.log('Not fucking focused')
    return (
      <Container style={{margin: 5}}>
        
      <Grid>
      
   
        <Row size={3} style={{backgroundColor:'grey', padding:5}}>
          <Text>To add a note, please take at least 5 pictures of the object, preferably from different angles</Text>
      
        </Row>
        <Row>
        <Col>
              <ButtonSolid press={() => this.props.navigation.navigate('TakePicsScreen')} title="Got it!"/>    
            </Col>
        </Row>


  
    </Grid>
     </Container>
    );
  }
}

export default TabNavigator({
  GalleryTest: { 
    screen: GalleryTest,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Gallery</Text>),
      tabBarIcon: (<Icon name='images' size={25} />),
    }, 
   },
   StartView: { screen: StartView,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Start View</Text>),
      tabBarIcon: (<Icon name='camera' size={25} />),
    }
   },
   AddNote: { screen: AddNoteInstructions,
    navigationOptions: {
      tabBarLabel: (<Text style={{fontSize: 10, paddingBottom:5 }}>Add Note</Text>),
      tabBarIcon: (<Icon name='create' size={25} />),
    }
   },
});


