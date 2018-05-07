/**
 * Created by zerowolf Date: 2018/4/19 Time: 下午4:16
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import KeyBoardItem from '../item/KeyBoardItem';
import AbcNum from '../../../resource/AbcNum';


var abcKeyboard = [];
export default class ABC extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        abcKeyboard = [];
        for (let i = 0; i < AbcNum['AbcKeyboard'].length; i++) {

            abcKeyboard.push(
                <KeyBoardItem key={i + 100} id={i}
                              type={'abc'}
                              data={AbcNum['AbcKeyboard'][i]}
                              onPress={(data) => {
                                  this.props.onPress(data)
                              }}/>
            );
        }
    }
   /* _getRowProvince = () => {
        return <View
            style={styles.backgroundStyle}>
            {provinceKeyboard}
        </View>;
    };*/
    render() {
        return (
            <View
                key={1}
                style={styles.backgroundStyle
                }>
                {abcKeyboard}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {

        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f7f4f4',
        position: 'absolute',
        bottom: 0,
        padding:5
    }
});
