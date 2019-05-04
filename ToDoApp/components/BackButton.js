import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from 'react-native-router-flux';


const pop = async () => {
    await Actions.pop();
    Actions.refresh({ key: Math.random() });
}

const BackButton = () => {
    return (
        <TouchableOpacity
            onPress={pop}
        >
            <View style={{ alignItems: 'center' }}>
                <Icon
                    style={{ marginLeft: 10 }}
                    name="arrow-left"
                    size={14}
                    color={"white"}
                />
            </View>
        </TouchableOpacity>

    )
}

export default BackButton;
