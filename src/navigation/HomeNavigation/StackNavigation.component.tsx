import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
