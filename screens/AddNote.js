 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Textarea } from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid'
import PicsDisplay from '../comps/PicsDisplay'
import Button from '../comps/button'
import {TouchableWithoutFeedback, Keyboard, Text} from 'react-native'
import clarifai from '../utils/clarifai'

export class AddNote extends Component {
  constructor(props){
    super(props)

    this.state = {
      note: [],
      title: '',
      pictures: this.props.navigation.state.params.pictures,
      addObjectToNotes: this.props.screenProps.addObjectToNotes,
    }
  }

  submitNote = () => {
    const {note, title, pictures} = this.state
    //send pics to clarify
    clarifai.createImages(pictures, title, 'test-model')
    //add note and title to state
    normalPics = pictures.map(item => {
      return item.url
    })
    const newObj = {
      [title]: {
        name: title,
        note: note,
        pictures: normalPics
      }
    }

    this.state.addObjectToNotes(newObj)
    //redirect to homepage
    this.props.navigation.navigate('StartViewScreen')
  }

  changeNote = (num, text) => {
    const {note} = this.state
    note[num] = text 
    this.setState({note})

    console.log(text)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Grid>
        <Row size={2}>
          <Form style={{padding: 10, width: '100%'}}>
            <Item rounded style={{marginBottom:20, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
              <Input placeholder="Object Name" onChangeText={(text => this.setState({title: text}))}
              value={this.state.title}/>
            </Item>
            <Text style={{marginBottom:10, paddingLeft:10}}> Note </Text>
            <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
              <Input onChangeText={(text) => this.changeNote(0, text)} value={this.state.note[0]}/>
            </Item>
            <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
              <Input onChangeText={(text) => this.changeNote(1, text)} value={this.state.note[1]}/>
            </Item>
            <Item rounded style={{marginBottom:10, paddingLeft:10, backgroundColor: 'rgba(211, 211, 211, .4)'}}>
              <Input onChangeText={(text) => this.changeNote(2, text)} value={this.state.note[2]}/>
            </Item>
          </Form>
        </Row>

        <Row size={1}>
          <PicsDisplay pictures={this.state.pictures}/>
        </Row>

        <Row size={1}>
          <Col>
            <Button title="Submit Note" press={this.submitNote}/>
          </Col>
        </Row>

      </Grid>
      </TouchableWithoutFeedback>
    
    );
  }
}


export default AddNote;