import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.handleAddButton} activeOpacity={0.7} style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={{ color: 'white' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 40,
        borderRadius: 20,
    }
})

export default Button;


