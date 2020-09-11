import React from 'react'
import { View, Text, Button } from 'react-native';


const BottomTab1 = props => {

    return (
        <View style={{ justifyContent: 'center', height: "100%", alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>BottomTab1</Text>
            <Button
                title="BottomTab1"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default BottomTab1;