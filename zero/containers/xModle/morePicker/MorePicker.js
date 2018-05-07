/**
 * Created by zerowolf Date: 2018/4/20 Time: 上午10:30
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
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');

var dataJson;
var typeList;
var selectList;
export default class MorePicker extends Component {

    constructor(props) {
        super(props);


        //todo  后台控制内容不能重复
        dataJson = {
            type: [{typeId: 0, typeContent: '原因1'}, {typeId: 1, typeContent: '原因2'}, {
                typeId: 2, typeContent: '原因3'
            }, {typeId: 4, typeContent: '原因4'}],
            "content": [
                {"contentId": 0, "reason": "阿斯达", typeId: 0},
                {"contentId": 1, "reason": "就阿萨德", typeId: 0},
                {"contentId": 2, "reason": "欧帕斯的", typeId: 0},
                {"contentId": 3, "reason": "就那么", typeId: 0},
                {"contentId": 4, "reason": "哦哦新", typeId: 1},
                {"contentId": 5, "reason": "拉莫斯", typeId: 1},
                {"contentId": 6, "reason": "聘请按时", typeId: 1},
                {"contentId": 7, "reason": "没理解三", typeId: 1},
                {"contentId": 8, "reason": "突然的", typeId: 1},
                {"contentId": 9, "reason": "马拉松", typeId: 2},
                {"contentId": 10, "reason": "聘请按时大", typeId: 2},
                {"contentId": 11, "reason": "们能不能", typeId: 2},
                {"contentId": 10, "reason": "聘请按时大", typeId: 2},
                {"contentId": 11, "reason": "们能不能", typeId: 2},
                {"contentId": 12, "reason": "一天一天", typeId: 4},
                {"contentId": 13, "reason": "那下次", typeId: 2},
                {"contentId": 14, "reason": "绥安", typeId: 2},
                {"contentId": 15, "reason": "感受到与", typeId: 2},
                {"contentId": 7, "reason": "没理解三", typeId: 1},
                {"contentId": 8, "reason": "突然的", typeId: 1},
                {"contentId": 9, "reason": "马拉松", typeId: 2},
                {"contentId": 10, "reason": "聘请按时", typeId: 4},
                {"contentId": 11, "reason": "们能不能", typeId: 2},
                {"contentId": 12, "reason": "一天一天", typeId: 2},
                {"contentId": 13, "reason": "那下次", typeId: 2},
                {"contentId": 14, "reason": "绥安", typeId: 2},
                {"contentId": 15, "reason": "感受到与", typeId: 2}
            ]
        };
        this.state = {
            isPress: false,
            dataSource: dataJson,
            selectArray: []
        };


    }

    componentDidMount() {
        let array = this.state.dataSource
        let newArray = []
        let content = array.content;
        for (let i = 0; i < content.length; i++) {
            let item = content[i]
            item.isSelect = false;
            newArray.push(item);
        }
        this.setState({
            dataSource: newArray
        });
    }

    getContentView(contentList) {
        //('感受到与'.indexOf(this.state.selectList) === -1)
        // console.log(contentList);
        var contentButton = [];
        for (let i in contentList) {
            let number = i;
            contentButton.push(<TouchableOpacity
                    ref={ref => this.button = ref}
                    key={number} activeOpacity={0.5}
                    style={{
                        margin: 5,
                        padding: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 40,
                        backgroundColor: contentList[number].isSelect ? '#9477ff' : 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        let selectArrayList = this.state.selectArray;
                        let newArray = this.state.dataSource;
                        for (let index in contentList) {

                            let itemContent = contentList[index];
                            if (index === number) {
                                for (let allContent in newArray) {
                                    if (newArray[allContent] === contentList[index]) {
                                        if (itemContent.isSelect === true) {
                                            newArray[allContent].isSelect = false
                                            itemContent.isSelect = false;
                                            for (let j = 0; j < selectArrayList.length; j++) {
                                                let content = selectArrayList[j];
                                                if (content === contentList[index].reason) {
                                                    selectArrayList.splice(j, 1);
                                                }
                                            }
                                            console.log(newArray.content);
                                        } else {
                                            newArray[allContent].isSelect = true
                                            itemContent.isSelect = true;
                                            selectArrayList.push(itemContent.reason);
                                        }
                                    }
                                }

                            }
                        }
                        console.log(newArray);
                        console.log(selectArrayList);
                        this.setState({
                            selectArray: selectArrayList,
                            dataSource: newArray
                        });
                    }}>
                    <Text
                        style={{
                            color: contentList[number].isSelect ? 'white' : 'black',
                            fontSize: 12
                        }}>{`${contentList[number].reason}`}</Text>
                </TouchableOpacity>
            );
        }
        return <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: 10
        }}>
            {contentButton}
        </View>


    }

    getPageView(rowData) {
        let typeList = dataJson.type;
        var rowList = [];
        for (let i in typeList) {
            let number = i;
            var itemList = [];
            for (let j in rowData) {
                if (rowData[j].typeId === typeList[i].typeId) {
                    itemList.push(rowData[j])
                }
            }
            rowList.push(
                <View key={number} style={{
                    width: width,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingRight: 5
                }}>
                    <Text
                        style={{
                            color: 'grey',
                            margin: 5,
                            fontSize: 12
                        }}>{`${typeList[i].typeContent}`}</Text>
                    {this.getContentView(itemList)}
                </View>);
        }

        return <ScrollView>
            {rowList}
        </ScrollView>;
    }

    render() {
        return (
            <View style={{backgroundColor:'white',width,height}}>

                {this.getPageView(this.state.dataSource)}


                    <TouchableOpacity activeOpacity={0.5}
                                      style={{
                                          bottom:40,
                                          width: width - 40,
                                          height: 60,
                                          alignSelf: 'center',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          borderRadius: 30,
                                          backgroundColor: 'blue',
                                          position:'relative'
                                      }}
                                      onPress={() => {
                                          console.log('sure');
                                          this.props.onPress(this.state.selectArray);
                                      }}>
                        <Text style={{
                            fontSize: 18,
                            color: 'white',
                            textAlign: 'center'
                        }}>确定</Text>
                    </TouchableOpacity>
            </View>);
    }


}
