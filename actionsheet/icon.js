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
  Text,
    CardItem,
Card
} from "native-base";
import styles from "./styles";


var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" },
    { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },{ text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },{ text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },{ text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },

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
       {/!* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>ActionSheet</Title>
          </Body>
          <Right />
        </Header>*!/}
        <Content padder>
          <Button style={{height:200}}
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select an option"
                },


                Index => {
                  this.setState({ clicked: BUTTONS[Index] });
                    console.log(Index);
                }
              )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
        {/!*  <Content padder>
              <Card style={{justifyContent:'center',alignItems:'center', height:250}}>


                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <Text>jhgsdhqwj</Text>
                  <CardItem header bordered>
                      <Text>NativeBase</Text>
                  </CardItem>
                  <CardItem bordered>
                      <Body>
                      <Text style={{color:'red'}}>
                          NativeBase is a free and open source framework that enable
                          developers to build
                          high-quality mobile apps using React Native iOS and Android
                          apps
                          with a fusion of ES6.
                      </Text>
                      </Body>
                  </CardItem>
                  <CardItem bordered>
                      <Body>
                      <Text>
                          NativeBase builds a layer on top of React Native that provides
                          you with
                          basic set of components for mobile application development.
                      </Text>
                      </Body>
                  </CardItem>
                  <CardItem bordered>
                      <Body>
                      <Text>
                          Get on the mobile fast track with NativeBase, the
                          fastest-growing platform
                          and tool set for iOS and Android development.
                      </Text>
                      </Body>
                  </CardItem>
                  <CardItem footer bordered>
                      <Text>GeekyAnts</Text>
                  </CardItem>
              </Card>
          </Content>*!/}
      </Container>
    );
  }
}
*/


/*
import React, { Component } from "react";
import {ListView,View} from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerExample extends Component {
    constructor(props) {
        super(props);
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
                    dataSource: ds.cloneWithRows(this._renderList()),
            selected1: "key1"
        };
    }
    _renderList(){
       // var dataList=['1','1','1','1','1','1','1','1','1']
       var dataList=[]
        for(var  i = 0;i<100;i++) {
            let number = i;
            dataList.push(<Picker.Item key={number} label={`Wallet${number}`}
                                       value={`key${number}`}/>);
        }

        return dataList;

    }

    renderRow(data){
      return(<View>
          {data}
      </View>)
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Picker</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form style={{height:200}}>
                        <Picker
                            style={{color:'black',backgroundColor:'blue',width:300,height:40,borderRadius:20}}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            {/!*<ListView/>*!/}
                            {this._renderList()}
                        </Picker>




                    </Form>
                </Content>
            </Container>
        );
    }
}
*/

/*
import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, } from "native-base";
export default class PickerCustomHeaderTextExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected3: "key3"
        };
    }
    onValueChange3(value: string) {
        this.setState({
            selected3: value
        });
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Custom Header Title</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form style={{backgroundColor:'red'}}>

                        <Picker
                            itemStyle={{height:20,backgroundColor:'white'}}
                            mode="dropdown"
                            iosHeader="Your Header"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: Platform.OS === "ios" ? undefined : 300 ,color:'blue',backgroundColor:'red'}}
                            selectedValue={this.state.selected3}
                            onValueChange={this.onValueChange3.bind(this)}
                        >
                            <Picker.Item style={{backgroundColor:'orange',color:'red'}} label="Wallet" value="key0" />


                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>

                    </Form>
                </Content>
            </Container>
        );
    }
}*/

import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Right,
    Body,
    Left,
    Picker,
    Form
} from "native-base";

export default class PickerTextAndItemStyleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                    <Title>Picker Text & ItemText Styles</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline"/>}
                            placeholder="Select your SIM"
                            textStyle={{color: "#5cb85c"}}
                            itemStyle={{
                                backgroundColor: "#d3d3d3",
                                marginLeft: 0,
                                paddingLeft: 10
                            }}
                            itemTextStyle={{color: '#788ad2'}}
                            style={{width: undefined}}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0"/>
                            <Picker.Item label="ATM Card" value="key1"/>
                            <Picker.Item label="Debit Card" value="key2"/>
                            <Picker.Item label="Credit Card" value="key3"/>
                            <Picker.Item label="Net Banking" value="key4"/>
                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}
