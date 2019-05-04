import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/formStyle';
import _storeData from './StoreData';
import _retrieveData from './RetrieveData';
import { Actions } from 'react-native-router-flux';

class Form extends Component {
    state = {
        title: "",
        description: "",
        isUpdate: false,
        idOfUpdatedValue: -1,
        attachedList: []
    };

    componentDidMount() {
        //response comes back as promise from local storage.
        const response = _retrieveData();
        response.then(data => {
            this.setState({ attachedList: data });
        });
    }

    handleTextChange = (type, value) => {
        type === "title"
            ? this.setState({ title: value })
            : this.setState({ description: value });
    };

    handleAddButton = async () => {

        attachedList = [
            ...this.state.attachedList,
            { title: this.state.title, description: this.state.description }
        ];
        attachedList.map((attachedNote, index) => {
            attachedNote.id = index;
        });

        await this.setState({
            title: "",
            description: "",
            attachedList
        });
        _storeData(attachedList);
    };

    render() {

        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: "white", marginBottom: 5, marginTop: 10 }}>Title</Text>
                <TextInput
                    maxLength={20}
                    style={[styles.input, { height: 40 }]}
                    onChangeText={text => this.handleTextChange("title", text)}
                    value={this.state.title}
                />

                <Text style={{ color: "white", marginTop: 10, marginBottom: 5 }}>
                    Description
                </Text>
                <TextInput
                    maxLength={200}
                    multiline={true}
                    style={[styles.input, { height: 80 }]}
                    onChangeText={text => this.handleTextChange("description", text)}
                    value={this.state.description}
                />

                <TouchableOpacity
                    onPress={this.handleAddButton}
                    style={styles.button}
                >
                    <Text style={{ color: 'white' }}>Add</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Form;