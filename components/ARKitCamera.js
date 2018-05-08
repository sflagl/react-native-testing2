'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
// import { RNCamera } from 'react-native-camera';
import clarifai from '../utils/clarifai';
import {ARKit} from 'react-native-arkit';
var ReadImageData = require('NativeModules').ReadImageData;

class BadInstagramCloneApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      picInfo: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ARKit>
        </ARKit>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    const {use} = this.props
    const options = { quality: 0.5, base64: true };
    console.log('Clicked!')
    if (use === 'upload') {
      const data = await ARKit.snapshotCamera()
      console.log(data.url);
      ReadImageData.readImage(data.url, (imageBase64) => {
        console.log(imageBase64);
        });
      this.props.addPics(data)
    }else if(use === 'detection'){
      const data = await ARKit.snapshotCamera()
      console.log('Detecting...')
      ReadImageData.readImage(data.url, (imageBase64) => {
        console.log(imageBase64);
        const objects = clarifai.predictContent('test-model', imageBase64)
        });
    }
  };

  getNote (img) {
    const concepts = Clarifai.predictContent('test-model', img)
    console.log(concepts)
  }
}

const styles = {
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: 'black',
    // height: '75%',
    // width: '75%'
  },
  preview: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // width: '100%'
  },
  capture: {
    flex: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
};

export default BadInstagramCloneApp