'use strict'
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import NavigatorBar from '../NavigatorBar';
export default class HomeDetail extends Component{
    render(){
        const {job} = this.props;
        return(
            <View style={styles.container}>
               <NavigatorBar title="职位详情" navigator={this.props.navigator}/>

                <View style={styles.content}>
                    <Text>{job.title}</Text>
                </View>

            </View>
        );


    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }


})