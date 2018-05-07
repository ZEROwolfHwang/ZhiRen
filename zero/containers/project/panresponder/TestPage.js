/**
 * Created by zerowolf Date: 2018/4/26 Time: 上午9:46
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView,Animated
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../../views/MyTabView';
import BaseComponent from '../../global/BaseComponent';
import PanResponder from "./PanResponder";
import MyPanResponder from "./MyPanResponder";




const SCREEN_WIDTH = Dimensions.get("window").width;
//Screen component
            //we are going to write animation function and pass it to here
const Screen = props => {
    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen, transitionAnimation(props.index),{backgroundColor:'purple'}]}>
                <Text style={styles.text}>{props.text}</Text>
            </Animated.View>
        </View>
    );
};
//Styles
const styles = StyleSheet.create({
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: 600,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white"
    },
    text: {
        fontSize: 45,
        fontWeight: "bold"
    }
});








const xOffset = new Animated.Value(0);

const transitionAnimation = index => {
    return {
        transform: [
            { perspective: 800 },
            {
                scale: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: [0.25, 1, 0.25]
                })
            },
            {
                rotateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["45deg", "0deg", "45deg"]
                })
            },
            {
                rotateY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["-45deg", "0deg", "45deg"]
                })
            }
        ]
    };
};









export default class TestPage extends BaseComponent {

    constructor(props) {
        super(props);

    }
            // <Animated.ScrollView
            //     scrollEventThrottle={16}
            //     onScroll={Animated.event(
            //         [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            //         { useNativeDriver: true }
            //     )}
            //     horizontal
            //     pagingEnabled
            //     style={styles.scrollView}
            // >
            //     <Screen text="Screen 1" index={0} />
            //     <Screen text="Screen 2" index={1} />
            //     <Screen text="Screen 3" index={2} />
            // </Animated.ScrollView>

            // <PanResponder/>
    render() {
        console.log('nihaaaaao');
        return (
            <MyPanResponder/>
        );
    }
}
