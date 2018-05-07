import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';

const {width, height} = Dimensions.get('window');
var widthP = (width -10) / 7;
var heightP = widthP - 5;

var widthN = (width - 10) / 5;
import Icon from 'react-native-vector-icons/Feather';


export default class KeyBoardItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        var params = this.props;
        // let number = params.key;
        let number = params.id;
        let data = params.data;
        let type = params.type;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    padding: 2, width: type === 'numeric' ? widthN  //数字键盘
                        : type === 'abc' ? number === 26 ? widthP * 2 : widthP //最后一个错误时长度增长
                            : widthP,//一般情况
                    height: heightP,
                    elevation: 10,
                }}
                onPress={() => {
                    /* type ? number === 26 ?
                         this.props.onBackPress()
                         : this.props.onPress(data)
                         : this.props.onPress(data);*/
                    this.props.onPress(data)
                }}>

                <View
                    style={{
                        height: heightP - 4,
                        // marginLeft: type === 'numeric' ? number % 5 === 0 ? 5 : 0
                        //     : number % 7 === 0 ? 5 : 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 5,
                        shadowRadius: 10,
                        shadowOffset: {width: 1, height: 5},
                        shadowColor: 'grey',
                        shadowOpacity: 0.2,
                        elevation: 2,
                    }}>

                    {type ?
                        number === 26 ?
                            <Icon size={25} name={'delete'}
                                  style={{color: '#ff4c51', backgroundColor: 'transparent'}}/>
                            : this._getNormalText(number, data, type)
                        : this._getNormalText(number, data)}

                </View>

            </TouchableOpacity>
        );
    }

    _getNormalText(number, data, type) {
        return (
            <Text style={{
                color: type ? number === 26 ? 'red' : 'black' : 'black',
                backgroundColor: 'transparent'
            }}>
                {data['content']}
            </Text>
        );


    }
}



