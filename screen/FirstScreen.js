import React from 'react'
import { View, Text, Button } from 'react-native'
import { naviga } from '@react-navigation/native';
const FirstScreen = props => {

    return (
        <View>
            <Text>FirstScreen</Text>
            <Button
                style={{ marginTop: 50 }}
                title="Go to Second"
                onPress={() => props.navigation.navigate("Second",{"data":"Data from navigation"})
                }
            />
        </View>
    )
}

export default FirstScreen;