import React,{useEffect,useState, useRef} from "react";
import { Text, View } from 'react-native';
import {css} from './assets/CSS/css'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
 async function getLocation(){
  let { status } = await  Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    
    console.log('Permission to access location was denied');
    return;
  }else{
 let location= await Location.getCurrentPositionAsync({enableHighAccuracy: true});
 console.log(location);
 setOrigin({
  latitude: location.coords.latitude,
  longitude: location.coords.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
 })
return;
 
  }

 }
  useEffect(()=>{

    getLocation();

     
  }, [])

  return (
    <View style={css.container}>
       <MapView
    initialRegion={origin}
    showsUserLocation={true}
    zoomEnabled={false}
       style={css.map} >

       </MapView>
       <View 
       style={css.search}

       >
       <Text>fadafdf</Text>

       </View>
    </View>
  );
}
