/**
 * Created by zerowolf Date: 2018/4/26 Time: 下午4:44
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView,Modal
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import BaseComponent from '../../containers/global/BaseComponent';
export default class ModalTest extends Component {

    constructor(props) {
        super(props);

        this.state={
            modalVisible:false
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress = {() => this.setState({modalVisible: true})}>
                    <View>
                        <Image
                            onPress = {() => this.setState({modalVisible: true})}
                            resizeMode='cover'
                            source={require('../../../resource/image/heart.png')} />
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({modalVisible: false})}
                >
                    <View
                        style = {styles.modalView}
                    >
                        <Image
                            style = {styles.bigImage}
                            resizeMode='contain'
                            source={require('../../../resource/image/app_logo.png')} />
                    </View>
                </Modal>
            </View>
        )
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
        flex:1,
        width: '100%'
    }
});
