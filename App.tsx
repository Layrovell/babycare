/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
