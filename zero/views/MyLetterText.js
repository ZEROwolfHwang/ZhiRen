/**
 * Created by zerowolf Date: 2018/4/27 Time: 上午11:36
 */

import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

export const Letter = (props) => {
    const { children, spacing, textStyle } = props

    const letterStyles = [
        textStyle,
        { paddingRight: spacing }
    ]

    return <Text style={letterStyles}>{children}</Text>
}



const spacingForLetterIndex = (letters, index, spacing) => (letters.length - 1 === index) ? 0 : spacing

export const TextWithLetterSpacing = (props) => {
    const { children, spacing, viewStyle, textStyle } = props
    const letters = children.split('')

    return <View style={[styles.container, viewStyle]}>
        {letters.map((letter, index) =>
            <Letter key={index} spacing={spacingForLetterIndex(letters, index, spacing)} textStyle={textStyle}>
                {letter}
            </Letter>
        )}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default TextWithLetterSpacing;
