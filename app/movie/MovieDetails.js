import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import FilmComment from './FilmComment';
import ShortComment from './ShortComment';
var screenWidth = Dimensions.get('window').width;

export default class MovieDetails extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderDetailPic()}
                {this._renderMovieDetails()}
            </View>
        )
    }

    _renderDetailPic(){
        const movie=this.props.movie;
        return(
            <View>
                {this._renderDetailsBar(movie)}
                <View>
                    <Animated.Image
                        style={{width:screenWidth,height:100,backgroundColor:'grey'}}
                        source={{uri:movie.images.large}}>
                        <View>
                            <Text>{movie.title}</Text>
                            <TouchableOpacity>
                                <Text style={{color:'white'}}>10张剧照</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.Image>
                </View>
            </View>
        );
    }

    _renderDetailsBar(movie){
        <View>
            <Text>{movie.title}</Text>
        </View>
    }

    _renderMovieDetails(){
        return(
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
                <FilmComment tabLabel='影评'></FilmComment>
                <ShortComment tabLabel='短评'></ShortComment>
            </ScrollableTabView>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

