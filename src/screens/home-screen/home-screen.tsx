import React from 'react';
import HomeScreenAppbar from './home-screen-app-bar/home-screen-app-bar.component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreenTabView from './home-screen-tab-view/home-screen-tab-view.component';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <HomeScreenAppbar />
      <HomeScreenTabView />
    </SafeAreaProvider>
  );
};

export default HomeScreen;
