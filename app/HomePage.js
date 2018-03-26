import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import *as MainAction from './redux/action/MainAction';
import {connect} from 'react-redux';
import Movie from './movie/Movie';
import Music from './music/Music';
import Book from './book/Book';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'movie',
        }
    }

    render() {
        const {initNavigate} = this.props;
        initNavigate(this.props.navigation);
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'movie'}
                        titleStyle={styles.tabText}
                        title="电影"
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_movie_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_movie.png")} />}
                        onPress={() => this.setState({selectedTab: 'movie'})}>
                        <Movie navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'music'}
                        titleStyle={styles.tabText}
                        title="音乐"
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_music_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_music.png")} />}
                        onPress={() => this.setState({selectedTab: 'music'})}>
                        <Music navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'book'}
                        titleStyle={styles.tabText}
                        title="书籍"
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./image/ic_book_uncheck.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/ic_book.png")} />}
                        onPress={() => this.setState({selectedTab: 'book'})}>
                        <Book navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    tabText: {
        color: '#000000',
        fontSize: 11
    },
    selectedTabText: {
        color: '#329cff'
    },
    icon: {
        width: 18,
        height: 18
    },
});

export default connect(
    (state) => ({
        navigate: state.mainReducers.navigate,
    }),
    (dispatch) => ({
        initNavigate: (navigate) => dispatch(MainAction.initNavigate(navigate)),
    })
)(HomePage)


