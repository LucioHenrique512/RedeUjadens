/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Routes from './routes';
import {GlobalStyle} from './style';
import {StatusBar} from 'react-native';
import {colors} from './constants';

//declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <GlobalStyle>
        <StatusBar backgroundColor={colors.BACKGROUND} />
        <Routes />
      </GlobalStyle>
    </>
  );
};

export default App;
