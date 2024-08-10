import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import Main from './src/main';
import { store } from './src/redux/store';
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
