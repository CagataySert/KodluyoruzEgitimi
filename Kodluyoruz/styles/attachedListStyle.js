import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    attachedListRegion: {
        width,
        marginTop: 20,
    },
    attachedBox: {
        justifyContent: 'center',
        width: width * 0.9,
        marginBottom: 15,
        borderColor: '#a2a8d3',
        borderWidth: 1,
        borderRadius: 5,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    quoteLeftIcon: {
        marginLeft: 10
    },
    quoteRightIcon: {
        marginRight: 10
    },
    title: {
        width: width * 0.6,
        marginLeft: 5,
        color: 'white',
        fontSize: 16
    },
    trashIcon: {
        marginRight: 10,
        marginLeft: 10
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    arrowIcon: {
        marginLeft: 10
    },
    description: {
        marginLeft: 5,
        color: 'white',
        fontSize: 12
    }
})