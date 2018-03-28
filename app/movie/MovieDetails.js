import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Image,
    Dimensions,

} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import FilmComment from './FilmComment';
import ShortComment from './ShortComment';
var screenWidth = Dimensions.get('window').width;

export default class MovieDetails extends Component{

    render() {
        return (
            <View style={styles.container}>
                {this._renderDetailPic()}
                {this._renderMovieDetails()}
            </View>
        )
    }

    _renderDetailPic(){
        const movie=this.props.navigation.state.params.movie;
        console.log(movie)
        return(
            <View>
                {this._renderDetailsBar(movie)}
                <View style={styles.render_detail}>
                    <Animated.Image
                        style={{width:screenWidth,height:200,backgroundColor:'grey'}}
                        source={{uri:movie.images.large}}>
                    </Animated.Image>
                    <View style={styles.render_detail_tip}>
                        <Text style={styles.details_bar_title}>{movie.title}</Text>
                        <TouchableOpacity>
                            <Text style={{color:'white'}}>{movie.title}张剧照</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    _renderDetailsBar(movie){
        return(
            <View style={styles.details_bar}>
                <Image style={styles.details_bar_img} source={require("../image/ic_back.png")}></Image>
                <Text style={styles.details_bar_title}>{movie.title}</Text>
                <Image style={styles.details_bar_img_right} source={require("../image/ic_more.png")}></Image>
            </View>
        );
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
                <FilmComment tabLabel='影评' movieId={this.props.navigation.state.params.movie.id}></FilmComment>
                <ShortComment tabLabel='短评' movieId={this.props.navigation.state.params.movie.id}></ShortComment>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        details_bar: {
            flexDirection: 'row',
            backgroundColor: '#329cff',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
        },
        details_bar_img: {
            width: 30,
            height: 30,
            marginLeft: 10,
        },
        details_bar_img_right: {
            width: 20,
            height: 20,
            marginRight: 10,
        },
        details_bar_title: {
            color: '#ffffff',
            fontSize: 15,
        },
        render_detail_tip: {
            position: 'absolute',
            marginBottom: 10,
            paddingBottom: 10,
            marginLeft: 10,
        },
        render_detail:{
            justifyContent: 'flex-end',
        }
    }
);

