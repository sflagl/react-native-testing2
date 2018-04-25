//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';
import Camera from '../Camera'
import PicsDisplay from '../PicsDisplay'
import { Button } from 'react-native-elements'
// create a component
class TakePics extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false,
          pictures: [],
        };
    }

    addPics = (pictureObj) => {
        console.log('Adding pictures');
        const {pictures} = this.state;
        pictures.push(pictureObj);
        console.log(pictures);
        this.setState({pictures: pictures});
    }

    deletePics = (picKey) => {
        console.log(`Pic Key: ${picKey}`)
        const {pictures} = this.state;
        pictures.splice(picKey, 1);
        this.setState({pictures})

    }

    goToWriteNoteScreen = () => {
        if(this.state.pictures.length < 5){
            return (Alert.alert(
                'More Pictures Needed!',
                'You need to take at least 5 pictures before you can write a note',
                [
                  {text: 'OK'},
                ],
                { cancelable: true }
              ))
        }else{
            console.log('Going to screen...')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} addPics={this.addPics} />
                <PicsDisplay style={styles.PicsDisplay} pictures={this.state.pictures} deletePics={this.deletePics} />
                {/* <Text style={styles.button} title="Write Note">WRITE NOTE </Text> */}
                <Button buttonStyle={styles.button} title="Write Note" onPress={this.goToWriteNoteScreen}/>
            </View>
        );
    }


}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2c3e50',
        height: '90%',
        flexDirection: 'column',
        paddingBottom: '5%'
    },
    camera: {
        // flex: 6,
        backgroundColor: 'black',
        // height: '75%',
        width: '100%'
       
    }, 
    PicsDisplay: {
        // flex: 2,
        backgroundColor: 'blue',
        // height: '25%'
        
    },
    button: {
      width: '50%'
    }
});

//make this component available to the app
export default TakePics;
