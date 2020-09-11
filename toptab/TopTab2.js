import React from 'react'
import { View, Text, Button } from 'react-native';


const TopTab2 = props => {

    return (
        <View style={{ justifyContent: 'center', height: "100%", alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>TopTab2</Text>
            <Button
                title="TopTab2"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default TopTab2;