import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../utils/colors';

import Selling from '../../screens/Generic';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Selling" component={Selling} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
