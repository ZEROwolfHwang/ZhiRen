/**
 * Created by zerowolf Date: 2018/4/25 Time: 上午9:27
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../../containers/global/BaseComponent';
import ButtonView from "../../views/ButtonView";



export default class SagaTest extends BaseComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'Saga测试'}
                           navigation={this.props.navigation}/>

                <ButtonView onPress={()=>{

                }}/>
            </View>)
    }
}
