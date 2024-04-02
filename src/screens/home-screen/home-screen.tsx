import { Text } from 'react-native';
import React from 'react';
import HomeScreenAppbar from './home-screen-app-bar/home-screen-app-bar.component';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <HomeScreenAppbar />
      <Text>HomeScreen</Text>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
