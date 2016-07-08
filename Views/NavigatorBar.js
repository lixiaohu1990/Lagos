'use strict'
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class NavigatorBar extends Component{
    render(){
        return(
                <View style={{backgroundColor:'#FFF'}}>
                    <View style={styles.navigatorRow}>
                        <TouchableOpacity
                            onPress={() => {
                    const {navigator} = this.props;
                    if (navigator){
                        navigator.pop();
                    }
                  }}>
                            <Image style={styles.backIcon} source={require('../images/icon_back.png')}></Image>
                        </TouchableOpacity>
                        <Text style={{flex:1, fontSize:16, textAlign:'center'}}>{this.props.title}</Text>

                    </View>
                    <View style={styles.separator}/>
                </View>


        );


    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backIcon:{
        width:30,
        height:30,
    },
    separator: {
        backgroundColor:'#E8E8E8',
        height:1,
        marginTop:10,
    },
    navigatorRow:{

        flexDirection:'row',
        marginTop:20,
        paddingLeft:10,
        justifyContent:'center',
        alignItems:'center',
    },
})