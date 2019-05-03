import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Kodluyoruz - ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#38598b',
        height: 50,
        marginBottom: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    headerText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default Header;
