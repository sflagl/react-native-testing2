import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'

import { StackNavigator, NavigationActions, navigationOptions, TabNavigator } from 'react-navigation';

import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Option from './screens/Option';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import StartView from './screens/StartView';
import TakePics from './screens/TakePics';

import GalleryOpen from './screens/GalleryOpen';
import HeaderComp from './comps/header'
import Icon from 'react-native-ionicons';

import data from './data/Notes'

// import objects from './data/Notes'


const AppNavigator = StackNavigator({
  
  HomeScreen: { screen: Home,},
  CreateAccountScreen: {screen: CreateAccount},
  StartViewScreen: {screen: StartView},
  OptionScreen: {screen: Option},
  AddNoteScreen: { screen: AddNote },
  TakePicsScreen: {screen: TakePics},
  EditNoteScreen: { screen: EditNote },
  GalleryOpenScreen: {screen: GalleryOpen}

});

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      test: "Just seeing if this shit works", 
      objects: data,
      downloadedPics: false
    }
  }

  addObjectToNotes = (obj) => {
    const {objects} = this.state
    console.log('Added!')
    const newObjects = {...objects, ...obj}
    console.log(newObjects)
    this.setState({objects: newObjects})
  }

  addPicturesToNotes = (obj) => {
    this.setState({objects: obj, downloadedPics: true})
  }

 

  render() {
    const stateClone = Object.assign({}, this.state)
    return (
      <AppNavigator screenProps={{addObjectToNotes: this.addObjectToNotes, addPicturesToNotes: this.addPicturesToNotes, ...stateClone}}/>
    );
  }
}
