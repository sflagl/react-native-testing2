import React, { Component } from 'react';
import { View } from 'react-native';
import { ARKit } from 'react-native-arkit';

const zPosition = -2

export default class ReactNativeARKit extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
          onLightEstimation={e => console.log(e.nativeEvent)}

          // event listener for (horizontal) plane detection
          onPlaneDetected={anchor => console.log(anchor)}

          // event listener for plane update
          onPlaneUpdated={anchor => console.log(anchor)}

          // arkit sometimes removes detected planes
          onPlaneRemoved={anchor => console.log(anchor)}

          // event listeners for all anchors, see [Planes and Anchors](#planes-and-anchors)
          onAnchorDetected={anchor => console.log(anchor)}
          onAnchorUpdated={anchor => console.log(anchor)}
          onAnchorRemoved={anchor => console.log(anchor)}

          // you can detect images and will get an anchor for these images
          detectionImages={[{ resourceGroupName: 'DetectionImages' }]}
          onARKitError={console.log} // if arkit could not be initialized (e.g. missing permissions), you will get notified here
          >
            <ARKit.Box
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
            />
            <ARKit.Text
              text="ARKit is Cool!"
              position={{ x: 0, y: 0.6, z: zPosition }}
              font={{ size: 0.15, depth: 0.05 }}
            />
        </ARKit>
      </View>
    );
  }
}