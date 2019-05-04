import React, { Component } from "react";
import { Text, FlatList, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/attachedListStyle";
import { TouchableOpacity } from "react-native";
import _retrieveData from './RetrieveData';
import _storeData from './StoreData';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');

class AttachedList extends Component {

  state = {
    attachedList: []
  }

  componentDidMount() {
    //response comes back as promise from local storage.
    const response = _retrieveData();
    response.then(data => {
      this.setState({ attachedList: data });
    });
  }

  //Delete Process
  deleteNote = id => {
    try {
      console.log(this.state.attachedList);

      const response = _retrieveData();

      response.then(data => {
        const newData = data.filter(attachedNote => attachedNote.id !== id);
        _storeData(newData);
        this.setState({ attachedList: newData });
      });
    } catch (error) {
      console.log(error.message);
    }
  };


  render() {
    return (
      <View style={{ marginBottom: 60 }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text
            style={{ marginTop: 20, padding: 10, backgroundColor: '#183661', color: 'white', width: width * 0.4, borderRadius: 20 }}
            onPress={() => Actions.addingForm({ type: 'push' })}
          >
            Add New Note
          </Text>
        </View>

        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={this.state.attachedList}
          renderItem={({ item }) => (
            <View style={styles.attachedBox}>
              <View style={styles.firstRow}>
                <Icon
                  style={styles.quoteLeftIcon}
                  name="quote-left"
                  size={12}
                  color={"white"}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Icon
                  style={styles.quoteRightIcon}
                  name="quote-right"
                  size={12}
                  color={"white"}
                />

                <TouchableOpacity
                  onPress={() => this.deleteNote(item.id)}
                  activeOpacity={0.7}
                >
                  <Icon
                    style={styles.trashIcon}
                    name="trash"
                    size={16}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.lineHolder}>
                <View style={styles.line} />
              </View>

              <View style={styles.secondRow}>
                <Icon
                  style={styles.arrowIcon}
                  name="arrow-right"
                  size={10}
                  color={"white"}
                />
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          style={styles.attachedListRegion}
        />
      </View>
    );
  }
}

export default AttachedList;
