/**
 * Created by zerowolf Date: 2018/4/26 Time: 上午11:03
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Alert,  TouchableOpacity, Image, Dimensions, ListView,ScrollView,
    PanResponder
} from 'react-native';

import { createAnimatableComponent, View, Text } from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../../views/MyTabView';
import BaseComponent from '../../global/BaseComponent';
export default class RedTopPage extends Component {

    constructor(props) {
        super(props);


        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

                // gestureState.{x,y}0 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}

                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,


            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。

                console.log(gestureState.dy);

                console.log(JSON.stringify(gestureState));
                if (gestureState.dy <= -120) {
                    console.log('距离足够');
                    this.props.onSlide();
                }

            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });

    }

    render() {
        return (
                <View style={{
                    width: width,
                    height:height,
                    backgroundColor: 'red'
                }}
                      bounces={true}
                        {...this._panResponder.panHandlers}/>
         );
    }
}
