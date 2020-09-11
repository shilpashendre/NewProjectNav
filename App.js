/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen';
import ThirdScreen from './screen/ThirdScreen';

import MenuOne from './screen/MenuOne';
import MenuTwo from './screen/MenuTwo';
import MenuThree from './screen/MenuThree';

import BottomTab1 from './bottomtab/BottomTab1';
import BottomTab2 from './bottomtab/BottomTab2';
import BottomTab3 from './bottomtab/BottomTab3';

import TopTab1 from './toptab/TopTab1';
import TopTab2 from './toptab/TopTab2';
import TopTab3 from './toptab/TopTab3';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer ,DrawerActions} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const App = () => {
  const homeStack = () => {
    return (<Stack.Navigator>
      <Stack.Screen name="First" component={FirstScreen}
        options={({ navigation }) => ({
          title: "React Navigation",
          headerLeft: () =>
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'black', marginLeft: 8 }]}
              size={24}
              name={'ios-person'}
            />
        })} />
      <Stack.Screen name="Second" component={SecondScreen}
        options={{
          title: "Second page",
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: "white"
        }} />
      <Stack.Screen name="bottomTabs" component={bottomTabStack}
        options={{
          title: "Detail 1",
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: "white"
        }} />
      <Stack.Screen name="topTabs" component={topTabStack}
        options={{
          title: "Deatil 2",
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: "white"
        }} />
    </Stack.Navigator>)
  }

  const bottomTabStack = () => {
    return (<BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={BottomTab1}
        // options={{
        //   tabBarLabel: 'Map',
        //   tabBarIcon: () => (
        //     <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
        //   ),
        // }} 
        />
      <BottomTab.Screen name="Feed" component={BottomTab2} 
      // options={{
      //   tabBarLabel: 'Profile',
      //   tabBarIcon: () => (
      //     <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
      //   )
      // }}
       />
      <BottomTab.Screen name="History" component={BottomTab3}
        // options={{
        //   tabBarIcon: () => {
        //     <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
        //   }
        // }}
         />
    </BottomTab.Navigator>)
  }

  const topTabStack = () => {
    return (<TopTab.Navigator>
      <TopTab.Screen name="Top1" component={TopTab1}
        options={{
          title: "All contacts"
        }} />
      <TopTab.Screen name="Top2" component={TopTab2}
        options={{
          title: "Missed calls"
        }} />
      <TopTab.Screen name="Top3" component={TopTab3}
        options={{
          title: "Recieved calls"
        }} />
    </TopTab.Navigator>)
  }

  return (
    < NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={homeStack} />
        <Drawer.Screen name="MenuTwo" component={MenuTwo} />
        <Drawer.Screen name="MenuThree" component={MenuThree} />
      </Drawer.Navigator>
    </NavigationContainer >
  )
};


export default App;
