import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../utils/colors';

import Settings from '../../screens/Generic';

const Stack = createStackNavigator();

const StackbNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackbNavigator;
