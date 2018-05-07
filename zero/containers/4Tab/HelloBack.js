/**
 * Created by zerowolf Date: 2018/4/23 Time: 下午5:53
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView,
    BackHandler
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import {connect} from 'react-redux';
import BaseComponent from '../../containers/global/BaseComponent';
import ButtonView from "../../views/ButtonView";
import {NavigationActions} from "react-navigation";
class HelloBack extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log('已经完成');
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        // console.log('将要完成');
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        console.log(this.props.navigation);
        console.log(this.props.dispatch);
        console.log(this.props.nav);
        // console.log('退出');

        const {dispatch, nav} = this.props;
        // if (nav.index === 0) {
        //     return false;
        // }


        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'HelloBack'}
                           navigation={this.props.navigation}/>

                <ButtonView onPress={()=>{
                    this.props.navigation.navigate('HelloBack111')
                }}/>
            </View>)
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }

};


export default connect(mapStateToProps)(HelloBack);

