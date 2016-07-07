'use strict';


import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
}from 'react-native';
import MainPage from './MainPage';
export default class Splash extends Component {

    componentDidMount() {
        var {navigator} = this.props;
        this.timer = setTimeout(() => {
            navigator.replace({
               name: "MainPage",
               component:MainPage,
            });
        },2000);
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./images/hello_page_bg.png')}
                       style={styles.backgroundImage}
                />
            </View>
        );

    }
    
}


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
    },
    backgroundImage: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:null,
        height:null,
        backgroundColor:'transparent',
    },
});