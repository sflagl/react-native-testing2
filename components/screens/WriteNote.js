//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid"
import {Button} from 'react-native-elements'
import PicsDisplay from '../PicsDisplay'
import Input from '../Input'
import Note from '../Note'

// create a component
class WriteNote extends Component{

    constructor(props) {
        super(props);
        this.state = {
            note: '',
            concept: '',
        };
    }

    updateNote = () => {

    }

    updateConcept =(text) => {
        this.setState({concept: text})
    }

    submitNote = () => {

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
                        <Note note={this.state.note}/>
                    </Row>
                    <Row size={10}>
                        <Button title="submit" />
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
