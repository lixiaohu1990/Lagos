'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import Resume from './Me/Resume'
class MeDefaultCell extends Component{

    render(){
        const imageSource = this.props.imageSource;
        const subTitle = this.props.subTitle;
        let subTitleView;
        if(subTitle){
            subTitleView = <View style={{alignItems:'center', justifyContent:'center'}}><Text style={styles.subtitle}>{subTitle}</Text></View>
        };
        return (
            <TouchableHighlight underlayColor='#E8E8E8' onPress={this.props.onPress}>
                <View>
                    <View style={[styles.row, {padding:10}]}>
                        <Image style={styles.thumb} source={imageSource}></Image>
                        <View style={{flex: 1, paddingLeft:10, justifyContent:'center'}}>
                            <Text style={styles.title}>{this.props.titleName}</Text>
                        </View>
                        {subTitleView}
                    </View>
                    <View style={styles.separator}/>
                </View>

            </TouchableHighlight>
        );
    }
}

export default class Home extends Component{
    _buttonPressed(title:string){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'Resume',
                component:Resume,
                params:{
                    title:title,
                }
            })
        }
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={{height:150}}>
                        <Image source={require('../images/user_photo_bg.png')}
                               style={styles.backgroundImage}
                        >
                            <Image source={require('../images/timg.jpeg')} style={styles.userImage}></Image>
                            <Text style={styles.userName}>lixiaohu</Text>
                        </Image>
                    </View>
                    <MeDefaultCell imageSource={require('image!icon_user_resume')}
                                   titleName="简历"
                                   onPress={this._buttonPressed.bind(this,'我的简历')}
                    ></MeDefaultCell>
                    <MeDefaultCell imageSource={require('image!icon_forget_password')}
                                   titleName="密保"
                                   subTitle="已开启"
                                   onPress={() =>{alert('this is 密保!')}}
                    ></MeDefaultCell>
                    <MeDefaultCell imageSource={require('image!icon_user_collect')}
                                   titleName="收藏"
                                   onPress={this._buttonPressed.bind(this,'我的收藏')}
                    ></MeDefaultCell>
                    <MeDefaultCell imageSource={require('image!icon_user_feedback')}
                                   titleName="意见反馈"
                                   onPress={this._buttonPressed.bind(this,'意见反馈')}
                    ></MeDefaultCell>
                    <MeDefaultCell imageSource={require('image!icon_user_setting')}
                                   titleName="更多设置"
                                   onPress={this._buttonPressed.bind(this,'更多设置')}
                    ></MeDefaultCell>

                </View>
            </ScrollView>


        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flex:1,
        flexDirection:'row',

    },
    thumb:{
        width:30,
        height:30,
    },
    separator:{
        height:1,
        backgroundColor:'#E8E8E8',
    },
    title:{
        fontSize:16,
    },
    subtitle:{
        fontSize:16,
        color:'#999',
    },
    backgroundImage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'stretch',
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,

    },
    userName:{
        fontSize:18,
        color: '#FFF',
    },
    
});