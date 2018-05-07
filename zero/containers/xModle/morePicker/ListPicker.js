import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, Dimensions} from 'react-native'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let {width, height} = Dimensions.get('window');
export default class CircleList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isEdict: false,//是否编辑状态
            selectArray: [],
            dataSource: [{id: '1', title: '文章1'}, {id: '2', title: '文章2'}, {id: '3', title: '文章3'},],
        }
    }
    componentDidMount() {
        let array = this.state.dataSource;
        let newArray = []
        //服务器返回的数据,自己增加一个状态,控制是否选中
        for (let i = 0; i < array.length; i++) {
            let dict = array[i]
            dict.isSelect = false;
            newArray.push(dict);
        }
        this.setState({
            dataSource: newArray
        });
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text onPress={this.onEditOnPress} style={{color: 'black'}}>{'点我进入编辑/非编辑状态'}</Text>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={ds.cloneWithRows(this.state.dataSource)}/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{JSON.stringify(this.state.selectArray)}</Text>
                </View>
            </View>
        );
    }
    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
            <View style={{height: 111, borderBottomColor: 'gray', borderBottomWidth: 1, flexDirection: 'row'}}>
                {this.renderShowEditView(this.state.isEdict, rowData, rowID, ()=> {
                    this.rightOnPress(rowData, rowID)
                })}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{rowData.title}</Text>
                </View>
            </View>
        )
    }
    //是否进去编辑状态
    onEditOnPress = ()=> {
        this.setState({isEdict: !this.state.isEdict});
    }
    //左边按钮选择
    rightOnPress = (rowData, index)=> {
        let selectArray = this.state.selectArray;
        let data = this.state.dataSource;
        let newArray = []
        for (let i = 0; i < data.length; i++) {
            let dict = data[i];
            if (index == i) {
                if (dict.isSelect == true) {
                    dict.isSelect = false
                    for (let j = 0; j < selectArray.length; j++) {
                        let id = selectArray[j];
                        if (id == dict.id) {
                            selectArray.splice(j, 1);
                        }
                    }
                } else {
                    dict.isSelect = true
                    selectArray.push(dict.id);
                }
            }
            newArray.push(dict);
        }
        this.setState({
            selectArray: selectArray,
            dataSource: newArray
        });
    }
    //是否选中
    renderShowEditView(isEdict, rowData, index, onPress) {
        if (isEdict === true) {
            let imageURL = require('../../../../AImages/qianbao.png')
            if (rowData.isSelect === true) {
                imageURL = require('../../../../AImages/renzheng.png')
            }
            return (
                <TouchableOpacity onPress={()=> {
                    onPress(rowData, index)
                }} style={{height: 111, width: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 30, height: 30}} source={imageURL}/>
                </TouchableOpacity>
            )
        }
    }
}
