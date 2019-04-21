import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';
import AttachedList from './components/AttachedList';
import { AsyncStorage } from 'react-native';

export default class App extends Component {

  state = {
    title: '',
    description: '',
    attachedList: []
  }

  componentDidMount() {
    //response comes back as promise from local storage.
    const response = this._retrieveData();
    const attachedList = response.then((data) => {
      this.setState({ attachedList: data });
    });
  }

  //Store data to Local of phone.
  _storeData = async (data) => {
    try {
      strData = JSON.stringify(data);

      await AsyncStorage.setItem('za11', strData);
    }
    catch (error) {
      console.log(error.message);
    }
  };

  //Retrieve data from the local storage.
  _retrieveData = async () => {
    let response;
    try {
      response = await AsyncStorage.getItem('za11') || 'none';
    }
    catch (error) {
      console.log(error.message);
    }
    return JSON.parse(response);
  };

  handleTextChange = (type, value) => {
    type === 'title' ? this.state.title = value : this.state.description = value;
  }

  handleAddButton = async () => {
    await this.setState({
      attachedList: [...this.state.attachedList, { 'title': this.state.title, 'description': this.state.description }]
    })

    await this._storeData(this.state.attachedList);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />

        <Text style={{ color: 'white', marginBottom: 5 }}>Title</Text>
        <Input handleTextChange={this.handleTextChange} type='title' inputHeight={40} />

        <Text style={{ color: 'white', marginTop: 10, marginBottom: 5 }}>Description</Text>
        <Input handleTextChange={this.handleTextChange} type='decription' inputHeight={80} />

        <Button handleAddButton={this.handleAddButton} color={'#183661'} text={'Add'} />

        <AttachedList attachedList={this.state.attachedList} />
      </SafeAreaView >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#38598b',
  }
});
