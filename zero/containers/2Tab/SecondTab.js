/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import {
    Kaede,
    Hoshi,
    Jiro,
    Isao,
    Madoka,
    Akira,
    Hideo,
    Kohana,
    Makiko,
    Sae,
    Fumi,
} from 'react-native-textinput-effects';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BaseComponent from '../global/BaseComponent';
class SecondTab extends BaseComponent {

    constructor(props) {
        super(props);

    }

    returnData(data) {
        console.log(data);
        console.log('huidiao');
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'第二页'}
                           navigation={this.props.navigation}/>

                <View style={{padding: 16}}>
                    <TouchableOpacity onPress={() => {
                        console.log(this.props.navigation);
                        console.log(this.props.nav);
                        this.props.navigation.navigate(
                            'TestComponent', {data: this.returnData.bind(this)})
                    }}>


                        <Text style={{
                            paddingBottom: 16,
                            textAlign: 'center',
                            color: '#404d5b',
                            fontSize: 20,
                            fontWeight: 'bold',
                            opacity: 0.8,
                        }}>Madoka</Text>

                    </TouchableOpacity>


                    <Madoka
                        onChangeText={(text) => {
                            console.log(text);
                        }}
                        style={{marginTop: 4, width: width - 20}}
                        label={'Frequency'}
                        borderColor={'blue'}
                        labelStyle={{color: 'blue'}}
                        inputStyle={{color: 'grey'}}
                    />
                    <Madoka
                        style={{width: width - 100}}
                        label={'Weight'}
                        borderColor={'#aee2c9'}
                        labelStyle={{color: '#008445'}}
                        inputStyle={{color: '#f4a197'}}

                    />
                </View>
            </View>)
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.nav,
    }
};


export default connect(mapStateToProps)(SecondTab);

