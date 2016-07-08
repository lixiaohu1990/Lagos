'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
} from 'react-native';

import JobCell from './Home/JobCell';
import JobData from './Home/JobData';
import JobDetail from './Home/JobDetail';
class  SearchBar extends Component{
    render(){
        return (
            <View style={styles.searchBar}>
                <Text style={{color:'#FFFFFF', fontSize: 20}}>
                    拉勾
                </Text>
                <View style={styles.searchInput}>
                    <Image style={styles.searchImage}
                           source={require('../images/icon_search.png')}
                    ></Image>
                    <Text style={styles.searchText}>输入职位或公司名字</Text>
                </View>

            </View>
        );
    }
}
export default class Home extends Component{

    constructor(props){
        super(props);
        let  ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        }
    }

    _genRows(): Array<Object>{
        return JobData;
    }
    selectJob(job: Object){
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'JobDeail',
                component: JobDetail,
                params: {
                    job: job
                }
            })
        }
    }
    _renderRow(jobData:Object, sectionID:number, rowID:number){
        return(<JobCell jobData={jobData} selectedCell={() => this.selectJob(jobData)
                                           }
        />);
    }
    render(){
        const resultList =
            <ListView
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                
            ></ListView>
        return(
            <View style={styles.container}>
                <SearchBar></SearchBar>
                {resultList}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        paddingBottom:48,
    },
    searchBar:{
        padding:10,
        backgroundColor:'#11a984',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    searchInput:{
        paddingTop:7,
        paddingBottom:7,
        marginLeft:10,
        marginRight:10,
        borderRadius:15,
        flex:1,
        flexDirection:'row',
        backgroundColor: '#0f9574',
        justifyContent:'center',
        alignItems:'center',
    },

    searchImage:{
        width:15,
        height:15,
        marginRight:8,
    },
    searchText:{
        color:'#14ba91',
        fontSize:13,
    },
    
});