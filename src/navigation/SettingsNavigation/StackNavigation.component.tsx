import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../../screens/Generic';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
