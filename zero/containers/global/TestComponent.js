/**
 * Created by zerowolf on 2018/4/9.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,View,Dimensions,TouchableOpacity,Text
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from "../global/BaseComponent";

export default class Navigator extends BaseComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView title={'测试界面'}
                           navigation={this.props.navigation} leftView={true} hasRight={true}
                 // leftClick={()=>{
                 //     console.log('点击左侧按钮回调');
                 //
                 //     this.props.navigation.state.params.data({number: '123444', name: 'Name '});
                 // }}
                />
                <TouchableOpacity onPress={() => {
                    this.props.navigation.state.params.data({number: '123', name: 'Name '});
                    this.props.navigation.goBack();
                }}>
                    <Text style={{color: 'blue', fontSize: 18}}>
                        TestComponent !

                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};