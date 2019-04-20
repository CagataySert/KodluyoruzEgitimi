import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';
import AttachedList from './components/AttachedList';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />

        <Text style={{ color: 'white', marginBottom: 5 }}>Title</Text>
        <Input inputHeight={40} />

        <Text style={{ color: 'white', marginTop: 10, marginBottom: 5 }}>Description</Text>
        <Input inputHeight={80} />

        <Button renk={'#183661'} text={'Add'} />

        <AttachedList />
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
