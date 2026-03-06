import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainPage} />
      <Tab.Screen name="Sample" component={() => <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Sample Tab Screen</Text></View>} />
    </Tab.Navigator>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={TabScreens} />
      <Drawer.Screen name="DrawerSample" component={() => <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Sample Drawer Screen</Text></View>} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={DrawerScreens} options={{ headerShown: false }} />
      </Stack.Navigator>
    // Removed NavigationContainer for Expo Router compatibility
  );
}
