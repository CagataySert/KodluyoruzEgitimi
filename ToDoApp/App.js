import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Button from './components/Button';
import AttachedList from './components/AttachedList';
import styles from './styles/formStyle';
import _retrieveData from './components/RetrieveData';
import _storeData from './components/StoreData';

export default class App extends Component {

  state = {
    title: '',
    description: '',
    isUpdate: false,
    idOfUpdatedValue: -1,
    attachedList: []
  }

  componentDidMount() {
    //response comes back as promise from local storage.
    const response = _retrieveData();
    response.then((data) => {
      this.setState({ attachedList: data });
    });
  }



  handleTextChange = (type, value) => {
    type === 'title' ? this.setState({ title: value }) : this.setState({ description: value });
  }

  handleAddButton = async () => {
    //Update Section
    if (this.state.isUpdate === true) {
      this.updateNote(this.state.idOfUpdatedValue, this.state.title, this.state.description);
    }

    else {
      //Add Section
      attachedList = [...this.state.attachedList, { 'title': this.state.title, 'description': this.state.description }];
      attachedList.map((attachedNote, index) => {
        attachedNote.id = index;
      });

      await this.setState({
        title: '',
        description: '',
        attachedList
      });
      _storeData(attachedList);
    }
  }


  //Delete Process
  deleteNote = (id) => {
    try {
      console.log(this.state.attachedList);

      const response = _retrieveData();

      response.then((data) => {
        const newData = data.filter((attachedNote) => attachedNote.id !== id);
        _storeData(newData);
        this.setState({ attachedList: newData });
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }


  //Update Process
  getNoteToBeUpdated = (id) => {
    const response = _retrieveData();
    response.then((data) => {
      const noteToBeUpdated = data.filter((attachedNote) => attachedNote.id === id);
      this.setState({
        title: noteToBeUpdated[0].title,
        description: noteToBeUpdated[0].description,
        isUpdate: true,
        idOfUpdatedValue: id
      });
    });
  }

  updateNote = (id, newTitle, newDescription) => {
    try {
      const response = _retrieveData();
      response.then((data) => {
        const attachedNote = data.filter((attachedNote) => attachedNote.id === id);
        console.log(attachedNote);
        attachedNote[0].title = newTitle;
        attachedNote[0].description = newDescription;

        this.setState({
          title: '',
          description: '',
          idOfUpdatedValue: -1,
          attachedList: data,
          isUpdate: false
        });

        _storeData(data);
      })
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

        <AttachedList getNoteToBeUpdated={this.getNoteToBeUpdated} deleteNote={this.deleteNote} attachedList={this.state.attachedList} />
      </SafeAreaView >
    );
  }
}