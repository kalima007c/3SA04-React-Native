import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from  './components/Weather'

export default class App extends React.Component {
  render() {
    return (
    <Weather zipCode='80140'/>
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
})