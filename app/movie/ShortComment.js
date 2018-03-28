import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { fetchMovieComment } from '../utils/HttpUtils';

var start=0;
export default class ShortComment extends Component{

    constructor(props){
        super(props);
        this.state={
            context:'ShortComment',
        }
    }

    componentDidMount(){
        console.log(this.props.movieId);
        fetchMovieComment(this.props.movieId,start,(json)=>{
            this.setState({context:json});
            console.log(json);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ShortComment</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

