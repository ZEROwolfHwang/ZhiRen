/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import {fetchRequest} from '../../utils/FetchUtil';
import s from '../../styles/AllStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Page_AutoPay, Pay_Navigator} from './reduce/index'
import BaseComponent from '../global/BaseComponent';
import * as Animatable from 'react-native-animatable';

import Animal from './Animal';
import Carousel from './carousel/index';


class FirstTab extends BaseComponent {

    constructor(props) {
        super(props);
        var url = "https://api.douban.com/v2/movie/top250?start=0&count=10";


    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
              {/*  <MyTabView titleColor={'black'} title={'第一页'}
                           navigation={this.props.navigation}/>
*/}
                {/*<Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>*/}
                {/*<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>*/}

                {/*<Animal/>*/}
                <Carousel/>
            </View>
        );


    }
}



export default connect()(FirstTab);
