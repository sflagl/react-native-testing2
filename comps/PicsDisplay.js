//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Picture from './Picture'


// create a component
const PicsDisplay = (props) => {

    alertFunc = (picKey) => {
        return (Alert.alert(
            'Delete Photo',
            'Are you sure you want to delete this photo?',
            [
              {text: 'Cancel', onPress: () => {console.log('Not deleted')}, style: 'cancel'},
              {text: 'OK', onPress: () => {props.deletePics(picKey)}},
            ],
            { cancelable: false }
          ))
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} horizontal={true} >
            {
                props.pictures ?
                props.pictures.map((picture, ind) => {
                    return <Picture picture={picture} key={`picture-${ind}`} picKey={ind} alertFunc={this.alertFunc}/>
                }) :
                ('This is just a test so...')
            }
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        overflow: 'scroll',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    scrollView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

//make this component available to the app
export default PicsDisplay;
