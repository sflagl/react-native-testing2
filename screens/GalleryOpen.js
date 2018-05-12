import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ButtonOutline from '../comps/button-outline';
import ButtonSolid from '../comps/button';
import { Col, Row, Grid } from "react-native-easy-grid";
import { HeaderComp } from '../comps/header';


const { height, width } = Dimensions.get('window');

export class GalleryOpen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    
                    source: "https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                },
                {
                    
                    source: "https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                },
                {
                    
                    source: "https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=700&q=60"
                }
            ],
            object: this.props.navigation.state.params.obj
        }
    }

    static navigationOptions = ({ navigation }) => {

        return {
            header: <HeaderComp press1={() => navigation.navigate('StartViewScreen')} press2={() => navigation.navigate('HomeScreen')} />
        }
    };


    _renderItem = ({ item, index }) => {
        return (
            <View>

                <Image style={{ height: 300, width: '100%' }} source={{ uri: item}} />
               
            </View>
        );
    }

    render() {
        console.log('Rendering')
        console.log(this.props.navigation.state.params.obj)
        return (

            <Grid>
                <Row size={2}>
                    <View>
                        <View style={{
                            transform: [{
                                rotate: '0deg'
                            }], paddingTop:7,
                        }}>
                            <Carousel
                                inactiveSlideOpacity={0.6}
                                inactiveSlideScale={0.65}
                                firstItem={1}
                                sliderWidth={width}
                                itemWidth={width / 1.5}
                                data={this.state.object.pictures}
                                renderItem={this._renderItem}
                                containerCustomStyle={{ overflow: 'visible' }}
                                contentContainerCustomStyle={{ overflow: 'visible' }}
                            />

                        </View>
                    </View>
                </Row>
                <Row size={.3}>
                    <Text style={{ paddingTop:20,paddingLeft:20,paddingRight:20, paddingBottom:10,}}>{this.state.object.note[0]}</Text>
                </Row>
                <Row size={.3}>
                    <Text style={{ paddingTop:10 ,paddingLeft:20,paddingRight:20, paddingBottom:5,}}>{this.state.object.note[1]}</Text>
                </Row>
                <Row size={.3}>
                    <Text style={{ paddingTop:0 ,paddingLeft:20,paddingRight:20, paddingBottom:20,}}>{this.state.object.note[2]}</Text>
                </Row>
                <Row size={1}>
                    <Col>
                        {/* <ButtonOutline press={() => this.props.navigation.navigate('EditNoteScreen')} title="Submit" /> */}
                        <ButtonSolid press={() => this.props.navigation.navigate('StartViewScreen')} title="Home" />
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default GalleryOpen;