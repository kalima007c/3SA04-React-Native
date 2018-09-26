import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast';


export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: {
        main: '-', descroption: '-', temp: 0
      }
    }
  }
  render() {
    //let {zipCode,CityName} = this.props
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text>Zip Code is {This.props.zipCode}</Text>
        <Forecast {...this.state.forecast}/>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { paddingTop: 25 }, 
  backdrop: { width: '100%', height: '100%'}, 
});