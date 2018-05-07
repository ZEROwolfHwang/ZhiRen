/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';

import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
import moment from 'moment';
import NavigationUtil from '../../utils/NavigationUtil';

import {StackNavigator} from 'react-navigation';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import ButtonView from "../../views/ButtonView";

// import BaseComponent from '../../containers/global/BaseComponent';

class Person extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'person'}
                           navigation={this.props.navigation}/>
                <ButtonView onPress={()=>{
                    this.props.navigation.navigate('Student1');


                }}/>
            </View>)
    }
}

class Son extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'son'}
                           navigation={this.props.navigation}/>

            </View>)
    }
}

import Student1 from './Student1';
import HelloBack from './HelloBack';
import HelloBack111 from './HelloBack111';

const stack = StackNavigator({
    Student1: {screen: Student1},
    Son: {screen: Son},
    HelloBack: {screen: HelloBack},
    HelloBack111: {screen: HelloBack111}

}, {
    initialRouteName: 'Student1'
});
export default stack;

class FourthTab extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'第四页'}
                           navigation={this.props.navigation}/>

                <Text style={{color: 'blue', fontSize: 18}}>
                    4New Page !
                </Text>

            </View>
        );
    }
}
