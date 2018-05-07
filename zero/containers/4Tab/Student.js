/**
 * Created by zerowolf Date: 2018/4/23 Time: 下午3:56
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../../containers/global/BaseComponent';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import ButtonView from "../../views/ButtonView";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
let audioPath = AudioUtils.DocumentDirectoryPath + '/Test.aac';


class Student extends BaseComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'标题asa'}
                           leftView={true}
                           navigation={this.props.navigation}/>

                <ButtonView onPress={() => {
                    AudioRecorder.prepareRecordingAtPath(audioPath, {
                        SampleRate: 22050,
                        Channels: 1,
                        AudioQuality: "Low",
                        AudioEncoding: "aac"
                    });
                }
                }/>
                <Text>学生</Text>
            </View>)
    }
}




const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }

};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
