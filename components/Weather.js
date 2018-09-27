import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Forecast from './Forecast'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: {
        main: '-', description: '-', temp: 0
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 350, height: 100, backgroundColor: 'rgba(0, 0, 0, 0.66)', alignItems: 'center' }}>
              <Text style={styles.Headline}>{this.props.zipCode}</Text>
              <Text style={styles.Headline}>Nakorn Si Thammarat</Text>
            </View>
          </View>
          <Forecast {...this.state.forecast} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  },
  backdrop: {
    width: '100%',
    height: '100%'
  },

  Headline: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 10,
    color: 'white'
  },
})

export default Weather;