/**
 * Created by zerowolf on 2018/4/3.
 */
'use strict';
import React, {Component} from "react";
import PropTypes from "prop-types";

import {
    StyleSheet,//样式
    View,//视图组件；
    Image,//图片
    TextInput,//输入框
    TouchableOpacity,//一个类似button的组件
} from "react-native";

export default class TextInputRightButton extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputValue: "",
        };
        this.onChange = this._onChange.bind(this);
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


    render() {
        let {inputValue} = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    clearButtonMode={'never'}
                    maxLength={50}
                    value={inputValue}
                    onChangeText={this.onChange}
                    {...this.props}/>
                {this._isNull(inputValue) ? null : this._getRightButtonView()}
            </View>
        );
    }

    _getRightButtonView() {
        //右侧按钮图
        //自定义 按钮图
        let source = this.props.source ? this.props.source : require('../../../../resource/image/qianbao.png');
        return (
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.closeOpacityStyle}
                              onPress={() => {
                                  this.props.onButtonClick();
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

    _onChange(changeText) {
        this.setState({
            inputValue: changeText,
        });
    }

}

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
);

// 传递参数属性定义
TextInputRightButton.propTypes = {
    onButtonClick: PropTypes.func.isRequired
};
