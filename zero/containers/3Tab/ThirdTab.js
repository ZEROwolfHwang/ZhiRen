/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions,WebView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
// import {bindActionCreators} from "redux/index";
import {connect} from "react-redux";
const url = Platform.select({
    ios: 'http://localhost:63342/ZhiRen/zero/containers/3Tab/WebView1.html',
    // android: 'http://localhost:63342/ZhiRen/zero/containers/3Tab/WebView1.html',
    // ios: 'http://127.0.0.1:63342/Dog/zero/html/nearby.html',
    // android: 'http://127.0.0.1:63342/Dog/zero/html/nearby.html',
    // android: 'http://192.168.43.108:63342/Dog/zero/html/nearby.html',
    // ios: 'file:///../html/nearby.html',
    android: 'file:///android_asset/web/WebView1.html',
});


class ThirdTab extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        console.log('你好');
        console.log('大家好');

    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                {/*<MyTabView titleColor={'black'} title={'第三页'}*/}
                {/*navigation={this.props.navigation}/>*/}

                <WebView
                    ref={(webview) => this.webview = webview}
                    onMessage={this.onMessage.bind(this)}
                    bounces={false}
                    scalesPageToFit={true}
                    source={{uri: url, method: 'GET'}}
                    style={{width: width, height: height}}>
                </WebView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{
                            // this.props.navigation.dispatch({
                            //     type:'Student1'
                            // })
                        this.props.navigation.navigate('Student1')
                    }}
                    style={[{backgroundColor: '#38acff', marginTop: 10, padding: 5, marginLeft: 5}]}>
                    <Text>测试数据传递</Text>
                </TouchableOpacity>
            </View>

        );

    }

    //向HTML发送数据
                    // onPress={this._postMessage}
    _postMessage = () => {
        /*this.setState({isPostMessage: true, isHtml: true})

        setTimeout(() => {
            if (this.webview) {
                this.webview.postMessage('"Hello" 我是RN发送过来的数据');
            }
        }, 4000);*/
                this.webview.postMessage('"Hello" 我是RN发送过来的数据hahaha');
    }
    //接收HTML发出的数据
    onMessage = (e) => {
        let data = e.nativeEvent.data;

        console.log(data);
        console.log(data.toString());
        console.log(JSON.parse(data));


    }
}


const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }

};
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//     }, dispatch);
// };

export default connect(mapStateToProps)(ThirdTab);
