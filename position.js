/*
import React, {Component} from "react";
import {
    Container,
    Header,
    Left,
    Button,
    Body,
    Title,
    Icon,
    Right,
    Content,
    ActionSheet,
    Text,
    ListItem,
    List
} from "native-base";

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


const datas = [
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    },
    {
        route: "RegularActionSheet",
        text: "Regular"
    },
    {
        route: "IconActionSheet",
        text: "Icon ActionSheet"
    }

];
export default class ActionSheetNB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:0
        };
    }


    render() {
        return (
            <Container style={{backgroundColor: "#fff"}}>
               {/!* <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="ios-menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>ActionSheet</Title>
                    </Body>
                    <Right/>
                </Header>*!/}
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Text>
                                        {data.text}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>

        );
    }
}
*/
/*

import React, { Component } from "react";
import {
    Container,
    Header,
    Left,
    Button,
    Body,
    Title,
    Icon,
    Right,
    Content,
    ActionSheet,
    Text
} from "native-base";
import styles from "./styles";
var BUTTONS = [
    { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionSheetNB extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>ActionSheet</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Button
                        onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Select an option"
                                },
                                buttonIndex => {
                                    // this.setState({ clicked: BUTTONS[buttonIndex] });
                                    console.log('dianji');
                                    console.log(buttonIndex);
                                }

                            )}
                    >
                        <Text>Actionsheet</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


*/

/*

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet,ToastAndroid} from 'react-native';
import {
    Container, Header, Title, Content, Icon, Button, Left, Body
} from "native-base";
// import ToastUtil from "../../utils/ToastUtil";

/!**
 * Created by marno on 2017/1/24
 * Function:检测用户输入
 * Desc:
 *!/
export default class TextInputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            verifyString: '获取验证码',
            isCounting: false,
        };
    }

    show(hint) {
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'white', height: 48}}>

                    <Left>
                        <Button transparent onPress={()=>this._onCloseClick()}>
                            <Icon name='arrow-back' style={{color: '#333'}}/>
                        </Button>
                    </Left>

                    <Body>
                    <Title style={{color: '#333'}}>登录</Title>

                    </Body>

                </Header>


                <Content style={{backgroundColor: 'white'}}>
                    <View style={{marginTop: 60}}>
                        <View style={TextInputStyle.view_account_input_container}>
                            <Icon name="ios-person" style={TextInputStyle.icon_account}/>
                            <TextInput
                                style={TextInputStyle.input_account}
                                placeholder={'手机号'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={11}
                                returnKeyType={'next'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({account: input})
                                }}
                            />
                        </View>
                        <View style={TextInputStyle.view_password_input_container}>
                            <TextInput
                                style={TextInputStyle.input_password}
                                placeholder={'验证码'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={6}
                                returnKeyType={'next'}
                                clearTextOnFocus={true}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({password: input})
                                }}
                            />


                            <Text
                                onPress={()=>this._fetchVerifyCode()}
                                style={TextInputStyle.tv_verify_code}>{this.state.verifyString}</Text>

                        </View>
                        <Button block
                                onPress={()=>this._onLoginButtonClick()}
                                style={TextInputStyle.btn_commit}>
                            <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }

    //点击关闭页面
    _onCloseClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    //点击登录
    _onLoginButtonClick() {
        if (!this.state.account) {
            return this.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return this.show("手机号格式有误");
        } else if (!this.state.password) {
            return this.show("请输入验证码");
        } else if (this.state.password.length < 6) {
            return this.show("验证码必须为6位数")
        }
        this._login();
    }

    //模拟登录操作
    _login() {
        ToastUtil.show("登录成功")
        if (this.props.getIsLogin) {
            this.props.getIsLogin(true);
        }
        this._onCloseClick();
    }

    //获取验证码
    _fetchVerifyCode() {
        if (!this.state.account) {
            return this.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return this.show("手机号格式有误");
        }
        if (this.state.isCounting) {
            return;
        } else {
            this._startCounting();
        }

    }

    _startCounting() {
        var total = 60;
        this.interval = setInterval(()=> {
            this.setState({
                verifyString: total-- + 's 后重新获取',
                isCounting: true,
            })

            if (total <= 0) {
                this.interval && clearInterval(this.interval);
                this.setState({
                    verifyString: '重新获取',
                    isCounting: false,
                })
            }
        }, 1000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }
}


const TextInputStyle = StyleSheet.create({
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,

    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,

    },
    input_account: {
        color:'black',
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center'
    },
    btn_commit: {
        height: 48,
        backgroundColor: '#333',
        marginTop: 38,
        marginHorizontal: 14,
    }
})
*/
