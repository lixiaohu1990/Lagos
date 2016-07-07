'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Messgae extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>message</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
});