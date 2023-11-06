import React from "react";
import {  } from 'react-native';
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveBackgroundColor: 'white'
      }}>
        <Tab.Screen name={'Current'} component={CurrentWeather} options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'droplet'} size={25} color={ focused ? 'tomato' : 'black' } />
          )
        }} />
        <Tab.Screen name={"Upcoming"} component={UpcomingWather} options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'clock'} size={25} color={ focused ? 'tomato' : 'black' } />
          )
        }} />
        <Tab.Screen name={"City"} component={City} options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={'home'} size={25} color={ focused ? 'tomato' : 'black' } />
          )
        }} />
        {/* <UpcomingWather  /> */}
        {/* <CurrentWeather /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;