import React, { Component } from "react";
import { Text, FlatList, StyleSheet, Dimensions, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/attachedListStyle";
import { TouchableOpacity } from "react-native";

class AttachedList extends Component {
  render() {
    return (
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        data={this.props.attachedList}
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
                onPress={() => this.props.deleteNote(item.id)}
                activeOpacity={0.7}
              >
                <Icon
                  style={styles.trashIcon}
                  name="trash"
                  size={16}
                  color={"white"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.getNoteToBeUpdated(item.id)}
                activeOpacity={0.7}
              >
                <Icon
                  style={styles.editIcon}
                  name="edit"
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
    );
  }
}

export default AttachedList;
