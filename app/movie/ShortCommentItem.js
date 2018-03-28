import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ShortCommentItem extends Component{

    render() {
        return(
            <View style={styles.container}>
                <Text>FileCommentItem</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

