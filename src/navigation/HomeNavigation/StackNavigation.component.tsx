import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../utils/colors';

import Home from '../../screens/Home';
import Filters from '../../screens/Filters';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
