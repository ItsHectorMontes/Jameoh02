import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddRestaurantInit from '../screens/AddRestaurant/AddRestaurantInit';
import AddRestaurantSecond from '../screens/AddRestaurant/AddRestaurantSecond';
import AddRestaurantThird from '../screens/AddRestaurant/AddRestaurantThird';
import AddRestaurantFourth from '../screens/AddRestaurant/AddRestaurantFourth';
import AddRestaurantFiveth from '../screens/AddRestaurant/AddRestaurantFiveth';
import firebase from 'firebase/app';
import 'firebase/auth'

const Stack = createStackNavigator();

const AddRestaurantStack = () => {
  return (
    <Stack.Navigator stackAnimation="fade" headerMode="none" >
      <Stack.Screen name="1" component={AddRestaurantInit} />
      <Stack.Screen name="2" component={AddRestaurantSecond} />
      <Stack.Screen name="3" component={AddRestaurantThird} />
      <Stack.Screen name="4" component={AddRestaurantFourth} />
      <Stack.Screen name="5" component={AddRestaurantFiveth} />
    </Stack.Navigator>
  );
};

export default AddRestaurantStack;