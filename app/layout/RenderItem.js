import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class RenderItem extends Component {

    render() {
        if(this.props.type=='coming'){
            return (
                <TouchableOpacity onPress={this.props.handler} style={styles.touchableOpacity} activeOpacity={0.8}>
                    <View style={styles.container}>
                        <Image source={{uri: this.props.item.subject.images.medium}}
                               style={styles.renderImage}/>
                        <Text style={styles.renderTitle} numberOfLines={8}>{this.props.item.subject.title}</Text>
                        <Text style={styles.renderNum}>{this.props.item.subject.rating.average}</Text>
                    </View>
                </TouchableOpacity>
            );
        }else{
            return (
                <TouchableOpacity onPress={this.props.handler} style={styles.touchableOpacity} activeOpacity={0.8}>
                    <View style={styles.container}>
                        <Image source={{uri: this.props.item.images.medium}}
                               style={styles.renderImage}/>
                        <Text style={styles.renderTitle} numberOfLines={8}>{this.props.item.title}</Text>
                        <Text style={styles.renderNum}>{this.props.item.rating.average}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }

}

const styles = StyleSheet.create({
        renderItem: {
            flex: 1,
            backgroundColor: '#f2f2f2',
        },
        touchableOpacity: {
            margin: 3,
            backgroundColor: '#ffffff',
            borderRadius: 7,
        },
        container: {
            backgroundColor: '#ffffff',
            alignItems: 'center',
            borderRadius: 7,
        },
        renderImage: {
            width: screenWidth / 3.15,
            height: screenWidth / 2,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7
        },
        renderTitle: {
            fontSize: 12,
            color: '#323232',
        },
        renderNum: {
            color: '#FF6347',
        },
    }


);



