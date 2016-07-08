'use strict'
import React, {Component} from 'react';
import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    View,
}from 'react-native';

export default class JobCell extends Component{
    render(){
        const {jobData} = this.props;
        return(
            <TouchableHighlight underlayColor="#F5FCFF" onPress={this.props.selectedCell}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb}
                               source={{uri: jobData.logo}}
                        />
                        <View style={{flex:2, marginLeft:10,marginRight:10,}}>
                            <Text style={{fontSize:16}}>{jobData.title}</Text>
                            <Text style={{marginTop:8, marginBottom:8}}>{jobData.company}</Text>
                            <Text style={{color:'#999'}}>{jobData.info}</Text>
                        </View>

                        <View style={{flex:1}}>
                            <Text style={{color:'#999', textAlign: 'right', marginBottom: 8}}>{jobData.date}</Text>
                            <Text style={{color:'red', textAlign:'right'}}>{jobData.salary}</Text>
                        </View>

                    </View>

                    <View style={styles.row}>
                        <Text style={styles.tag}>{jobData.companyPosition}</Text>
                        <Text style={styles.tag}>{jobData.companyPerson}</Text>
                        <Text style={styles.tag}>{jobData.companyService}</Text>
                    </View>
                    <View style={styles.separate}/>

                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    thumb:{
        width:64,
        height:64,
    },
    row:{
        flexDirection:'row',
        padding:10,
    },
    separate:{
        height:1,
        backgroundColor:'#E8E8E8'
    },
    tag:{
        borderRadius:8,
        paddingLeft:5,
        paddingRight:5,
        borderColor: '#E8E8E8',
        borderWidth:1,
        fontSize:12,
        marginLeft:5,
        marginRight:5,
        lineHeight:20,
        paddingBottom:5,
        color:'#999',

    }
})