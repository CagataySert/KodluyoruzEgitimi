import { AsyncStorage } from 'react-native';

//Retrieve data from the local storage.
export default _retrieveData = async () => {
    let response;
    try {
        response = await AsyncStorage.getItem('localDb') || 'none';
    }
    catch (error) {
        console.log(error.message);
    }
    return JSON.parse(response);
};