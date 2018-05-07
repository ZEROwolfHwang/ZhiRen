import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ListView,
    PanResponder, ScrollView
} from 'react-native';
import {createAnimatableComponent, View, Text} from 'react-native-animatable';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../../views/MyTabView';
import BaseComponent from '../../global/BaseComponent';
import RedTopPage from "./RedTopPage";
import RedBottomPage from "./RedBottomPage";

export default class MyPanResponder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };

    }


    render() {
        return (
            <View animation="fadeIn" style={{flex: 1}} useNativeDriver>


                {this._getBottomPage()}
                {this.getTopPage()}


            </View>);
    }


    getTopPage() {
        return (
            this.state.isShow ? null :
                <View ref={ref => this.top = ref}
                      style={{flex: 1,position: 'absolute'}}>

                    <RedTopPage

                        onSlide={() => {
                            console.log('隐藏');

                            if (this.top) {
                                this.top['fadeOutUpBig'](1000);
                            }
                            if (this.bottom) {
                                this.bottom['fadeInUpBig'](1000);
                            }

                            // this.setState({

                            //     isShow: true
                            // })
                        }}/>
                </View>

        );
    }

    _getBottomPage() {
        return (
            // this.state.isShow ?
            <View
                style={{flex: 1,position: 'absolute'}}

                ref={ref => this.bottom = ref}
            >

                <RedBottomPage
                    onSlide={() => {
                        if (this.top) {
                            this.top['fadeInDownBig'](1000);//向下拉   从上向下显示
                        }
                        if (this.bottom) {
                            this.bottom['fadeOutDownBig'](1000); // 向下拉  从上向下消失
                        }
                        // this.setState({
                        //     isShow: false
                        // });
                    }}/>
            </View>
            // : null

        );
    }

}
