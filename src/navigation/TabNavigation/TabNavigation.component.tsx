import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
          labelStyle: {},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Selling" component={Selling} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
