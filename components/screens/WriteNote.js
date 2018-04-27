//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid"
import {Button} from 'react-native-elements'
import PicsDisplay from '../PicsDisplay'
import Input from '../Input'
import Note from '../Note'
import clarifai from '../../utils/clarifai'

// create a component
class WriteNote extends Component{

    constructor(props) {
        super(props);
        this.state = {
            note: '',
            concept: '',
        };
    }

    updateNote = (text) => {
        this.setState({note: text})
    }

    updateConcept = (text) => {
        this.setState({concept: text})
    }

    submitNote = () => {
        const {note, concept} = this.state
        console.log(`Concept: ${concept}`)
        console.log(`Note: ${note}`)
        //eventually make calls to our own server first
        clarifai.createImages(this.props.pictures, concept, 'test-model')
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <Grid style={styles.container}>
                    <Row size={15}>
                        <Input concept={this.state.concept} handleChange={this.updateConcept}/>
                    </Row>
                    <Row size={20}>
                        <PicsDisplay pictures={this.props.pictures}/>
                    </Row>
                    <Row size={40}>
                        <Note note={this.state.note} handleChange={this.updateNote}/>
                    </Row>
                    <Row size={10}>
                        <Button title="submit" onPress={this.submitNote}/>
                    </Row>
                </Grid>

            </TouchableWithoutFeedback>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default WriteNote;
