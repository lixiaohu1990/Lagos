'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Navigator,
} from 'react-native';
import Me from './Views/Me'
export default class RouteMe extends Component{

    render(){
        const defaultName = 'Me';
        const defaultComponent = Me;

        return(
            <Navigator
                initialRoute={{name:defaultName, component:defaultComponent}}
                configureScene={(route) => {return Navigator.SceneConfigs.HorizontalSwipeJump;}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
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