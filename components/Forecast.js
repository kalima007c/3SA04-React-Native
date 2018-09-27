import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default class Forecast extends React.Component {
    render() {
        let { main, description, temp } = this.props
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 200 }}>
                <Text style={styles.noti}>{main}</Text>
                <Text style={styles.noti}>{description}</Text>
                <Text style={styles.noti}>{temp + " " + "°C"}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    noti: {
        fontSize: 30,
        color: 'white'
    },
})