import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import Home from '../HomeNavigation';
import Orders from '../OrdersNavigation';
import Selling from '../SellingNavigation';
import Settings from '../SettingsNavigation';

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.main,
          inactiveTintColor: colors.black,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Orders" 
          component={Orders} 
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Selling" 
          component={Selling} 
          options={{
            tabBarLabel: 'Selling',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pricetag-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
