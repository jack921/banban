import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class ShortComment extends Component{

    constructor(props){
        super(props);
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

