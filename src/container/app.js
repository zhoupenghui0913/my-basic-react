/** 根页 **/
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './routers';

export default function RootContainer() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
