import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from  './components/Weather'
// import Forecast from './components/Forecast'

export default class App extends React.Component {
  render() {
    return (
     <Weather zipCode="83120"/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});