import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WellCome from './src/screens/WellCome';
import Authorization from './src/screens/Authorization';
import ForgotPassword from './src/screens/ForgotPassword';
import Registration from './src/screens/Registration';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity, Image} from 'react-native';
import TwoFactorVerification from './src/screens/TwoFactorVerification';
import SelectMagicCoffee from './src/screens/SelectMagicCoffee';
import MainTab from './src/nav/MainTab';
import Profile from './src/screens/Profile';
import MyOrder from './src/screens/MyOrder';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerTintColor: '#000',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  style={{marginLeft: 4}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={require('./src/assets/icons/iconArrowLeft.png')}
                  />
                </TouchableOpacity>
              );
            },
          };
        }}>
        <Stack.Screen
          name="WellCome"
          component={WellCome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={() => {
            return {
              headerTitle: '',
              animation: 'slide_from_right',
            };
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={() => {
            return {
              headerTitle: '',
              animation: 'slide_from_bottom',
            };
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={() => {
            return {
              headerTitle: '',
            };
          }}
        />
        <Stack.Screen
          name="TwoFactorVerification"
          component={TwoFactorVerification}
          options={() => {
            return {
              headerTitle: '',
            };
          }}
        />
        <Stack.Screen
          name="SelectMagicCoffee"
          component={SelectMagicCoffee}
          options={() => {
            return {
              headerTitle: '',
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'transparent',
              },
            };
          }}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} options={{}} />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
