import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreScreen from '../../screens/StoreScreen';
import OrderOption from '../../screens/OrderOption';
import {TouchableOpacity, Image} from 'react-native';
import Barista from '../../screens/Barista';
import Country from '../../screens/Country';
import CoffeeType from '../../screens/CoffeeType';
import Additives from '../../screens/Additives';

const Stack = createNativeStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => {
        return {
          headerTitleAlign: 'center',
          headerBackImageSource: require('../../assets/icons/iconArrowLeft.png'),
          headerTintColor: '#001833',
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MyOrder');
                }}>
                <Image source={require('../../assets/icons/buy.png')} />
              </TouchableOpacity>
            );
          },
          headerShadowVisible: false,
        };
      }}>
      <Stack.Screen
        name="Menu"
        component={StoreScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderOption"
        component={OrderOption}
        options={({navigation, route}) => {
          return {
            title: route.params.item.name,
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name="Barista"
        component={Barista}
        options={{
          headerTitle: 'Конструктор заказа',
        }}
      />
      <Stack.Screen
        name="CoffeeCountry"
        component={Country}
        options={{
          headerTitle: 'Конструктор заказа',
        }}
      />
      <Stack.Screen
        name="CoffeeType"
        component={CoffeeType}
        options={{
          headerTitle: 'Выберите страну',
        }}
      />
      <Stack.Screen
        name="Additives"
        component={Additives}
        options={{
          headerTitle: 'Конструктор заказа',
        }}
      />
    </Stack.Navigator>
  );
};

export default StoreStack;
