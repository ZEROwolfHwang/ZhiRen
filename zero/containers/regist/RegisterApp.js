import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, TextInput
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../global/BaseComponent';
import MyTextInput from "../../views/MyTextInput";
import ButtonView from "../../views/ButtonView";
import {fetchRequest}from "../../utils/FetchUtil";
import TimerButton from "./item/TimerButton";
import TextInputRightButton from "./item/TextInputRightButton";


export default class RegisterApp extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            phone: '13262975235',
            inputValue: "",
        }
        this.onChange = this._onChange.bind(this);
    }
    _onChange(changeText) {
        this.setState({
            inputValue: changeText,
        });
    }
    _isNull(str) {
        let result = true;
        if (str === "" || str === undefined) {
            result = true;
        }

        if (str.length > 0) {
            result = false;
        }
        return result;
    }
    _getRightButtonView() {
        //右侧按钮图
        let source = this.props.source ? this.props.source : require('../../../resource/image/qianbao.png');
        return (
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.closeOpacityStyle}
                              onPress={() => {
                                  this.setState({inputValue: ""})
                              }}>
                <Image style={styles.closeStyle}
                       source={source}/>
            </TouchableOpacity>)
    }

    //清除输入款中的值
    clearInputValue() {
        this.setState({inputValue: ""})
    }

    //获取输入款中的值
    getInputValue() {
        return this.state.inputValue;
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTextInput onChangeText={(text) => {
                    this.setState({
                        phone: text
                    })
                }}/>
                <ButtonView title={'注册'}
                            onPress={() => {
                                console.log(this.state.phone);
                                fetchRequest("http://localhost:8080/ThirdServlet", 'POST')
                                    .then(res => {
                                        console.log(res);
                                    })
                                    .then(err => {
                                        console.log(err);
                                    })

                            }}/>

                <View style={{
                    width: width,
                    height: 50,
                    backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{width: 80,fontSize: 18, color: 'black', backgroundColor: 'transparent'}}>
                        手机号
                    </Text>
                    <TextInputRightButton
                        numberOfLines={1}
                        underlineColorAndroid="transparent"
                        maxLength={50}
                        style={{
                            fontSize: 16,
                            color: "#333333",
                            width: width-100,//给TextInput设置宽度，根据需要来
                        }}
                        ref={(c) => this.email = c}
                        onButtonClick={()=>{
                            //根据需要自己控制
                            this.email.clearInputValue();
                        }}
                        placeholder={"请输入您的邮箱"}
                        placeholderTextColor={"#999999"}/>
                    {/*<TextInput*/}
                        {/*underlineColorAndroid={'transparent'}*/}
                        {/*style={{flex:1,height:50}}*/}
                        {/*placeholder={'13262975235'}*/}
                        {/*onChangeText={(text) => {*/}
                            {/*console.log(text);*/}

                        {/*}}/>*/}
                    {/*{this._isNull(this.state.inputValue) ? null : this._getRightButtonView()}*/}

                </View>

                <TimerButton enable={this.state.phone.length}
                             textStyle={{color: 'black'}}
                             timerCount={10}
                             onClick={(shouldStartCountting) => {
                                 this._requestSMSCode(shouldStartCountting)
                             }}/>
            </View>
        );

    }

    _requestSMSCode(shouldStartCountting) {

    }
}
RegisterApp.propTypes = {
    phone: PropTypes.string
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        closeStyle: {
            height: 18,
            width: 18,
        },
        closeOpacityStyle: {
            height: 54,
            width: 54,
            justifyContent: 'center',
        },
    }
)