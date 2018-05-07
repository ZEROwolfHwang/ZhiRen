/**
 * Created by zerowolf Date: 2018/4/25 Time: 上午10:44
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
    TextInput, BackHandler, Modal
} from 'react-native';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MyTextInput from "../../views/MyTextInput";
import ABC from "../../utils/keyboard/ABC";
import NUM from "../../utils/keyboard/NUM";
import Province from "../../utils/keyboard/Province";
import {NavigationActions} from "react-navigation";
import {TextWithLetterSpacing} from "../../views/MyLetterText";
import ModalDrop from 'react-native-modal-dropdown';
import MyDropModal from "../../views/MyDropModal";
import _calcPosition, {show} from "./ModalUtil";
import MorePicker from "../xModle/morePicker/MorePicker";

var province;
var abc;
var num;

var boxHeight = 60;
export default class CashCharge extends Component {
    static navigationOptions = ({
        headerTitle: '',
        header: null,
        headerBackTitle: null,
    });


    constructor(props) {
        super(props);
        this._buttonFrame = null;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            isShowProvince: false,
            isShowAbc: false,
            isShowNum: false,
            licence: '',

            gapTime: 5,
            chargeMoney: 45,

            isShow: false,
            dataSource: ds.cloneWithRows(this._renderList()),

            carType: '车型1',


            isShowReasonButton:true,
            isShowReasonDetail:false,
            reasonList:'为毛放行?'
        }
        this.renderRow = this._renderRow.bind(this);
    }

    componentWillUnmount() {
        // console.log('将要完成');
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }


    onBackPress = () => {

        console.log('android返回');

        if (this.state.isShowAbc || this.state.isShowNum || this.state.isShowProvince) {
            this.setState({
                isShowProvince: false,
                isShowAbc: false,
                isShowNum: false
            })
            return true;
        } else {
            // return false;


            // const {dispatch} = this.props;
            // if (nav.index === 0) {
            //     return false;
            // }
            //
            //
            // dispatch(NavigationActions.back());
            this.props.navigation.goBack();
            return true;
        }

    };


    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        province = <Province onPress={(data) => {
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
                    isShowAbc: false,
                    isShowNum: true
                });
        }}/>;
        num = <NUM onPress={(data) => {
            console.log(data);
            data.id === 26 ? this.state.licence.length === 2 ? this.setState({
                    licence: this.state.licence.substring(0, this.state.licence.length - 1),
                    isShowAbc: true,
                    isShowNum: false,
                }) : this.setState({
                    licence: this.state.licence.substring(0, this.state.licence.length - 1)
                })
                : this.setState({
                    licence: this.state.licence.length < 8 ?
                        this.state.licence.concat(data.content) :
                        this.state.licence
                });


        }}/>

    }

    _renderList() {
        var dataList = ['1', '2', '3', '4', '5', '6', '7'];

        var row = [];
        for (let dataItem of dataList) {
            row.push(<TouchableOpacity activeOpacity={0.8}
                                       style={{flex: 1, height: 30, backgroundColor: 'transparent'}}
                                       onPress={() => {
                                           console.log(dataItem);
                                           this.setState({
                                               isShow: false,
                                               carType: `车型${dataItem}`
                                           })
                                       }}>
                    <Text style={{fontSize: 20, color: 'black'}}>
                        {`车型 ${dataItem}`}
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
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'现金收费'}
                           navigation={this.props.navigation}/>

                {this.viewLicence()}

                {this.viewTime()}

                {this.viewPay()}


                <TouchableOpacity
                    ref={ref => this.touchBtn = ref}
                    style={styles.boxStyle}
                    onPress={this.pressBottom}>
                    <Text style={{fontSize: 18, color: 'black'}}>{this.state.carType}</Text>
                </TouchableOpacity>

                {this._renderModal()}


                {this.state.isShowReasonButton ? this.viewReason() : null}
                {this.state.isShowReasonDetail ? this.viewReasonDetail() : null}



                {this.state.isShowProvince || this.state.isShowAbc || this.state.isShowNum ?
                    <TouchableOpacity activeOpacity={0}
                                      style={{
                                          width,
                                          height,
                                          backgroundColor: 'rgba(0,0,0,0.1)',
                                          position: 'absolute'
                                      }}
                                      onPress={this.hideKeyBoard}>

                    </TouchableOpacity> : null}


                {this.state.isShowProvince ? province : null}
                {this.state.isShowAbc ?
                    abc : null}
                {this.state.isShowNum ?
                    num : null}
            </View>
        );


    }

    pressLicenceNumber = () => {
        this.setState({
            isShowProvince: this.state.licence === '' ? true : false,
            isShowAbc: this.state.licence.length === 1 ? true : false,
            isShowNum: this.state.licence.length > 1 ? true : false
        });
    }

    /**
     * 点击手动查询事件
     */
    manualQuery = () => {

    }


    /**
     * 点击弹出Modal下拉框
     * @param title
     */
    pressBottom = () => {
        // this.show()
        show(200, this.touchBtn, styles.boxStyle, (positionStyle) => {
            console.log(positionStyle);
            this.positionStyle = positionStyle;
            this.setState({
                isShow: true
            })
        })
    };


    /**
     * 下拉model 的视图
     * @returns {*}
     * @private
     */
    _renderModal() {
        if (this.positionStyle && this.state.isShow) {
            return (
                <Modal animationType='fade'
                       transparent={true}
                       visible={this.state.isShow}
                       onRequestClose={() => this.setState({isShow: false})}>

                    <TouchableOpacity activeOpacity={1}
                                      style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
                                      onPress={() => {
                                          this.setState({
                                              isShow: false
                                          })
                                      }}>

                        <View style={[this.positionStyle, {
                            padding: 10,
                            backgroundColor: 'white',
                            position: 'absolute',
                        }]}>
                            <ListView
                                enableEmptySections={true}
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow}
                                keyboardShouldPersistTaps={'handled'}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>

            );
        }
    }

    /**
     * 车牌号
     */
    viewLicence() {
        return <View style={[styles.boxStyle, {marginTop: 40}]}>
            <FontAwesome size={25} name={'car'} color={'blue'}/>

            <View style={{
                width: 80,
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>

                <Text style={{fontSize: 16, color: 'grey', textAlign: 'right'}}>车牌号</Text>

            </View>


            <TouchableOpacity
                activeOpacity={1}
                style={{
                    flex: 1,
                    height: boxHeight,
                    marginLeft: 10,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}
                onPress={
                    this.pressLicenceNumber
                }
                value={this.state.licence}>


                <TextWithLetterSpacing spacing={6}
                                       textStyle={{
                                           fontSize: 20,
                                           color: this.state.licence.length === 8 ? 'blue' : 'black'
                                       }}>
                    {this.state.licence}
                </TextWithLetterSpacing>
            </TouchableOpacity>

            <FontAwesome size={25} name={'camera'} color={'green'}/>

        </View>
    }

    /**
     * 车辆进出时间
     */
    viewTime() {

        console.log('ajsdaisu');


        return <View style={styles.boxStyle}>

            <FontAwesome size={30} name={'clock-o'} color={'red'}/>

            <View style={styles.clockStyle}>
                <Text style={{fontSize: 14, color: 'black'}}>5/01 12:00:00</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>起始时间</Text>

            </View>

            <View style={{
                width: 80,
                height: boxHeight,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 5
                }}>

                    <Text style={{
                        color: 'red',
                        textAlign: 'center'
                    }}>{`${this.state.gapTime}小时`}</Text>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingBottom: 20
                }}>
                    <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}}/>
                    <FontAwesome size={25} name={'angle-right'} color={'grey'}/>

                </View>
            </View>


            <View style={styles.clockStyle}>
                <Text style={{fontSize: 14, color: 'black'}}>5/01 14:00:00</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>离场时间</Text>
            </View>

        </View>
    }

    /**
     * 缴费金额
     */
    viewPay() {
        return <View style={styles.boxStyle}>
            <FontAwesome size={25} name={'car'} color={'blue'}/>

            <View style={{
                width: 80,
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>

                <Text style={{fontSize: 16, color: 'grey', textAlign: 'right'}}>缴费金额</Text>

            </View>

            <Text style={{
                flex: 1,
                marginLeft: 10,
                color: 'black',
                fontSize: 18
            }}>{`${this.state.chargeMoney}元`}</Text>

            <TouchableOpacity activeOpacity={0.5}
                              style={{
                                  borderColor: 'grey',
                                  borderWidth: 1,
                                  borderRadius: 2,
                                  padding: 5,
                                  paddingLeft: 10,
                                  paddingRight: 10
                              }}
                              onPress={this.manualQuery()}>
                <Text style={{fontSize: 12, color: 'grey'}}>手动查询</Text>
            </TouchableOpacity>
        </View>
    }

    // viewProvince() {
    //     return <ModalBackground view={province}/>
    // }

    /**
     * 隐藏所有软键盘
     */
    hideKeyBoard = () => {
        this.setState({
            isShowProvince: false,
            isShowAbc: false,
            isShowNum: false
        })
    };

    /**
     * 放行理由的界面
     * @returns {undefined}
     */
    viewReason() {
        return <TouchableOpacity activeOpacity={0.5} style={styles.boxStyle} onPress={()=>this.setState({isShowReasonDetail:true})}>
            <Text style={{fontSize:16,color:'black',textAlign:'left'}}>{this.state.reasonList}</Text>
        </TouchableOpacity>;
    }

    /**
     * 放行理由的多选框界面
     */
    viewReasonDetail() {
        return <View style={{width,height,position:'absolute'}}>
            <MorePicker onPress={(selectArray)=>{
                console.log(selectArray);
                var str = '';
                for (let i in selectArray) {
                    if (i === selectArray.length-1) {
                        str = str.concat(selectArray[i] + '' );
                    } else {
                        str = str.concat(selectArray[i] + ',');
                    }
                }
                this.setState({
                    isShowReasonDetail:false,
                    reasonList:str
                })
            }}/>

            </View>
    }
}
const styles = StyleSheet.create({
    boxStyle: {
        margin: 10,
        width: width - 30,
        paddingLeft: 10,
        paddingRight: 10,
        height: boxHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    clockStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        flex: 1,
        height: boxHeight,
        backgroundColor: 'transparent',
        marginLeft: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

//
// const mapStateToProps = (state) => {
//     return {
//         nav: state.nav
//     }
//
// };
//
//
// export default connect(mapStateToProps)(CashCharge);
