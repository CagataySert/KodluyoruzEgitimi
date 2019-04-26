import { AsyncStorage } from 'react-native';

//Store data to Local of phone.
export default _storeData = async (data) => {
    try {
        strData = JSON.stringify(data);

        await AsyncStorage.setItem('localDb', strData);
    }
    catch (error) {
        console.log(error.message);
    }
};