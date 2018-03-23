import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    View,
    Text,
    Button,
    ToastAndroid,
} from 'react-native';

class Music extends Component{
    render(){
        const {navigate}=this.props;
        return(
            <View style={styles.container}>
                <Button
                    title="Press Purple"
                    color="#841584"
                    onPress={()=>{this.onButtonPress(navigate)}}/>
                <Button
                    title="Press Back"
                    color="#841584"
                    onPress={()=>{this.onButtonBack(navigate)}}/>
            </View>
        )
    }

    onButtonPress(navigation){
        navigation.navigate("Music",{user:'Jack1'})
    }

    onButtonBack(navigation){
        ToastAndroid.show(navigation.toString(), ToastAndroid.LONG);
        this.props.navigation.goBack();
    }

}


export default connect(
    (state)=>({
        navigate: state.mainReducers.navigate,
    }),
    (dispatch)=>({
        initNavigate: (navigate)=>dispatch(MainAction.initNavigate(navigate)),
    })
)(Music)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

