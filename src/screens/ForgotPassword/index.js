import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Input from '../../components/Input';

const ForgotPassword = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Забыли пароль?</Text>
        <Text style={styles.txtDescription}>
          Введите адрес электронной почты{' '}
        </Text>
      </View>
      <View style={styles.contentInput}>
        <Input
          placeholder="Адрес электронной почты "
          source={require('../../assets/icons/iconEmail.png')}
        />
      </View>
      <View style={styles.contentButton}>
        <TouchableOpacity style={styles.btnNext}>
          <Image source={require('../../assets/icons/icArrowRight.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
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
    flex: 1,
    paddingLeft: 48,
    paddingRight: 41,
  },
  contentButton: {
    flex: 4,
  },
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
});
