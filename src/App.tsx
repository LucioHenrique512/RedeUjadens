/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from "react";
import Routes from './routes';
import {GlobalStyle} from './style';
import {StatusBar} from 'react-native';
import {colors} from './constants';
import {Provider} from "react-redux"
import {store} from "./store"

//declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <StatusBar backgroundColor={colors.BACKGROUND} />
        <Routes />
      </GlobalStyle>
    </Provider>
  );
};

export default App;
