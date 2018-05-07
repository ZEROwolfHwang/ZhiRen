/**
 * Created by zerowolf Date: 2018/4/19 Time: 下午4:16
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import KeyBoardItem from '../item/KeyBoardItem';
import AbcNum from '../../../resource/AbcNum';

var abcKeyboard = [];
var numericKeyboard = [];
export default class NUM extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        abcKeyboard = [];
        numericKeyboard = [];
        for (let i = 0; i < AbcNum['AbcKeyboard'].length; i++) {

            abcKeyboard.push(
                <KeyBoardItem
                    type={'abc'}
                    key={i + 100} id={i}
                    data={AbcNum['AbcKeyboard'][i]}
                    onPress={(data) => {
                        this.props.onPress(data)
                    }}/>
            );
        }
        for (let i = 0; i < AbcNum['NumKeyboard'].length; i++) {

            numericKeyboard.push(<KeyBoardItem type={'numeric'} key={i} id={i}
                                               data={AbcNum['NumKeyboard'][i]}
                                               onPress={(data) => {
                                                   this.props.onPress(data);

                                               }}/>)
        }

    }

    /* _getRowProvince = () => {
         return <View
             style={styles.backgroundStyle}>
             {provinceKeyboard}
         </View>;
     };*/
    render() {
        var num = []
        // var num = numericKeyboard.push(abcKeyboard);
        num.push(<View key={201} style={{
            width: width,
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {numericKeyboard}
        </View>);
        num.push(<View
            key={202}
            style={{
                width: width,
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingTop: 5
            }}>
            {abcKeyboard}
        </View>);
        return <View style={styles.backgroundStyle}>
            {num}
        </View>
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f7f4f4',
        position: 'absolute',
        bottom: 0, padding: 5
    }
});
