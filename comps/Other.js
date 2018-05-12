import React, { Component } from 'react';
import { View, Button, TouchableWithoutFeedback } from 'react-native';
import { ARKit } from 'react-native-arkit';
import {Grid, Row} from 'react-native-easy-grid';
import Note from './Note'
import clarifai from '../utils/clarifai'
import Loading from './Loading';
import Error from './Error'

const ReadImageData = require('NativeModules').ReadImageData;

const zPosition = -0.5

export default class ReactNativeARKit extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this)
    this.state ={
      showThatThing: false,
      showNote: false,
      noteObject: null,
      errorMsg: '',
      loading: false,
    }
  }

  showNote = (object) => {
    // ARKit.focusScene()
    console.log('Trying to show note...')
    const match = object.concepts[0]
    console.log(match)
    if(match.value > 0.75){
      console.log("There's a match!")
      console.log(this.props)
      const noteObj = this.props.objects[match.name]
      console.log(noteObj)
      this.setState({showNote: true, noteObject: noteObj, loading: false})
    }else{
      this.setState({errorMsg: 'No notes found!', loading: false})
    }
  }

  shouldITakePic = () => {
    console.log('Touch me there')
    if(this.props.use === 'detection'){
      this.takePicture()
    }
  }

  takePicture = async function() {
    ARKit.focusScene()
    this.setState({loading: true, showNote: false, noteObj: null, errorMsg: ''})
    const {use} = this.props
    console.log('Clicked!')
    if (use === 'upload') {
      const data = await ARKit.snapshotCamera()
      console.log(data.url);
      ReadImageData.readImage(data.url, (imageBase64) => {
        console.log(imageBase64);
        data.base64 = imageBase64
        this.props.addPics(data)
        });
    }else if(use === 'detection'){
      const that = this
      const data = await ARKit.snapshotCamera()
      console.log('Detecting...')
      console.log(data)
      ReadImageData.readImage(data.url, (imageBase64) => {
        //call clarifai
        clarifai.predictContent('test-model', imageBase64)
          .then(
            //Do something with response
            function(response) {
              console.log('Predicting...')
              console.log(response.rawData.outputs[0].data)
              that.showNote(response.rawData.outputs[0].data)
            },
            function(err) {
              // there was an error
              console.log(err)
              console.log('Fuck')
              return "No notes detected"
            }
          )
        });
    }
  };

  renderLikeAnythingPlease = () => {
    ARKit.focusScene()
    ARKit.getCamera().then(info => {
      console.log(info.eulerAngles)
    })
    const trueFalse = !this.state.showThatThing
    this.setState({showThatThing: trueFalse})
    console.log('Button clicked!')
  }

  componentDidMount = () => {
    this.props.getFunc(this.takePicture.bind(this))
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={this.shouldITakePic}>
      <Grid>
        <Row size={85}>
        <ARKit
          style={{ flex: 1 }}
           debug
          // enable plane detection (defaults to Horizontal)
          planeDetection={ARKit.ARPlaneDetection.Horizontal}

          // enable light estimation (defaults to true)
          lightEstimationEnabled
          // get the current lightEstimation (if enabled)
          // it fires rapidly, so better poll it from outside with
          // ARKit.getCurrentLightEstimation()
          // onLightEstimation={e => console.log(e.nativeEvent)}

          // // event listener for (horizontal) plane detection
          // onPlaneDetected={anchor => console.log(anchor)}

          // // event listener for plane update
          // onPlaneUpdated={anchor => console.log(anchor)}

          // // arkit sometimes removes detected planes
          // onPlaneRemoved={anchor => console.log(anchor)}

          // // event listeners for all anchors, see [Planes and Anchors](#planes-and-anchors)
          // onAnchorDetected={anchor => console.log(anchor)}
          // onAnchorUpdated={anchor => console.log(anchor)}
          // onAnchorRemoved={anchor => console.log(anchor)}

          // you can detect images and will get an anchor for these images
          detectionImages={[{ resourceGroupName: 'DetectionImages' }]}
          onARKitError={console.log} // if arkit could not be initialized (e.g. missing permissions), you will get notified here
          >
            {/* <ARKit.Box
              position={{ x: 0, y: 0, z: zPosition }}
              shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
            />
            <ARKit.Sphere
              position={{ x: 0.2, y: 0, z: zPosition }}
              shape={{ radius: 0.05 }}
            />
            <ARKit.Cylinder
              position={{ x: 0.4, y: 0, z: zPosition }}
              shape={{ radius: 0.05, height: 0.1 }}
            />
            <ARKit.Cone
              position={{ x: 0, y: 0.2, z: zPosition }}
              shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
            />
            <ARKit.Pyramid
              position={{ x: 0.2, y: 0.15, z: zPosition }}
              shape={{ width: 0.1, height: 0.1, length: 0.1 }}
            />
            <ARKit.Tube
              position={{ x: 0.4, y: 0.2, z: zPosition }}
              shape={{ innerR: 0.03, outerR: 0.05, height: 0.1 }}
            />
            <ARKit.Torus
              position={{ x: 0, y: 0.4, z: zPosition }}
              shape={{ ringR: 0.06, pipeR: 0.02 }}
            />
            <ARKit.Capsule
              position={{ x: 0.2, y: 0.4, z: zPosition }}
              shape={{ capR: 0.02, height: 0.06 }}
            />
            <ARKit.Plane
              position={{ x: 0.4, y: 0.4, z: zPosition }}
              shape={{ width: 0.1, height: 0.1 }}
            /> */}
            {this.state.showNote && <Note object={this.state.noteObject}/>}
            {this.state.loading && <Loading /> }
            {this.state.errorMsg && <Error />}
        </ARKit>
        </Row>
        <Row size={15}>
        <Button title="Do something" onPress={this.renderLikeAnythingPlease}/>
        </Row>
      </Grid>
      </TouchableWithoutFeedback>
    );
  }
}