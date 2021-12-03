import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOrder from '../../screens/NewOrder';
import OrderHistory from '../../screens/OrderHistory/indes';

const Tab = createMaterialTopTabNavigator();

const OrderTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: '#001833',
        tabBarInActiveTintColor: '#D8D8D8',
        tabBarIndicatorStyle: {
          backgroundColor: '#001833',
        },
      }}>
      <Tab.Screen
        name="NewOrder"
        component={NewOrder}
        options={{
          title: 'Текущий',
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          title: 'История',
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderTab;
