import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import Input from '../../components/Input';
const spacing = Platform.OS === 'android' ? 24 : 36;
const Registration = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Зарегистрироваться</Text>
        <Text style={styles.txtDescription}>Создать аккаунт здесь</Text>
      </View>
      <View style={styles.contentInput}>
        <Input
          placeholder="Имя пользователя"
          source={require('../../assets/icons/iconProfile.png')}
        />
        <View style={{height: spacing}} />
        <Input
          placeholder="Номер мобильного телефона"
          source={require('../../assets/icons/iconPhone.png')}
          secureTextEntry={true}
        />
        <View style={{height: spacing}} />
        <Input
          placeholder="Адрес электронной почты "
          source={require('../../assets/icons/iconEmail.png')}
          secureTextEntry={true}
        />
        <View style={{height: spacing}} />
        <Input
          placeholder="Пароль"
          source={require('../../assets/icons/iconLock.png')}
          secureTextEntry={true}
        />
        <Text
          style={{
            fontSize: 12,
            color: '#324A59',
            marginTop: spacing,
          }}>
          Регистрируясь, вы соглашаетесь с нашими условиями использования
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.navigate('TwoFactorVerification');
          }}>
          <Image source={require('../../assets/icons/icArrowRight.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.txtFooter}>
          Уже зарегистрировались?{' '}
          <Text
            style={{color: '#324A59'}}
            onPress={() => {
              Alert.alert('Thông báo', 'OnPress Text ');
            }}>
            Войти
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;

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
    flex: 3,
    paddingLeft: 48,
    paddingRight: 41,
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
  txtFooter: {
    fontSize: 14,
    color: '#AAAAAA',
    marginLeft: 48,
  },
});
