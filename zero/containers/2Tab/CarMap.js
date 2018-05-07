/**
 * Created by zerowolf on 2018/4/16.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, WebView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../global/BaseComponent';
import TouchableItem from "react-navigation/src/views/TouchableItem";

let thisWebView = null;
const url = Platform.select({
    ios: 'http://localhost:63342/ZhiRen/zero/containers/2Tab/CarMap.html',


    // ios: 'http://www.baidu.com',

    android: 'file:///android_asset/web/CarMap.html',
});
import ToastExample from '../../utils/ToastExample';
import ImagePicker from '../../utils/ImagePicker';
import AMap from '../../utils/AMap';
import { NativeModules } from 'react-native';
export default class Navigator extends BaseComponent {
    constructor(props) {
        super(props);

    }

    patchPostMessageFunction = function () {
        var originalPostMessage = window.postMessage;

        var patchedPostMessage = function (message, targetOrigin, transfer) {
            originalPostMessage(message, targetOrigin, transfer);
        };

        patchedPostMessage.toString = function () {
            return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
        };

        window.postMessage = patchedPostMessage;
    };

    patchPostMessageJsCode = '(' + String(this.patchPostMessageFunction) + ')();';

    getTitle(url) {
        setTimeout(function () {
            // 防止postMessage崩溃
            var originalPostMessage = window.postMessage;
            var patchedPostMessage = function (message: any,
                                               targetOrigin: string,
                                               transfer?: any[]) {
                originalPostMessage(message, targetOrigin, transfer);
            };
            patchedPostMessage.toString = function () {
                return String(Object.hasOwnProperty).replace(
                    "hasOwnProperty",
                    "postMessage"
                );
            };
            window.postMessage = patchedPostMessage;
            window.postMessage(JSON.stringify({title: document.title}), url);
        }, 0);
    };

    titleJs = "(" + String(this.getTitle) + ")();";


    handleNavigationChange() {
        let a = new Date().getTime();
        const script = 'window.postMessage("' + a + '")';  // eslint-disable-line quotes
        thisWebView && thisWebView.injectJavaScript(script);
        // alert("df")
    }

    _onMessage(e) {
        alert(e.nativeEvent.data);
    }

    render() {
        const patchPostMessageFunction = function () {
            var originalPostMessage = window.postMessage;
            var patchedPostMessage = function (message, targetOrigin, transfer) {
                originalPostMessage(message, targetOrigin, transfer);
            };
            patchedPostMessage.toString = function () {
                return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
            };
            window.postMessage = patchedPostMessage;
        };
        const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>

                <WebView
                    ref={ (ref) => this.webview = ref}
                    // onMessage={(event)=>this._listener(event.nativeEvent.data)}
                    injectedJavaScript={patchPostMessageJsCode}
                    bounces={false}
                    scalesPageToFit={true}
                    source={{uri: url, method: 'GET'}}
                    style={{width: width, height: height}}
                    onLoadEnd={this.handleNavigationChange}
                    // injectedJavaScript={"document.addEventListener('message', function(e) {eval(e.data);});"}
                    onMessage={(event) => console.log(event.nativeEvent.data)}
                >

                </WebView>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    // this.webview.postMessage('window.postMessage("Title："+document.title);');

                    // this._postMessage()
                    ToastExample.show("heheheheheheheh", ToastExample.SHORT1);
                    console.log(ToastExample.SHORT1);
                    console.log(ToastExample.LONG1);
                    // NativeModules.ToastExample.show('hahaha',0)
                    // ImagePicker.pickImage()

                    //     .then((msg) => {
                    //         //此处为成功之后回调的信息（指的是：uri.toString() 的值 ）
                    //         console.log(msg);
                    //         alert(msg);
                    //     })
                    //     .catch((err) => {
                    //         //此处为失败之后回调的信息
                    //         alert(err);
                    //     });
                    AMap.openMap()
                        .then(msg=>{
                            console.log(msg);

                        }).then(err=>{
                        console.log(err);
                    })
                }
                }>
                    <Text>向webview传递数据</Text>

                </TouchableOpacity>
            </View>
        );
    }

    _webViewLoadEnd() {
        const script = 'console.log(document.body.scrollHeight)';
        // 插入一段js到webView
        // this.webView.injectJavaScript('window.postMessage(document.body.scrollHeight);');

        // RN侧发送消息给webView
        // webView侧执行 window.postMessage ，给RN侧发送消息
        this.webView.postMessage('window.postMessage(document.body.scrollHeight);');
    }

// 收到webView发给RN侧的消息
    _listener(message) {
        Alert.alert(message);
        const payload = JSON.parse(message);

        console.log(payload);

    }

    //向HTML发送数据
    _postMessage() {
        /*this.setState({isPostMessage: true, isHtml: true})

         setTimeout(() => {
         if (this.webview) {
         this.webview.postMessage('"Hello" 我是RN发送过来的数据');
         }
         }, 4000);*/
        this.webview.postMessage("Hello米西米西么么哒");
    }

    //接收HTML发出的数据
    onMessage = (e) => {
        let data = e.nativeEvent.data;

        console.log(data);
        console.log(data.toString());
        console.log(JSON.parse(data));


    }
}
