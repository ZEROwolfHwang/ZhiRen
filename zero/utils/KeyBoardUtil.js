/**
 * Created by zerowolf on 2018/4/17.
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
    TextInput
} from 'react-native';

const {width, height} = Dimensions.get('window');

var widthP = (width - 70) / 7;
var heightP = widthP - 5;

import KeyBoardItem from './item/KeyBoardItem';
import provinceJson from '../../resource/province';
import AbcNum from '../../resource/AbcNum';
import Province from './keyboard/Province';
import ABC from './keyboard/ABC';
import NUM from './keyboard/NUM';
// var provinceJson = require('../../resource/province');
var AbcNumList = [];
var provinceKeyboard = [];
var abcKeyboard = [];
var numericKeyboard = [];
var province;
var abc;
var num;
export default class KeyBoardUtil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowProvince: false,
            isShowAbc: false,
            isShowNum: false,
            licence: ''
        }
    }

    componentWillMount() {
        console.log('重新加载1?');
        province=<Province onPress={(data) => {
            console.log(data);
            this.setState({
                isShowProvince: false,
                isShowAbc: true,
                licence: data.content
            })
        }}/>
        abc = <ABC onPress={(data) => {
            console.log(data);
            data.id === 26 ? this.setState({
                    // licence: this.state.licence.substring(0, this.state.licence.length - 1)
                    isShowProvince: true,
                    isShowAbc: false,
                })
                : this.setState({
                    licence: this.state.licence.concat(data.content),
                    isShowAbc: false
                });
        }}/>;
         num= <NUM onPress={(data) => {
            console.log(data);
            data.id === 26 ? this.state.licence.length===2?this.setState({
                    licence: this.state.licence.substring(0, this.state.licence.length - 1),
                    isShowAbc:true
                }):this.setState({
                    licence: this.state.licence.substring(0, this.state.licence.length - 1)
                })
                : this.setState({
                    licence: this.state.licence.length < 8 ?
                        this.state.licence.concat(data.content) :
                        this.state.licence
                });


        }}/>

    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'blue',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                {<TouchableOpacity
                    activeOpacity={1}

                    style={{
                        width: width - 20,
                        height: 40,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        this.setState({
                            isShowProvince: this.state.licence === '' ? true : false
                        })
                    }}
                    value={this.state.licence}>

                    <Text style={{color: 'red'}}>{this.state.licence}</Text>
                </TouchableOpacity>
                }


                {this.state.isShowProvince ? province : null}
                {this.state.isShowAbc ?
                    abc : null}
                {this.state.licence.length >= 2 ?
                    num : null}
            </View>


        );
    }
}

