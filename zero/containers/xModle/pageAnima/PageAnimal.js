import React, {Component} from 'react';
import {
    SafeAreaView,
    SectionList,
    Slider,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,
} from 'react-native';


import { createAnimatableComponent, View, Text } from 'react-native-animatable';
const {width, height} = Dimensions.get('window');


export default class PageAnimal extends Component {
    static navigationOptions = ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    state = {
        duration: 1000,
        toggledOn: false,
    };

    textRef = null;
    nextRef = null;


    handleRowPressed = () => {
        // if (this.textRef) {
        //     this.textRef['fadeOutUp'](1000);
        // }
        this.textRef.setNativeProps({
            style: {
                zIndex: 1,
            },
        });
        this.textRef.animate('fadeOutUp', this.state.duration).then(() => {
            this.textRef.setNativeProps({
                style: {
                    zIndex: 0,
                },
            });
        });
        this.nextRef.setNativeProps({
            style: {
                zIndex: 0,
            },
        });
        this.nextRef.animate('fadeInUp', this.state.duration).then(() => {
            this.nextRef.setNativeProps({
                style: {
                    zIndex: 1,
                },
            });
        });
        // if (this.nextRef) {
        //     this.nextRef['slideOutUp'](1000);
        // }
    };

    render() {

        return (
            <View style={{flex: 1}}>

                <SafeAreaView>

                    <View style={{
                        width: width,
                        height: height,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                          ref={ref => {this.textRef = ref}}>
                        <TouchableOpacity onPress={
                            this.handleRowPressed
                        }>
                            <Text>
                                向上动画
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: width,
                        height: height,
                        backgroundColor: 'purple',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position:'relative'
                    }}
                          ref={ref => {this.nextRef = ref}}>
                        {/*<TouchableOpacity onPress={*/}
                        {/*this.handleRowPressed*/}
                        {/*}>*/}
                        {/*<Text>*/}
                        {/*向上动画*/}
                        {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </SafeAreaView>



            </View>
        );
    }
}
