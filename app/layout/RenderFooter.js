import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class RenderFooter extends Component{

    render() {
        return (
            <View style={styles.container_footer}>
                <ActivityIndicator style={{marginTop:5}}/>
                <Text style={{marginTop:10,marginBottom:5,color:'#7B68EE'}}>正在加载更多数据...</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container_footer:{
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems:'center',
    },
});

