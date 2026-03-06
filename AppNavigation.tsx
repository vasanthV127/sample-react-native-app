import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { default as React, default as React } from 'react';
import { Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

// Profile screen to show user data
function ProfileScreen({ route }: any) {
  const { user } = route.params || {};
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>Profile</Text>
      <Text style={{ fontSize: 18, marginTop: 12 }}>Username: {user?.username || 'Unknown'}</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabScreens({ route, navigation }: any) {
  // Pass user data to Profile tab
  const user = route?.params?.user;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainPage} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ user }} />
      <Tab.Screen name="Sample" component={() => <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Sample Tab Screen</Text></View>} />
    </Tab.Navigator>
  );
}

function DrawerScreens({ route, navigation }: any) {
  // Custom drawer menu items and pass user data
  const user = route?.params?.user;
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={TabScreens} initialParams={{ user }} options={{ drawerLabel: 'Home & Profile' }} />
      <Drawer.Screen name="DrawerSample" component={() => <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Sample Drawer Screen</Text></View>} options={{ drawerLabel: 'Custom Menu Item' }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerTitle: 'Welcome to Login', headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff' }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerScreens}
        options={({ route }) => ({
          headerTitle: route.params?.user ? `Hello, ${route.params.user.username}` : 'Home',
          headerStyle: { backgroundColor: '#28a745' },
          headerTintColor: '#fff',
        })}
      />
    </Stack.Navigator>
  );
}
