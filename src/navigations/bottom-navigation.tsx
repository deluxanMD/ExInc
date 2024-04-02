import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import HomeScreen from '../screens/home-screen/home-screen';
import MatchesScreen from '../screens/matches-screen/matches-screen';
import SeriesScreen from '../screens/series-screen/series-screen';
import { useTheme } from 'react-native-paper';
import VideoScreen from '../screens/video-screen/video-screen';
import MoreScreen from '../screens/more-screen/more-screen';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      barStyle={styles.barStyle}
      activeIndicatorStyle={styles.activeIndicatorStyle}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.outlineVariant}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Octicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cricket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={SeriesScreen}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shield" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color }) => (
            <Octicons name="video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dots-vertical"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: 80,
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  activeIndicatorStyle: {
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});

export default BottomNavigation;
