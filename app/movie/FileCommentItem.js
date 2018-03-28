import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class FileCommentItem extends Component{

    render() {
        const comment =this.props.comment;
        return(
            <View style={styles.container}>
                <Text>{comment.item.title}</Text>
                <View>
                    <Image style={{width:50,height:50}} source={{uri:comment.item.author.avatar}}></Image>
                    <View>
                        <Text>{comment.item.author.name}</Text>
                        <Text>{comment.item.created_at}</Text>
                        <Text>{comment.item.summary}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

