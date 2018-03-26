import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    RefreshControl,
    ToastAndroid,
    ActivityIndicator,
} from 'react-native';
import { fetchinThreadMovie,fetchTop250,comingMovie } from '../utils/HttpUtils';
import RenderItem from '../layout/RenderItem';
import MovieDetails from './MovieDetails';

var fetchData=null;

export default class MovieItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            footerState: false,
            dataSource: [],
        };
    }

    componentDidMount() {
        if(this.props.type=="in_thread"){
            fetchData=fetchinThreadMovie;
        }else if(this.props.type=="top_250"){
            fetchData=fetchTop250;
        }else{
            fetchData=comingMovie;
        }
        this._fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item,index)=>item.key = index}
                    ListFooterComponent={this._onRenderFooter}
                    renderItem={this._renderItem.bind(this)}
                    onEndReached={this._loreMore}
                    data={this.state.dataSource}
                    onEndReachedThreshold={1}
                    numColumns ={3}
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
        )
    }

    _renderItem =({item,index})=>{
        return(
            <RenderItem item={item} index={index} type={this.props.type} handler={()=>{
               this.props.navigation.navigate('MovieDetails',{movie:item});
            }}></RenderItem>
        );
    }

    _fetchData(){
        fetchData((json) => {
            let obj=json.subjects;
            this.setState({dataSource: obj,refreshing:false});
        });
    }

    _onRefresh(){
        fetchinThreadMovie((json) => {
            let obj=json.subjects;
            this.setState({dataSource: obj,refreshing:false});
        });
    }

    _loreMore=()=>{
        this.setState({footerState:true});
        fetchinThreadMovie((json) => {
            let temp=this.state.dataSource.concat(json.subjects);
            console.log(temp);
            this.setState({dataSource: temp,footerState:false});
        });
    }

    _onRenderFooter=()=>{
        if(this.state.footerState){
            return(
                <View style={styles.container_footer}>
                    <ActivityIndicator style={{marginTop:5}}/>
                    <Text style={{marginTop:10,marginBottom:5,color:'#7B68EE'}}>正在加载更多数据...</Text>
                </View>
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
        backgroundColor: '#f2f2f2'
    },
    container_footer:{
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems:'center',
    },
});

