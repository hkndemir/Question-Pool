import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Navigator from './navigators';

export default function Main() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
