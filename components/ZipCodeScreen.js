import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native'
const availableZipItems = [
  { place: 'Hatyai', code: '90110' },
  { place: 'Trang', code: '92000' },
  { place: 'Chiangmai', code: '50000' },
  { place: 'Pakphanang', code: '80140' },
  { place: 'Nakhon Si', code: '80000' },
]
const ZipItem = ({ place, code, navigate }) => (
  <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
    <View style={styles.zipItem,{flex:1, flexDirection: 'row',paddingTop: 25}}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>
  </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Choose a zip code</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Title: { width: '100%', },
  zipPlace: { flex: 1, textAlign: 'left', fontSize: 18 ,paddingLeft: 25},
  zipCode: { flex: 1, textAlign: 'right', fontSize: 18 ,paddingRight: 25},

})