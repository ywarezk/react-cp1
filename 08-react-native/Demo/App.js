/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';


const App = () => {
  return (
    <View style={ {backgroundColor: 'red', height: '100%', display: 'flex', justifyContent: 'center'} }>
      <MapView
        style={{ height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* <Text style={ {textAlign: 'center', fontSize: 30} }>Hello world</Text> */}
    </View>
  );
};

export default App;
