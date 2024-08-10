import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePage from '../../screens/homePage';
import QuestionScreen from '../../screens/questionScreen';

const Stack = createStackNavigator();
export default function MainNavigator({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
    </Stack.Navigator>
  );
}