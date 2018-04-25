import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const width = '70%';
const height = '40%';

export default class App extends Component {
  render() {
    return (
     <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'lightgreen'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'darkgreen'}} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7AC36A',
  },
  box: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3D1B0',
  },
  text: {
    fontSize: 18,
  },
});
