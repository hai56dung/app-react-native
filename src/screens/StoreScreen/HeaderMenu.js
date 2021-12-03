import {Header} from '@react-navigation/elements';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HeaderMenu = ({navigation}) => {
  return (
    <Header
      headerLeft={() => {
        return (
          <View style={{marginLeft: 26}}>
            <Text style={{color: '#D8D8D8', fontSize: 14, marginBottom: 2}}>
              Добро пожаловать!
            </Text>
            <Text style={{color: '#001833', fontSize: 18}}>Алексей</Text>
          </View>
        );
      }}
      headerRight={() => {
        return (
          <View style={{flexDirection: 'row', marginRight: 30}}>
            <TouchableOpacity>
              <Image source={require('../../assets/icons/buy.png')} />
            </TouchableOpacity>
            <View style={{width: 20}} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image source={require('../../assets/icons/profile.png')} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({});
