
import React, { Component } from "react";
import { Platform, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Promotions from "../screens/Promotions";
import { dummyData } from"../data/Data";
import { ScrollView } from "react-native-gesture-handler";




const Stack = createStackNavigator();

export default function PromotionsStack() {
    
        return (
        <ScrollView>
            <Text>
                panel administrativo de promociones
            </Text>
            <Text>
                panel administrativo de promociones
            </Text>
            
            <Text>
                panel administrativo de promociones
            </Text>
            
            
            
        </ScrollView>
        
           
        );    

    
       
    
}