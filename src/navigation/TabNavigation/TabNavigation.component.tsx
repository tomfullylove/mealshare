import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PageContainer from '../../components/atoms/PageContainer';

import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

const Screen: React.FC = () => {
  return <PageContainer />;
};

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Screen} />
        <Tab.Screen name="Selling" component={Screen} />
        <Tab.Screen name="Settings" component={Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
