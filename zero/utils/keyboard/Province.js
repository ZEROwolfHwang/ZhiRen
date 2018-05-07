/**
 * Created by zerowolf Date: 2018/4/19 Time: 下午4:16
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import KeyBoardItem from '../item/KeyBoardItem';
import provinceJson from '../../../resource/province';
var provinceKeyboard = [];
export default class Province extends Component {

    constructor(props) {
        super(props);

    }




    componentWillMount() {
        provinceKeyboard = [];
        for (let i = 0; i < provinceJson.length; i++) {

            provinceKeyboard.push(
                <KeyBoardItem key={i} id={i} data={provinceJson[i]}
                              onPress={(data) => {
                    this.props.onPress(data)
                }}/>
            )
        }
    }
    render() {
        return (
            <View
                style={styles.backgroundStyle}>
                {provinceKeyboard}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        padding:5,
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f7f4f4',
        position: 'absolute',
        bottom: 0, paddingTop: 5
    }
});
