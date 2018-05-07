/**
 * Created by zerowolf Date: 2018/4/25 Time: 上午10:50
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView,TextInput
} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../../containers/global/BaseComponent';
class FindPsw extends BaseComponent {

    constructor(props) {
        super(props);

        this.state={
            phone:'',
            verifyCode:'',
            newPsw:'',
            newPswSure:''
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center',}}>
                <MyTabView titleColor={'black'} title={'找回密码'}
                           navigation={this.props.navigation}/>
                <View style={{
                    margin: 10,
                    marginTop:100,
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'grey',
                        width: 100,
                        marginLeft: 10
                    }}>请输入手机号</Text>



                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                phone: text
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
                        style={{fontSize: 16, color: 'grey', width: 90, marginLeft: 10}}>验证码</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                verifyCode: text
                            })
                        }}/>
                    <Text style={{
                        width: 90,
                        fontSize: 14,
                        color: 'black',
                        backgroundColor: 'transparent',
                        paddingRight: 10

                    }}
                          onPress={() => {
                              // this.props.navigation.navigate('FindPsw')
                          }}>手机验证码</Text>


                </View>

                <View style={{
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    margin: 10,
                    alignItems: 'center'
                }}>
                    <Text
                        style={{fontSize: 16, color: 'grey', width: 90, marginLeft: 10}}>新密码</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                newPsw: text
                            })
                        }}/>

                </View>

                <View style={{
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    margin: 10,
                    alignItems: 'center'
                }}>
                    <Text
                        style={{fontSize: 16, color: 'grey', width: 90, marginLeft: 10}}>确认密码</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                newPswSure: text
                            })
                        }}/>

                </View>


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

            </View>);
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }
};

export default connect(mapStateToProps)(FindPsw);

