
'use strict';

import React, {Component} from 'react';
import {
    View,
    Image,
    Navigator,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
    Text,
} from 'react-native';

import RouteHome from './RouteHome';
import RouteMe from './RouteMe';

import Message from  './Views/Message';
import Discover from './Views/Discover';

const HomeTab = 'homeTab';
const MessageTab = 'messageTab';
const DiscoverTab = 'DiscoverTab';
const MeTab = 'MeTab';

export default class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedTab: HomeTab,
          notifCount: 0,
        };
    }

    _setTab(tabID){
        this.setState({selectedTab: tabID});
    }

    _addNavigator(component, title){
        let data = null;
        return (
            <NavigatorIOS
                style={{flex:1}}
                barTintColor="FFF"
                titleTextColor="#666"
                tintColor="#666"
                initialRoute={{
                    component:component,
                    title:title,
                    passProps:{
                        data:data
                    }
                }}
            />
        );
    }

    _renderContent(pageName:string){
        var renderView;
        if(pageName === HomeTab){
            renderView = <RouteHome/>
        }else if(pageName === MessageTab){
            renderView = <Message/>
        }else if(pageName === DiscoverTab){
            renderView = <Discover/>
        }else if(pageName === MeTab){
            renderView = <RouteMe/>
        }

        return(
            <View style={styles.pageView}>
                {renderView}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS
                    tintColor="#11a984"
                    barTinColor="#FFFFFF"
                >
                    <TabBarIOS.Item
                         title="首页"
                         icon={require('./images/icon_home_nor.png')}
                         selected = {this.state.selectedTab === HomeTab}
                         onPress={() => {this.setState({
                              selectedTab:HomeTab
                         });}}
                    >
                        {this._renderContent(HomeTab)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="消息"
                        icon={require('./images/icon_message_nor.png')}
                        selected = {this.state.selectedTab === MessageTab}
                        onPress={() => this._setTab(MessageTab)}
                    >
                        {this._renderContent(MessageTab)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={require('./images/icon_search.png')}
                        title="发现"
                        selected={this.state.selectedTab === DiscoverTab}
                        onPress={() => {this.setState({selectedTab: DiscoverTab});}}
                    >
                        {this._renderContent(DiscoverTab)}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="我"
                        icon={require('./images/icon_user_nor.png')}
                        selected={this.state.selectedTab === MeTab}
                        onPress={() => {this.setState({selectedTab: MeTab})}}
                    >
                        {this._renderContent(MeTab)}
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tabContent: {
        flex:1,
    },
    pageView:{
        flex:1,
    },
    tabText: {
        margin:50,  
    },
    text:{
        marginTop:20,
    }
});