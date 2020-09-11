import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native';

const SecondScreen = props => {
    console.log("TCL: props", props)
    const [navData, setNavData] = useState("");
    useEffect(() => {
        setNavData(props.route.params.data);
    }, [navData]);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ marginTop: 20 }}>{navData}</Text>
            <View style={{ marginTop: 20 }}>
                <Button
                    title="View Bottom Tab"
                    onPress={() => { props.navigation.navigate("bottomTabs") }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title="View Top Tab"
                    onPress={() => { props.navigation.navigate("topTabs") }}
                />
            </View>
        </View>
    )
}

export default SecondScreen;