import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';
import HomeScreen from '../screens/home-screen/home-screen';
import TransactionsScreen from '../screens/transactions-screen/transactions-screen';
import BudgetScreen from '../screens/budget-screen/budget-screen';
import ProfileScreen from '../screens/profile-screen/profile-screen';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: theme.colors.background,
        ...styles.barStyle,
      }}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color }) => (
            <Ionicons name="arrow-redo" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarLabel: 'Budget',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-pie" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={22} />
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
  },
});

export default BottomNavigation;
