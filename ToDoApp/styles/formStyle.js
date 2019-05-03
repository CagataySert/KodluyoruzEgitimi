import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#38598b',
  },
  input: {
    width: width * 0.9,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#a2a8d3'
  }
});
