import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurantStack from "../navigations/AddRestaurantStack";
import Restaurant from "../screens/Restaurants/Restaurant";
import AddReviewRestaurant from "../screens/Restaurants/AddReviewRestaurant";
import Search from  "../screens/Search";
import * as firebase from 'firebase/app';

const Stack = createStackNavigator();

export default function ResaturantsStack() {
  return (
    <Stack.Navigator>
      
   
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
     
      <Stack.Screen
        name="add-restaurant"
        component={AddRestaurantStack}
        options={{ title: `Hola ${firebase.auth().currentUser.displayName}` }}
      />
      <Stack.Screen name="restaurant" component={Restaurant} />
      <Stack.Screen
        name="add-review-restaurant"
        component={AddReviewRestaurant}
        options={{ title: "Nuevo comentario" }}
      />
    </Stack.Navigator>
  );
}
