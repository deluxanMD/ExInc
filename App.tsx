import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Platform,
} from 'react-native';
import { PaperProvider, useTheme } from 'react-native-paper';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/navigations/stack-navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <StatusBar
          barStyle={
            Platform.OS === 'android'
              ? 'light-content'
              : isDarkMode
              ? 'light-content'
              : 'dark-content'
          }
          backgroundColor={
            Platform.OS === 'android'
              ? theme.colors.primary
              : backgroundStyle.backgroundColor
          }
        />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
