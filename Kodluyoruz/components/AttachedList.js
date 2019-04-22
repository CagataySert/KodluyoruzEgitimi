import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Dimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/attachedListStyle'
const { width } = Dimensions.get('window');


class AttachedList extends Component {

    render() {
        return (
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={this.props.attachedList}
                renderItem={({ item }) =>
                    <View style={styles.attachedBox}>
                        <View style={styles.firstRow}>
                            <Icon style={styles.quoteLeftIcon} name="quote-left" size={12} color={'white'} />
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Icon style={styles.quoteRightIcon} name="quote-right" size={12} color={'white'} />

                            <Icon style={styles.trashIcon} name="trash" size={16} color={'white'} />
                        </View>

                        <View style={{
                            width: width * 0.9,
                            alignItems: 'center',
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <View style={{
                                borderColor: '#a2a8d3',
                                borderWidth: 0.5,
                                width: 150,
                                alignItems: 'center'
                            }}>
                            </View>
                        </View>


                        <View style={styles.secondRow}>
                            <Icon style={styles.arrowIcon} name="arrow-right" size={10} color={'white'} />
                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                    </View>}
                style={styles.attachedListRegion}
            />
        )
    }
}
<Icon name="trash" size={20} color={'white'} />



export default AttachedList;