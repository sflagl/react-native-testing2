//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid"
import Camera from '../Camera'
import PicsDisplay from '../PicsDisplay'
import { Button } from 'react-native-elements'
import {Redirect} from 'react-router-native'
import WriteNote from './WriteNote'
// create a component
class TakePics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            note: '',
            concept: '',
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
            this.setState({redirect: true})
        }
    }

    render() {
        if(this.state.redirect){
            return <WriteNote pictures={this.state.pictures}/>
        }
        return (
            <Grid style={styles.container}>
                <Row size={60}>
                    <Camera style={styles.camera} addPics={this.addPics} />
                </Row>
                <Row size={20}>
                    <PicsDisplay style={styles.PicsDisplay} pictures={this.state.pictures} deletePics={this.deletePics} />
                </Row>
                {/* <Text style={styles.button} title="Write Note">WRITE NOTE </Text> */}
                <Row styles={{alignItems: 'center'}} size={20}>
                    <Button buttonStyle={styles.button} title="Write Note" onPress={this.goToWriteNoteScreen}/>
                </Row>
            </Grid>
        );
    }


}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
        backgroundColor: 'blue',
        // height: '25%'
        
    },
    button: {
      width: '100%',
      justifyContent: 'center'
    }
});

//make this component available to the app
export default TakePics;
