import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import MovieItem from './MovieItem';

export default class Movie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_bar}>
                        <Text style={styles.container_title}>豆瓣</Text>
                </View>
                <ScrollableTabView
                    style={styles.container}
                    initialPage={0}
                    tabBarInactiveTextColor='#323232'
                    tabBarActiveTextColor='#3071b9'
                    tabBarBackgroundColor='#f2f2f2'
                    tabBarUnderlineStyle={{backgroundColor:'#329cff',height:1}}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{height: 40,borderWidth:0,elevation:2}}
                            tabStyle={{height: 39}}
                            underlineHeight={4}/>}>
                    <MovieItem type={'in_thread'} tabLabel='正在热映' navigation={this.props.navigation}></MovieItem>
                    <MovieItem type={'top_250'} tabLabel='TOP250' navigation={this.props.navigation}></MovieItem>
                    <MovieItem type={'coming'} tabLabel='即将上映' navigation={this.props.navigation}></MovieItem>
                </ScrollableTabView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    container_bar:{
        backgroundColor: '#329cff',
        justifyContent: 'center',
        width: '100%',
        height: 50,
    },
    container_title:{
        color: '#ffffff',
        fontSize: 16,
        marginLeft: 15,
    },

});

