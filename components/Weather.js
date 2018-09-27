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
  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=26bbfd6e9b016eda12b50d29b9a2795f`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            forecast: {
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          })
      })
      .catch((error) => {
        console.warn(error)
      })
  }
  componentDidMount = () => this.fetchData()
  render() {
    let {zipCode,cityName} = this.props
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bg2.jpeg')} style={styles.backdrop}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{
              width: 350,
              height: 600,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              alignItems: 'center'
            }}>
              <Text style={styles.Headline}>{zipCode}</Text>
              <Text style={styles.Headline}>{cityName}</Text>
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
export default Weather