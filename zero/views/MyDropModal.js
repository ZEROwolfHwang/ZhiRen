/**
 * Created by zerowolf Date: 2018/4/27 Time: 下午3:40
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class  extends Component {

    constructor(props) {
        super(props);
        this._buttonFrame = null;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {};
        this.state = {
            isShow: false,
            dataSource: ds.cloneWithRows(this._renderList()),
        }
        this.renderRow = this._renderRow.bind(this);
    }

    _renderList() {
        var dataList = ['1', '2', '3', '4', '5', '6', '7'];
        var row = [];
        for (let dataItem of dataList) {
            row.push(<TouchableOpacity activeOpacity={0.8}
                                       style={{flex: 1, height: 30, backgroundColor: 'lightgrey'}}
                                       onPress={() => {
                                           console.log(dataItem);
                                           this.setState({
                                               isShow: false
                                           })
                                       }}>
                    <Text style={{fontSize: 20, color: 'black'}}>
                        {`条目 ${dataItem}`}
                    </Text>
                </TouchableOpacity>
            )
        }
        return row
    }


    _renderRow(dataRow) {
        return (<View>
            {dataRow}
        </View>)
    }

    render() {
        return (
            <View style={{width:width,height:height}}>

                <TouchableOpacity
                    ref={ref => this.touchBtn = ref}
                    style={styles.boxStyle}
                    onPress={this.pressBottom}>
                    <Text style={{fontSize: 18, color: 'black'}}>默认值</Text>
                </TouchableOpacity>

                <View style={{
                    width,
                    height: height / 2,
                    backgroundColor: 'blue',
                    top: 110,
                    position: 'absolute'
                }}/>

                {this._renderModal()}

            </View>
        );
    }

    /**
     * 点击弹出Modal下拉框
     * @param title
     */
    pressBottom = () => {
        console.log('click');
        this.show()
    }


    /**
     * 下拉model 的视图
     * @returns {*}
     * @private
     */
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
        this.touchBtn.measure((fx, fy, width, height, px, py) => {
            console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
        });
        if (this.touchBtn && this.touchBtn.measure) {
            this.touchBtn.measure((fx, fy, width, height, px, py) => {
                this._buttonFrame = {x: px, y: py, w: width, h: height};
                callback();
            });
        }
    }

    show() {
        this._updatePosition(() => {
            this.setState({
                isShow: true,
                // dataSource:this.state.dataSource.cloneWithRows(this._renderList())
            });
        });

    }

    _calcPosition(height) {
        console.log('重定位1');

        console.log(this._buttonFrame.y);
        console.log(this._buttonFrame.h);

        console.log('重定位2');
        var boxStyleObj = StyleSheet.flatten(styles.boxStyle);
        console.log(boxStyleObj);


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
            top: showInBottom ? this._buttonFrame.y + this._buttonFrame.h : Math.max(0, this._buttonFrame.y - dropdownHeight),
        };

        // if (showInLeft) {
        //     positionStyle.left = this._buttonFrame.x;
        //
        // } else {
        //     const dropdownWidth = this._buttonFrame.w;
        //     if (dropdownWidth !== -1) {
        //         positionStyle.width = dropdownWidth;
        //     }
        //     positionStyle.right = rightSpace - this._buttonFrame.w;
        // }
        // positionStyle.width = this._buttonFrame.w;

        if (showInLeft) {
            positionStyle.left = this._buttonFrame.x;

        } else {
            positionStyle.right = rightSpace - this._buttonFrame.w;
        }
        const dropdownWidth = boxStyleObj.width;
        if (dropdownWidth !== -1) {
            positionStyle.width = dropdownWidth;
        }

        return positionStyle;
    }

}
const styles = StyleSheet.create({
    boxStyle: {
        marginTop: 10,
        width: width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
    }
})
