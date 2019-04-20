import React, { Component } from 'react';
import {
    AppRegistry, TextInput, StyleSheet, Dimensions
} from 'react-native';


const { width } = Dimensions.get('window');

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Usseless' };
        console.log(props.inputHeight);

    }

    render() {
        return (
            <TextInput
                style={[styles.input, { height: this.props.inputHeight }]}
                onChangeText={(text) => this.setState({ text })}
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