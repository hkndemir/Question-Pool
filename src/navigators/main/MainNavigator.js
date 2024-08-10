import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePage from '../../screens/homePage';
import QuestionScreen from '../../screens/questionScreen';
import ExamResultScreen from '../../screens/examResultScreen';

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
      <Stack.Screen name="ExamResultScreen" component={ExamResultScreen} />
    </Stack.Navigator>
  );
}