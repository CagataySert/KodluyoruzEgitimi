import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Button from './components/Button';
import AttachedList from './components/AttachedList';
import { AsyncStorage } from 'react-native';
import styles from './styles/formStyle';

export default class App extends Component {

  state = {
    title: '',
    description: '',
    attachedList: []
  }

  componentDidMount() {
    //response comes back as promise from local storage.
    const response = this._retrieveData();
    response.then((data) => {
      console.log(data);
      console.log('cmd');
      this.setState({ attachedList: data });
    });
  }

  //Store data to Local of phone.
  _storeData = async (data) => {
    try {
      strData = JSON.stringify(data);

      await AsyncStorage.setItem('localDb', strData);
    }
    catch (error) {
      console.log(error.message);
    }
  };

  //Retrieve data from the local storage.
  _retrieveData = async () => {
    let response;
    try {
      response = await AsyncStorage.getItem('localDb') || 'none';
    }
    catch (error) {
      console.log(error.message);
    }
    return JSON.parse(response);
  };

  handleTextChange = (type, value) => {
    type === 'title' ? this.setState({ title: value }) : this.setState({ description: value });
  }

  handleAddButton = async () => {
    attachedList = [...this.state.attachedList, { 'title': this.state.title, 'description': this.state.description }];
    attachedList.map((attachedNote, index) => {
      attachedNote.id = index;
    });

    await this.setState({
      title: '',
      description: '',
      attachedList
    });
    this._storeData(attachedList);
  }

  deleteNote = (id) => {
    try {

      // this.state.attachedList = this.state.attachedList.filter((attachedNote) => attachedNote.id !== id);
      // this.forceUpdate();
      console.log(this.state.attachedList);

      const response = this._retrieveData();

      response.then((data) => {
        newData = data.filter((attachedNote) => attachedNote.id !== id);
        this._storeData(newData);
        this.setState({ attachedList: newData });

      });
    }
    catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />

        <Text style={{ color: 'white', marginBottom: 5 }}>Title</Text>
        <TextInput
          maxLength={20}
          style={[styles.input, { height: 40 }]}
          onChangeText={(text) => this.handleTextChange('title', text)}
          value={this.state.title}
        />

        <Text style={{ color: 'white', marginTop: 10, marginBottom: 5 }}>Description</Text>
        <TextInput
          maxLength={200}
          multiline={true}
          style={[styles.input, { height: 80 }]}
          onChangeText={(text) => this.handleTextChange('description', text)}
          value={this.state.description}
        />

        <Button handleAddButton={this.handleAddButton} color={'#183661'} text={'Add'} />

        <AttachedList deleteNote={this.deleteNote} attachedList={this.state.attachedList} />
      </SafeAreaView >
    );
  }
}