import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import AddRestaurantHeader from '../../components/AddRestaurant/AddRestaurantHeader';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import styles from './styles';

const AddRestaurantThird = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [myRestaurantLocation, setMyBussinesLocation] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrMessage('Permiso para acceder a la ubicación fue denegado.');
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
  })()
  }, []);

  const handleSetRestaurantLocation = (event) => {
    setMyBussinesLocation(event.nativeEvent.coordinate);
  }

  let text = "esperando...";
  if (errMessage) {
    text = errMessage;
  } else if (location) {
    text = "";
  }
  return (
    <ScrollView>
      <AddRestaurantHeader screenId={2} navigation={navigation} />
      <View style={styles.form}>
      </View>
      <Text style={styles.screenTitle}>Ubicación</Text>
      <TextInput style={styles.textInput} placeholder="Ciudad"/>
      <TextInput style={styles.textInput} placeholder="Dirección"/>
      <Text style={styles.screenTitle}>Fijar ubicación</Text>
      {
        location 
        ? <View>
          <TouchableOpacity style={styles.myLocationButton} onPress={() => setMyBussinesLocation(location.coords)}>
            <Icon type="material-community" name="crosshairs-gps" />
          </TouchableOpacity>
          <MapView 
                style={styles.mapview}
                showsUserLocation
                onPress={event => handleSetRestaurantLocation(event)}
                initialRegion={{
                  ...location.coords, 
                  latitudeDelta: 0.099, 
                  longitudeDelta: 0.088
                }}>
                  {
                    myRestaurantLocation 
                    ? <Marker coordinate={myRestaurantLocation}>
                        <Icon type="material-community" name="map-marker" color="#fdd367" size={48} />
                      </Marker> 
                    : null
                  }
                </MapView>
        <Text>{text}</Text>
        </View>
      : null
      }
      <TouchableOpacity onPress={()=>navigation.push('4')}>
        <Icon type="material-community" name="arrow-right-bold-circle" color="#fdd367" size={46} />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default AddRestaurantThird;