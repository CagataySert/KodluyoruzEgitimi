import React, { Component } from "react";
import { Text, FlatList, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/attachedListStyle";
import { TouchableOpacity } from "react-native";
import _retrieveData from './RetrieveData';
import _storeData from './StoreData';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { getToDoList, deleteNote } from '../actions/ToDoListActions';

const { width } = Dimensions.get('window');

class AttachedList extends Component {

  state = {
    attachedList: []
  }

  componentDidMount() {
    this.props.getToDoList();
  }

  //Delete Process
  deleteNote = id => {
    this.props.deleteNote(id);
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
          data={this.props.data[0]}
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

const mapStateToProps = ({ toDoListResponse }) => {
  _storeData(toDoListResponse.data[0]);
  return { data: toDoListResponse.data };
}

export default connect(mapStateToProps, { getToDoList, deleteNote })(AttachedList);
