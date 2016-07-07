'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Me</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:200,
        backgroundColor:'red',
    },
});