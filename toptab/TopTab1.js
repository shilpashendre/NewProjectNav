import React from 'react'
import { View, Text, Button } from 'react-native';


const TopTab1 = props => {

    return (
        <View style={{ justifyContent: 'center', height: "100%", alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>TopTab1</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default TopTab1;