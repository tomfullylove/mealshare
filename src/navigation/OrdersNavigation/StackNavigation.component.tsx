import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Orders from '../../screens/Generic';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
