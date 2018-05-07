/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {Root} from "native-base";
import {
    Platform,
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import FirstTab from '../containers/1Tab/FirstTab';
import SecondTab from '../containers/2Tab/SecondTab';
import CarMap from '../containers/2Tab/CarMap';
import ThirdTab from '../containers/3Tab/ThirdTab';
import FourthTab from '../containers/4Tab/FourthTab';
// import BaseComponent from '../containers/global/BaseComponent';

import Icon from 'react-native-vector-icons/Ionicons'

const TabNavigation = TabNavigator({
    FirstTab: {
        screen: FirstTab, navigationOptions: {
            tabBarLabel: '钱包',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-home-outline" size={18} color={tintColor}/>
            )
        }
    },
    CarMap: {
        screen: CarMap, navigationOptions: {
            tabBarLabel: '理财',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-appstore" size={18} color={tintColor}/>

            )
        }
    },

    ThirdTab: {
        screen: ThirdTab, navigationOptions: {
            tabBarLabel: '我的投资',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-disc-outline" size={18} color={tintColor}/>

            )
        }
    },
    FourthTab: {
        screen: FourthTab, navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="md-person" size={18} color={tintColor}/>

            )
        },
    }
}, {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载,
    swipeEnabled: true,
    animationEnabled: false,
    mode: 'modal',
    headerMode: 'none',
    // initialRouteName: 'FirstTab',
    initialRouteName: 'CarMap',
    // initialRouteName: 'ThirdTab',
    // initialRouteName: 'FourthTab',
    tabBarOptions: {
        showIcon: true,
        pressOpacity: 0.8,
        activeTintColor: '#e64747', // 文字和图片选中颜色
        inactiveTintColor: '#707070', // 文字和图片默认颜色
        style: {
            height: 45,
            backgroundColor: 'white',
            zIndex: 0,
            position: 'relative'
        },

        labelStyle: {
            fontSize: 12,
            paddingVertical: 0,
            marginTop: Platform.OS === 'android' ? 0 : 0
        },

        // iconStyle: {
        //     marginTop: 10
        // },
        tabStyle: {
            backgroundColor: 'white',
        },
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
    }
});

import BaseComponent from '../containers/global/BaseComponent';
import TestComponent from '../containers/global/TestComponent';
import RegisterApp from '../containers/regist/RegisterApp';
import KeyBoardUtil from '../utils/KeyBoardUtil';


import IconActionSheet from '../../actionsheet/icon';
import MorePicker from '../containers/xModle/morePicker/MorePicker';
import PageAnimal from '../containers/xModle/pageAnima/PageAnimal';
// import RegularActionSheet from '../../actionsheet/regular';
// import KeyBoardUtil from '../../actionsheet/icon';
// import KeyBoardUtil from '../../actionsheet/icon';
// import KeyBoardUtil from '../../actionsheet/icon';
import Student1 from '../containers/4Tab/Student1';
import SagaTest from '../containers/4Tab/SagaTest';
import Login from '../containers/project/Login';
import CashCharge from '../containers/project/CashCharge';
import Student from '../containers/4Tab/Student';
import HelloBack from '../containers/4Tab/HelloBack';
import FindPsw from "../containers/project/FindPsw";
import TestPage from "../containers/project/panresponder/TestPage";
import PageAnimal1 from "../containers/xModle/pageAnima/PageAnimal1";
import PageAnimal2 from "../containers/xModle/pageAnima/PageAnimal2";
import AnimalTest from "../containers/xModle/pageAnima/AnimalTest";
import MyPanResponder from "../containers/project/panresponder/MyPanResponder";
import ModalTest from "../containers/project/ModalTest";

const SNavigator = StackNavigator({

        // Sign: {screen: SignPage},
        // Splash: {screen: Splash},

        // RegisterApp: {screen: RegisterApp},
        // IconActionSheet: {screen: IconActionSheet},


        // AnimalTest: {screen: AnimalTest},
        //     PageAnimal2: {screen: PageAnimal2},
        //     PageAnimal1: {screen: PageAnimal1},
        //     PageAnimal: {screen: PageAnimal},
        //

        // Test: {screen: Test},
        // ModalTest: {screen: ModalTest},

        CashCharge: {screen: CashCharge},
        Login: {screen: Login},
        // KeyBoardUtil: {screen: KeyBoardUtil},
        MyPanResponder: {screen: MyPanResponder},
        TestPage: {screen: TestPage},

        FindPsw: {screen: FindPsw},
        // SagaTest: {screen: SagaTest},
        // Student1: {screen: Student1},
        Tab: {screen: TabNavigation},
        // Student: {screen: Student},
        // HelloBack: {screen: HelloBack},
        MorePicker: {screen: MorePicker},
        TestComponent: {screen: TestComponent},
        BaseComponent: {screen: BaseComponent},
        FirstTab: {screen: TabNavigation, path: 'FirstTab'},
        SecondTab: {screen: TabNavigation, path: 'SecondTab'},
        ThirdTab: {screen: TabNavigation, path: 'ThirdTab'},
        FourthTab: {screen: TabNavigation, path: 'FourthTab'},

    }, {
        // initialRouteName: 'SecondTab',
        headerTitle: '分红计划',
        header: null,
        headerBackTitle: null,

    }
);

/*export default () =>
    <Root>
        <SNavigator />
    </Root>;*/
export default SNavigator;


