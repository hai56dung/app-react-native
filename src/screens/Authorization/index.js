import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Input from '../../components/Input';
const Authorization = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Войти</Text>
        <Text style={styles.txtDescription}>Добро пожаловать</Text>
      </View>
      <View style={styles.contentInput}>
        <Input
          placeholder="Адрес электронной почты "
          source={require('../../assets/icons/iconEmail.png')}
        />
        <View style={{height: 36}} />
        <Input
          placeholder="Пароль"
          source={require('../../assets/icons/iconLock.png')}
          secureTextEntry={true}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 16,
          }}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          Забыли пароль?
        </Text>
      </View>
      <View style={styles.contentButton}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.navigate('MainTab');
          }}>
          <Image source={require('../../assets/icons/icArrowRight.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.txtFooter}>
          Впервые?{' '}
          <Text
            style={{color: '#324A59'}}
            onPress={() => {
              navigation.navigate('Registration');
            }}>
            Зарегистрироваться.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Authorization;

const styles = StyleSheet.create({
  btnNext: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#324A59',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 41,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 48,
  },
  txtTitle: {
    fontWeight: '500',
    fontSize: 22,
    color: '#181D2D',
  },
  txtDescription: {
    fontWeight: '500',
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 16,
  },
  contentInput: {
    flex: 2,
    paddingLeft: 48,
    paddingRight: 41,
  },
  contentButton: {
    flex: 2,
  },
  containerFooter: {
    flex: 1,
  },
  txtFooter: {
    fontSize: 14,
    color: '#AAAAAA',
    marginLeft: 48,
  },
});
