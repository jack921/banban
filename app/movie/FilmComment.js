import React, { Component } from 'react';
import {
    RefreshControl,
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

import { fetchMovieReview } from '../utils/HttpUtils';
import FilmCommentItem from './FileCommentItem';
import RenderFooter from '../layout/RenderFooter';

var start=0;

export default class FilmComment extends Component{

    constructor(props){
        super(props);
        this.state={
            context:'FilmComment',
            refreshing: true,
            dataSource: [],
        }
    }

    componentDidMount(){
        fetchMovieReview(this.props.movieId,start,(json)=>{
            console.log(json.reviews);
            this.setState({dataSource:json.reviews,refreshing:false});
        });
    }

    render(){
        return(
          <View style={styles.container}>
              <FlatList
                  keyExtractor={(item,index)=>item.key = index}
                  ListFooterComponent={this._onRenderFooter}
                  renderItem={this._renderItem.bind(this)}
                  onEndReached={this._loreMore}
                  data={this.state.dataSource}
                  onEndReachedThreshold={1}
                  refreshControl={
                      <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh}
                          colors={['#9370DB','#1E90FF','#87CEEB']}
                          progressBackgroundColor="#F8F8FF"
                          tintColor="#ff0000"
                          titleColor="#00ff00"
                          title="Loading..."/>
                  }>
              </FlatList>
          </View>
        );
    }

    _loreMore=()=>{
        this.setState({refreshing:true});
        start+=20;
        fetchMovieReview(this.props.movieId,start,(json)=>{
            let temp=this.state.dataSource;
            temp.concat(json.reviews);
            console.log(temp);
            this.setState({dataSource:temp,refreshing:false});
        });
    }

    _renderItem=(item,index)=>{
        return(
            <FilmCommentItem comment={item}></FilmCommentItem>
        );
    }

    _onRefresh=()=>{
        start=0;
        fetchMovieReview(this.props.movieId,start,(json)=>{
            this.setState({dataSource:json.reviews,refreshing:true});
        });
    }

    _onRenderFooter=()=>{
        if(this.state.footerState){
            return(
                <RenderFooter></RenderFooter>
            )
        }else{
            return(
                <View></View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


