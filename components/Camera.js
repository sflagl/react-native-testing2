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
import { RNCamera } from 'react-native-camera';
import clarifai from '../utils/clarifai'

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
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
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
    if (this.camera && use === 'upload') {
      const data = await this.camera.takePictureAsync(options)
      console.log(data);
      this.props.addPics(data)
    }else if(this.camera && use === 'detection'){
      const data = await this.camera.takePictureAsync(options)
      console.log('Detecting...')
      const objects = await clarifai.predictContent('test-model', data.base64)
      console.log(objects)
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