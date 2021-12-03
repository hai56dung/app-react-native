import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Button = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['rgba(238, 164, 206, 1)', 'rgba(197, 139, 242, 1)']}
      start={{
        x: 0,
        y: 0.5,
      }}
      end={{
        x: 1,
        y: 0.5,
      }}
      style={{
        borderRadius: 16,
      }}>
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => {
          navigation.navigate('Barista');
        }}>
        <Image source={require('../../assets/icons/filter.png')} />
        <Text style={styles.txtTitle}>Конструктор кофемана</Text>
        <Image source={require('../../assets/icons/iconRight.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingLeft: 17,
    paddingBottom: 13,
    paddingRight: 13,
    backgroundColor: 'transparent',
    borderRadius: 16,
    alignItems: 'center',
  },
  txtTitle: {
    flex: 1,
    marginLeft: 11,
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
