import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Selling from '../../screens/Generic';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Selling" component={Selling} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
