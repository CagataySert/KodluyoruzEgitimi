import React, { Component } from 'react';
import {
    AppRegistry, TextInput, StyleSheet, Dimensions
} from 'react-native';


const { width } = Dimensions.get('window');

class Input extends Component {
    state = {
        text: ''
    };

    handleTextChange = (text) => {
        this.setState({ text });
        this.props.handleTextChange(this.props.type, text);
    }

    render() {
        return (
            <TextInput
                style={[styles.input, { height: this.props.inputHeight }]}
                onChangeText={(text) => this.handleTextChange(text)}
                value={this.state.text}
            />
        );
    }
}


const styles = StyleSheet.create({
    input: {
        width: width * 0.9,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#a2a8d3'
    }
});


export default Input;