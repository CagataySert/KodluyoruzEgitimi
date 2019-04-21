import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';
import AttachedList from './components/AttachedList';

export default class App extends Component {

  state = {
    title: '',
    description: '',
    attachedList: []
  }


  handleTextChange = (type, value) => {
    type === 'title' ? this.state.title = value : this.state.description = value;
  }

  handleAddButton = async () => {
    await this.setState({
      attachedList: [...this.state.attachedList, { 'title': this.state.title, 'description': this.state.description }]
    });
    console.log(this.state);

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
