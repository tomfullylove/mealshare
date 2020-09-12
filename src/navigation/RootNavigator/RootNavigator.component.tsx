import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from '../TabNavigation';
import Meal from '../../screens/Meal';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Meal" component={Meal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;