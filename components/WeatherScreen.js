
import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import Weather from './Weather'

export default class WeatherScreen extends React.Component {  
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <Text></Text>
              ),
            headerTitle: (
                <Text style={styles.HeaderTitle} >Weather</Text>
            ),
            headerRight: (
                <Text style={styles.Right} onPress={() => navigation.navigate('ZipCode')}>Change Zip</Text>
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode');
        
        console.log(zipCode);
        return (
            <Weather zipCode={zipCode}/>
        )
    }
  }
  const styles = StyleSheet.create({
    HeaderTitle: {width: '100%', textAlign: 'center',fontSize: 16},
    Right: { paddingRight: 15,color: '#17a2b8',}
  })