import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Dimensions, View } from 'react-native'

const { width } = Dimensions.get('window');


class AttachedList extends Component {




    render() {
        return (
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={this.props.attachedList}
                renderItem={({ item }) =>
                    <View style={styles.attachedBox}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>}
                style={styles.attachedListRegion}
            />
        )
    }
}

const styles = StyleSheet.create({
    attachedListRegion: {
        width,
        marginTop: 20,
    },
    attachedBox: {
        width: width * 0.9,
        height: 50,
        marginBottom: 15,
        borderColor: '#a2a8d3',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center'

    },
    title: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16
    },
    description: {
        marginLeft: 10,
        color: 'white',
        fontSize: 12
    }
})

export default AttachedList;