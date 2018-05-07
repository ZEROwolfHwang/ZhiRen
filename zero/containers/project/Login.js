/**
 * Created by zerowolf Date: 2018/4/25 Time: 上午10:23
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ListView,
    TextInput,Modal,ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../../containers/global/BaseComponent';
import SizeUtil from "../../utils/SizeUtil";
import FuzzyQuery from "./FuzzyQuery";
import TextInputDrop from "./TextInputDrop";

export default class Login extends BaseComponent{

    // static defaultProps = {
    //     businessName:PropTypes.number,
    //     username:PropTypes.string,
    //     password:PropTypes.number
    // }


    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            username: '',
            password: ''
        }
    }

    _renderLoading() {
        return (
            <ActivityIndicator size='small'/>
        );
    }

// <View style={{
//     margin:10,
//     width: width - 20,
//     height: 60,
//     borderColor: 'grey',
//     borderWidth: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop:100,
//
// }}>
//
//
// <Text style={{fontSize: 16, color: 'grey', width: 80,marginLeft:10}}>商户名称</Text>
//
// <TextInput
// underlineColorAndroid={'transparent'}
// ref = {ref=>this.textInput=ref}
// style={{flex:1,
//     color:'black',
//     textAlign: 'left',}}
// onChangeText={(text) => {
//     this.setState({
//         businessName:text
//     })
// }}/>
//
// </View>
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>

                <View style={{
                    marginTop:170,
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    margin: 10,
                    alignItems: 'center'
                }}>
                    <Text
                        style={{fontSize: 16, color: 'grey', width: 80, marginLeft: 10}}>用户名</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                username: text
                            })
                        }}/>

                </View>

                <View style={{
                    margin: 10,
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{fontSize: 16, color: 'grey', width: 80, marginLeft: 10}}>用户密码</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                password: text.toString()
                            })
                        }}/>
                    <Text style={{
                        width: 80,
                        fontSize: 14,
                        color: 'black',
                        backgroundColor: 'transparent',
                        paddingLeft: 10
                    }}
                          onPress={() => {
                              this.props.navigation.navigate('FindPsw')
                          }}>找回密码</Text>


                </View>








                {/*<FuzzyQuery onPress={() => {*/}
                {/*console.log('回调');*/}
                {/*this.setState({*/}
                {/*isSelect_KZ: true,*/}
                {/*isSelect_KD: false,*/}
                {/*isSelect_MS: true,*/}
                {/*isSelect_OS: false,*/}
                {/*current_month: 1,*/}
                {/*contract_price: 6.66,*/}
                {/*principal: 100,*/}
                {/*TextInput_prince: 0,*/}
                {/*current_bg_color: 'red',*/}

                {/*changeable: true*/}
                {/*});*/}
                {/*}}*/}
                {/*noTextState={() => {*/}
                {/*this.setState({*/}
                {/*changeable: false,*/}
                {/*isSelect_KZ: false,*/}
                {/*isSelect_KD: false,*/}
                {/*isSelect_MS: false,*/}
                {/*isSelect_OS: false,*/}
                {/*current_month: 0,*/}
                {/*contract_price: 0,*/}
                {/*principal: 0,*/}
                {/*TextInput_prince: 0,*/}
                {/*current_bg_color: '#d3cde0',*/}
                {/*})*/}
                {/*}}*/}
                {/*/>*/}

                <TouchableOpacity activeOpacity={0.5}
                                  style={{
                                      width: width - 20,
                                      height: 60,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      borderColor: 'grey',
                                      borderWidth: 1,
                                      margin: 10
                                  }}
                                  onPress={() => {
                                      this.props.navigation.navigate('CashCharge');
                                  }}>
                    <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>登录</Text>
                </TouchableOpacity>

                <TextInputDrop containStyle={{position: 'absolute', top: 80}}
                itemClick={(text)=>{
                    console.log(text);
                    this.setState({
                        businessName: text
                    });

                }}/>
            </View>);
    }
};
Login.propTypes = {
    businessName: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.number,
};
