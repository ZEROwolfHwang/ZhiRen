/**
 * Created by zerowolf on 2018/3/30.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ListView,
    Alert,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actions, inquiry_data} from './reducer/Reducer';

class FuzzyQuery extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            currentValue: '',
            showListView: false,
            text1: '',
            dataSource: ds.cloneWithRows(this._renderList([]))
        };
        this.renderRow = this._renderRow.bind(this);

        const dataList = [
            {company: '平安银行', coding: '000001', py: 'PAYH'},
            {company: '万科A', coding: '000002', py: 'WKA'},
            {company: '国农科技', coding: '000004', py: 'GNKJ'},
            {company: '世纪星源', coding: '000005', py: 'SJXY'},
            {company: '深振业A', coding: '000006', py: 'SZYA'},
            {company: '全新好', coding: '000007', py: 'QXH'}
        ]
        const rowList = ['平安银行 000001 PAYH', '万科A 000002 WKA']
        //     '国农科技 000004 GNKJ','世纪星源 000005 SJXY',
        //     '深振业A 000006 SZYA','全新好 000007 QXH'];

        let query = this._fuzzyQuery(dataList, "A 0".replace(/\s+/g, ""));
        "A 0"
        console.log(query);

    }

    _fuzzyQuery(list, keyWord) {

        // var reg = new RegExp(keyWord);
        var reg = new RegExp(keyWord, 'i');
        console.log(reg);
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            if (reg.Test(`${list[i].company} ${list[i].coding} ${list[i].py}`)) {
                arr.push(list[i]);
            }
        }
        // if (arr.length === 0) {
        //     this.setState({
        //         showListView: false
        //     })
        // }else {
        //     this.setState({
        //         showListView: true
        //     });
        // }
        return arr;
    }


    _renderList(query) {


        let row = [];

        for (let i in query) {
            row.push(<TouchableOpacity
                style={{height: 30, justifyContent: 'center', alignItems: 'flex-start'}}
                onPress={() => {
                    console.log(query[i]);
                    console.log(i);
                    // this.setValueRef('my_textInput','ni')
                    this.setState({
                        text1: `${query[i].company} ${query[i].coding}`,
                        showListView: false
                    });
                    this.props.onPress();
                    this.refs['input'].blur();
                }}>
                <Text style={{backgroundColor: 'transparent', fontSize: 16, color: 'grey'}}>
                    {`${query[i].company} ${query[i].coding} ${query[i].py}`}
                </Text>
            </TouchableOpacity>);

        }


        return row;
    }

    _renderRow(data) {
        // console.log(data);
        return (
            <View>
                {data}
            </View>
        );
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 10,
                width: width / 1.8,
                height: 40,
                position: 'absolute'
            }}>


                <TextInput
                    ref="input"
                    underlineColorAndroid={'transparent'}
                    style={{
                        borderRadius: 5,
                        width: width / 1.6,
                        marginLeft: 30,
                        height: 40,
                        backgroundColor: 'white',
                        marginBottom: 1,
                        textAlign: 'center',
                    }}
                    // styles.textInputStyle}
                    placeholder={'输入代码,名称,拼音缩写'}
                    value={this.state.text1 === '' ? null : this.state.text1}
                    onChangeText={(text) => {
                        console.log(text);
                        this.props.initInquiry(text);
                        const dataList = [
                            {company: '平安银行', coding: '000001', py: 'PAYH'},
                            {company: '万科A', coding: '000002', py: 'WKA'},
                            {company: '国农科技', coding: '000004', py: 'GNKJ'},
                            {company: '世纪星源', coding: '000005', py: 'SJXY'},
                            {company: '深振业A', coding: '000006', py: 'SZYA'},
                            {company: '全新好', coding: '000007', py: 'QXH'}
                        ];

                        let query;
                        if (text === '') {
                            query = [];
                        } else {
                            query = this._fuzzyQuery(dataList, text.replace(/\s+/g, ''));
                        }
                        console.log(query);
                        console.log(query.length === 0);
                        console.log(this.props.currentText);


                        this.setState({
                            showListView: text === '' ? false : query.length === 0 ? false : true,
                            text1: text,
                            dataSource: this.state.dataSource.cloneWithRows(this._renderList(query))
                        });
                        if (text === '') {
                            this.props.noTextState();
                        }
                    }}/>


                {this._renderModal()}

            </View>
        );

    }

    _renderModal() {


        return (
            this.state.showListView ? <ListView
                    style={{
                        backgroundColor: 'white',
                        left: 30,
                        top: 40,
                        width: width / 1.6,
                        height: 200,
                        position: 'absolute',

                        borderRadius: 3
                    }}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps='always'/>
                : null
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // RS_AutoPay: state.RS_AutoPay.data,
        currentText: state.inquiry_data.payload
    };

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initInquiry: actions.inputCurrentText,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FuzzyQuery);
