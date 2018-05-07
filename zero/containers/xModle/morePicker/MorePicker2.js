/**
 * Created by zerowolf Date: 2018/4/20 Time: 上午10:30
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../../views/MyTabView';
import BaseComponent from '../../global/BaseComponent';

var dataJson;
var selectList;
export default class MorePicker2 extends BaseComponent {

    constructor(props) {
        super(props);

        dataJson = [
            {
                "titleID": 0,
                "title": "原因1",
                "content": [
                    {"contentId": 0, "reason": "阿斯达"},
                    {"contentId": 1, "reason": "就阿萨德"},
                    {"contentId": 2, "reason": "欧帕斯的"},
                    {"contentId": 3, "reason": "就那么"}
                ]
            },
            {
                "titleID": 1,
                "title": "原因2",
                "content": [
                    {"contentId": 4, "reason": "哦哦新"},
                    {"contentId": 5, "reason": "拉莫斯"},
                    {"contentId": 6, "reason": "聘请按时"},
                    {"contentId": 7, "reason": "没理解三"}
                ]
            },
            {
                "titleID": 2,
                "title": "原因3",
                "content": [
                    {"contentId": 8, "reason": "突然的"},
                    {"contentId": 9, "reason": "马拉松"},
                    {"contentId": 10, "reason": "聘请按时大"},
                    {"contentId": 11, "reason": "们能不能"},
                    {"contentId": 12, "reason": "一天一天"},
                    {"contentId": 13, "reason": "那下次"},
                    {"contentId": 14, "reason": "绥安"},
                    {"contentId": 15, "reason": "感受到与"}
                ]
            }];
        this.state = {
            isPress: false,
            dataSource: dataJson,
            selectArray:[]
        };


    }

    componentDidMount() {
        let array = this.state.dataSource
        let newArray = []
        //服务器返回的数据,自己增加一个状态,控制是否选中
        for (let i = 0; i < array.length; i++) {
            let content = array[i].content;
            for (let j in content) {
                let item = content[j]
                item.isSelect = false;
                newArray.push(item);
            }
        }
        console.log(this.state.dataSource);
        console.log(newArray);


    }

    getContentView(content) {
        //('感受到与'.indexOf(this.state.selectList) === -1)
        var contentButton = [];
        for (let i in content) {
            let number = i;
            console.log(number);
            contentButton.push(<TouchableOpacity
                    ref={ref => this.button = ref}
                    key={number} activeOpacity={0.5}
                    style={{
                        margin: 5,
                        padding: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 40,
                        backgroundColor: number === 1 ? 'white' : 'blue',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        console.log(content[number]);
                        //this.refs.button.backgroundColor = 'red';

                        // this.setState({
                        //     selectList: this.state.selectList.push(content[number].reason)
                        // });
                        // console.log(this.state.selectList);
                        onPress(number,)
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>{`${content[number].reason}`}</Text>
                </TouchableOpacity>
            );
        }
        return <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            {contentButton}
        </View>


    }

    getPageView() {
        var rowList = [];
        for (let i in dataJson) {
            let number = i;
            let content = dataJson[i].content;
            rowList.push(<View key={number} style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <Text style={{color: 'black', fontSize: 16}}>{`${dataJson[i].title}`}</Text>
                {this.getContentView(content)}
            </View>);
        }
        return <View>
            {rowList}
        </View>
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'放行原因'}
                           navigation={this.props.navigation}/>

                {this.getPageView()}
            </View>)
    }


}
