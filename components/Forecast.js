import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default class Forecast extends React.Component {
    render() {
        let { main, description, temp } = this.props
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 200,

            }}>
                <Text style={styles.owner}>59355512007</Text>
                <Text style={styles.owner}>Donnukrit Satirakul</Text>
                <Text style={styles.notiMain}>{main}</Text>
                <Text style={styles.notiDesc}>{description}</Text>
                <Text style={styles.notiTemp}>{temp + " " + "°C"}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    notiTemp: {
        fontSize: 60,
        color: 'white'
    },
    notiMain: {
        fontSize: 28,
        color: 'white',
        paddingBottom: 25,
    },
    notiDesc: {
        fontSize: 18,
        color: 'white',
        paddingBottom: 50,
    },
    owner: {
        fontSize: 14,
        color: 'white',
    },

})