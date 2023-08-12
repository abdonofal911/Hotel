/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import AppStackNavigation from './navigation/stackNavigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <AppStackNavigation />
    </View>
  );
}
