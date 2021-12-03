import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import StoreScreen from '../../screens/StoreScreen';
import StoreStack from '../StoreStack';
import Gift from '../../screens/Gift';
import OrderTab from '../OrderTab';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#324A59',
        tabBarInactiveTintColor: '#D8D8D8',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="StoreStack"
        component={StoreStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/store.png')}
                style={{tintColor: color}}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="GiftScreen"
        component={Gift}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/gift.png')}
                style={{tintColor: color}}
              />
            );
          },
          headerTitle: 'Вознаграждение',
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="OrderTab"
        component={OrderTab}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/order.png')}
                style={{tintColor: color}}
              />
            );
          },
          headerShadowVisible: false,
          headerTitle: 'Мой заказ',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
