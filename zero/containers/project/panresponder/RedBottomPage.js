/**
 * Created by zerowolf Date: 2018/4/26 Time: 上午11:03
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Alert, TouchableOpacity, Image, Dimensions, ListView,
    PanResponder
} from 'react-native';

const {width, height} = Dimensions.get('window');

import {createAnimatableComponent, View, Text} from 'react-native-animatable';

import {TabNavigator,TabBarTop} from 'react-navigation';

class TabOne extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'yellow',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Text>1111111111</Text>
            </View>);
    }
}

class TabTwo extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor:'green',justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text>2222222</Text>
            </View>)
    }
}

class TabThree extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor:'purple',justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text>33333333333</Text>
            </View>)
    }
}


const TabNavigation = TabNavigator({
    FirstTab: {
        screen: TabOne, navigationOptions: {
            tabBarLabel: '钱包',

        }
    },
    CarMap: {
        screen: TabTwo, navigationOptions: {
            tabBarLabel: '理财',

        }
    },

    ThirdTab: {
        screen: TabThree, navigationOptions: {
            tabBarLabel: '我的投资',

        }
    },

}, {
    // activeBackgroundColor:'transparent',
    // inactiveBackgroundColor:'transparent',
    initialRouteName:'FirstTab',
    tabBarOptions: {
        backgroundColor:'white',
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        activeBackgroundColor:'black',
        inactiveBackgroundColor:'yellow',
        labelStyle: {
            fontSize: 12,
            paddingVertical: 0,
            marginTop: Platform.OS === 'android' ? 0 : 0,
        },
        style :{
            backgroundColor:'white',
            elevation:0
        },

        // iconStyle: {
        //     marginTop: 10
        // },
        tabStyle: {
            backgroundColor: 'transparent',
        },
        indicatorStyle: {
            // height: 10 , // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            backgroundColor:'red'
        },
    },
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
});


export default class RedBottomPage extends Component {

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
                if (gestureState.dy >= 120) {
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
        const Tab = <TabNavigation/>
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: 'blue'
            }}
                  bounces={true}
                  {...this._panResponder.panHandlers}>

                {Tab}

            </View>
        );
    }
}
