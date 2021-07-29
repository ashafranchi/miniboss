import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';
import FourthPage from './screens/FourthPage';
import FifthPage from './screens/FifthPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator
        initialRouteName="FirstPage"
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: 'List' }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
    >
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: 'Map' }}
      />
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FourthPage"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
      />
    </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FifthPage"
    >
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{ title: 'Help' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType={'permanent'}
          drawerStyle={{
            backgroundColor: '#14142B',
            width: '15%',
          }}
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            labelStyle: {color: '#ffffff'},
            itemStyle: { marginVertical: 5 },
          }}>
          <Drawer.Screen
            name="Home"
            options={{ drawerLabel: 'Home' }}
            component={firstScreenStack} />
          <Drawer.Screen
            name="List"
            options={{ drawerLabel: 'List' }}
            component={secondScreenStack} />
          <Drawer.Screen
            name="Map"
            options={{ drawerLabel: 'Map' }}
            component={thirdScreenStack} />
          <Drawer.Screen
            name="Door"
            onPress={() => navigation.closeDrawer()}
            options={{ drawerLabel: 'Door' }}
            component={fourthScreenStack} />
          <Drawer.Screen
            name="Help"
            options={{ drawerLabel: 'Help' }}
            component={fifthScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;