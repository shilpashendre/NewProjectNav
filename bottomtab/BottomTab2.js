import React from 'react'
import { View, Text, Button } from 'react-native';


const BottomTab2 = props => {

    return (
        <View style={{ justifyContent: 'center', height: "100%", alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>BottomTab2</Text>
            <Button
                title="BottomTab2"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default BottomTab2;