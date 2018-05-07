/**
 * Created by zerowolf Date: 2018/4/26 Time: 下午3:46
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
    Keyboard,
    TextInput,
    Modal


} from 'react-native';

const {width, height} = Dimensions.get('window');

import jsonList from '../../../resource/bankList';

export default class TextInputDrop extends Component {
    componentWillMount() {
        //监听键盘弹出事件
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
            this.keyboardDidShowHandler.bind(this));
        //监听键盘隐藏事件
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
            this.keyboardDidHideHandler.bind(this));
    }

    componentWillUnmount() {
        //卸载键盘弹出事件监听
        if (this.keyboardDidShowListener != null) {
            this.keyboardDidShowListener.remove();
        }
        //卸载键盘隐藏事件监听
        if (this.keyboardDidHideListener != null) {
            this.keyboardDidHideListener.remove();
        }
    }

    //键盘弹出事件响应
    keyboardDidShowHandler(event) {
        this.setState({KeyboardShown: true});
        console.log(event.endCoordinates.height);
        console.log('弹出键盘');
        console.log(this.state.isShow);
        this.state.isShow ?
            this.show(this.state.searchText) : null;

    }

    //键盘隐藏事件响应
    keyboardDidHideHandler(event) {
        console.log('键盘隐藏');
        this.state.isShow ?
            this.show(this.state.searchText) : null
    }

    //强制隐藏键盘
    dismissKeyboard() {
        Keyboard.dismiss();
    }

    constructor(props) {
        super(props);

        console.log(jsonList);


        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this._buttonFrame = null;
        this.state = {
            isShow: false,
            text1:'',
            searchText: '',
            dataSource: ds.cloneWithRows(this._renderList([]))
        };
        this.renderRow = this._renderRow.bind(this);

        let query = this._fuzzyQuery(jsonList, '国');
        console.log(query);

    }

    _fuzzyQuery(list, keyWord) {

        // var reg = new RegExp(keyWord);
        var reg = new RegExp(keyWord, 'i');
        console.log(reg);
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            if (reg.test(`${list[i]}`)) {
                arr.push(list[i]);
            }
        }
        return arr;
    }

    _renderList(queryList) {
        var rowList = []
        for (let item of queryList) {
            rowList.push(
                <View>
                    <TouchableOpacity activeOpacity={0.5}
                                      style={{
                                          height: 35,
                                          width: width / 2,
                                          paddingLeft: 10,
                                          justifyContent: 'center',
                                          alignItems: 'flex-start'
                                      }}
                                      onPress={() => {
                                          console.log(('条目....' + item));
                                          this.dismissKeyboard();
                                          // this.props.itemClick('baks');
                                          this.textInput.value = {item};


                                          this.setState({
                                              isShow: false,
                                              searchText:item,
                                              text1:item
                                          });

                                      }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                            backgroundColor: 'transparent',
                            textAlign: 'center'

                        }}>{item}</Text>
                    </TouchableOpacity>
                    <View style={{height: 0.5, width: width, backgroundColor: '#e9e2f399'}}/>
                </View>
            )
        }

        return rowList;
    }


    _renderRow(data) {
        return (
            <View>
                {data}
            </View>
        )
    }

    render() {
        return (
            <View style={this.props.containStyle}>

                <View style={{
                    margin: 10,
                    width: width - 20,
                    height: 60,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>


                    <Text
                        style={{fontSize: 16, color: 'grey', width: 80, marginLeft: 10}}>商户名称</Text>

                    <TextInput
                        underlineColorAndroid={'transparent'}
                        ref={ref => this.textInput = ref}
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'left',
                        }}
                        onChangeText={(text) => {
                            this.show(text);
                            this.setState({
                                text1:text
                            })
                        }}
                         value={this.state.text1}
                    />


                </View>
                {this._renderModal()}

            </View>);
    }

    _renderModal() {
        console.log(this._buttonFrame);
        console.log(this.state.isShow);
        if (this._buttonFrame && this.state.isShow) {
            const frameStyle = this._calcPosition(250);

            console.log(frameStyle);
            return (
                <View style={[frameStyle, {
                    backgroundColor: 'white',
                    position: 'absolute',
                    padding: 10

                }]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        keyboardShouldPersistTaps={'handled'}
                    />
                </View>

            );
        }
    }


    _updatePosition(callback) {
        if (!this._buttonFrame) {
        }
        this.textInput.measure((fx, fy, width, height, px, py) => {
            console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
        });
        if (this.textInput && this.textInput.measure) {
            this.textInput.measure((fx, fy, width, height, px, py) => {
                this._buttonFrame = {x: px, y: py, w: width, h: height};
                callback();
            });
        }
    }

    show(text) {

        console.log(text);
        let query=[];
        if (text === '') {
            query = [];
        } else {
            query = this._fuzzyQuery(jsonList, text.replace(/\s+/g, ''));
        }

        console.log(query);

        // this.setState({
        //     showListView: text === '' ? false : query.length === 0 ? false : true,
        //     text1: text,
        //     dataSource: this.state.dataSource.cloneWithRows(this._renderList(query))
        // });

        console.log(query.length);

        if (text === '') {
            this.setState({
                isShow: false
            })
        } else {
            this._updatePosition(() => {
                console.log('callback');
                this.setState({
                    isShow: query.length === 0 ? false : true,
                    searchText:text,
                    dataSource: this.state.dataSource.cloneWithRows(this._renderList(query))
                });
            });

        }
    }

    _calcPosition(height) {

        const dimensions = Dimensions.get('window');
        const windowWidth = dimensions.width;
        const windowHeight = dimensions.height;

        const dropdownHeight = height;


        const bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.h;
        const rightSpace = windowWidth - this._buttonFrame.x;
        const showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
        const showInLeft = rightSpace >= this._buttonFrame.x;

        const positionStyle = {
            height: dropdownHeight,
            top: showInBottom ? this._buttonFrame.y + this._buttonFrame.h - 75 : Math.max(0, this._buttonFrame.y - dropdownHeight),


        };

        if (showInLeft) {
            positionStyle.left = this._buttonFrame.x;

        } else {
            const dropdownWidth = this._buttonFrame.w;
            if (dropdownWidth !== -1) {
                positionStyle.width = dropdownWidth;
            }
            positionStyle.right = rightSpace - this._buttonFrame.w;
        }
        positionStyle.width = this._buttonFrame.w;

        return positionStyle;
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    bigImage: {
        flex: 1,
        width: '100%'
    }
});
