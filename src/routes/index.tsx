import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationDarkTheme} from '../style/themes';
import {colors} from '../constants';

import WellcomeScreen from './wellcomescreen';
import LoginScreen from './loginscreen';
import RegisterScreen from './registerscreen';
import HomeScreen from './homescreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const PublicStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureDirection: 'horizontal',
      headerStyle: {
        elevation: 0,
        height: 48,
        backgroundColor: colors.BACKGROUND,
      },
    }}>
    <Stack.Screen
      options={{headerTitle: ''}}
      name="wellcome"
      component={WellcomeScreen}
    />
    <Stack.Screen
      options={{headerTitle: 'Realize o login'}}
      name="login"
      component={LoginScreen}
    />
    <Stack.Screen
      options={{headerTitle: 'Realize o cadastro'}}
      name="register"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);

const PrivateStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        height: 48,
        backgroundColor: colors.BACKGROUND,
      },
    }}>
    <Stack.Screen
      options={{headerTitle: 'Home'}}
      name="home"
      component={HomeScreen}
    />
  </Stack.Navigator>
);

const Routes = () => {
  const {isAuthenticed} = useSelector((store: any) => store.authentication);
  //console.log("Is authenticed:",isAuthenticed);
  return (
    <NavigationContainer theme={navigationDarkTheme}>
      {isAuthenticed ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default Routes;
