import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const Code = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.contentCode} onPress={onPress}>
      <Text style={styles.txtCode}>{value}</Text>
    </TouchableOpacity>
  );
};

const TwoFactorVerification = ({navigation}) => {
  const [otp, setOtp] = React.useState(['', '', '', '']);
  const refTextInput = React.useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Проверка</Text>
        <Text style={styles.txtDescription}>
          Введите код, который мы вам отправили
        </Text>
      </View>
      <View style={styles.contentInput}>
        <View style={styles.containerCode}>
          {otp.map((item, index) => {
            return (
              <Code
                value={item}
                key={`${index}`}
                onPress={() => {
                  refTextInput.current.focus();
                }}
              />
            );
          })}
        </View>
        <View style={styles.containerTimeResend}>
          <Text style={styles.txtTimeResend}>Выслать заново через 00:30</Text>
        </View>
      </View>
      <View style={styles.contentButton}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.navigate('SelectMagicCoffee');
          }}>
          <Image source={require('../../assets/icons/icArrowRight.png')} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          bottom: -100,
        }}
        keyboardType="number-pad"
        maxLength={4}
        ref={refTextInput}
        onChangeText={text => {
          setOtp(() => {
            return [text[0] || '', text[1] || '', text[2] || '', text[3] || ''];
          });
        }}
        value={`${otp[0]}${otp[1]}${otp[2]}${otp[3]}`}
        autoFocus={true}
      />
    </View>
  );
};

export default TwoFactorVerification;

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
  containerCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  containerTimeResend: {
    flex: 1,
    justifyContent: 'center',
  },
  contentCode: {
    height: 61,
    width: 48,
    backgroundColor: '#F7F8FB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCode: {
    fontSize: 28,
    color: '#181D2D',
  },
  txtTimeResend: {
    fontSize: 14,
    color: 'rgba(170, 170, 170, 0.5)',
    alignSelf: 'center',
  },
});
