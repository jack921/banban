import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class MovieDetails extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.state.params.movie.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

