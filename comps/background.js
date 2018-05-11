import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-ionicons';


class BackgroundImage extends Component {

    render() {
        return (
            <Image source={{ uri: 'https://images.unsplash.com/photo-1513127971914-6a8656fc9718?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=177c1df46cfb56093e949576a8485bcb&auto=format&fit=crop&w=632&q=80'}}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
 
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

export default BackgroundImage;