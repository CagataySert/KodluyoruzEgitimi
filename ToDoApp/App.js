import React, { Component } from "react";
import { Dimensions } from "react-native";
import AttachedList from "./components/AttachedList";
import styles from "./styles/formStyle";
import _retrieveData from "./components/RetrieveData";
import _storeData from "./components/StoreData";
import Form from './components/Form';
import { Router, Scene, Stack } from "react-native-router-flux";
import BackButton from './components/BackButton';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const { width } = Dimensions.get('window');

export default class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router
          titleStyle={{ color: 'white' }}
          navigationBarStyle={{ backgroundColor: '#183661', width }}
          sceneStyle={styles.container}
        >
          <Stack key='root'>

            <Scene
              key='addingForm'
              component={Form}
              title='Add New Note'
              headerTintColor='white'
              renderLeftButton={() => <BackButton />}
            />

            <Scene
              initial
              key='attachedList'
              component={AttachedList}
              title='Attached List'
            />

          </Stack>
        </Router>
      </Provider>
    );
  }
}
