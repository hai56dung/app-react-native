import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ItemPayment from './ItemPayment';
const Popup = React.forwardRef((props, ref) => {
  const [visible, setVisible] = React.useState(false);
  const dataPayment = React.useMemo(() => {
    return [
      {
        id: '0',
        name: 'Оплата онлайн',
        des: 'Assist Belarus',
        uri: require('../../assets/imgs/assistlogo1.png'),
      },
      {
        id: '1',
        name: 'Банковская карта',
        des: '2540 xxxx xxxx 2648',
        uri: require('../../assets/imgs/assistlogo2.png'),
      },
    ];
  }, []);
  React.useImperativeHandle(ref, () => {
    return {
      // setVisible: setVisible,
      setVisible,
    };
  });
  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
      animationType={'fade'}
      transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{height: '20%'}}
          onPress={() => {
            setVisible(false);
          }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.txtTitle}>Оплата заказа</Text>
          <View style={styles.flex1}>
            <View style={styles.row}>
              <View style={styles.containerIconBuy}>
                <Image source={require('../../assets/icons/buy.png')} />
              </View>
              <View style={styles.infoPayment}>
                <Text style={styles.txtInfo}>Алексей</Text>
                <Text style={styles.txtDesInfo}>
                  кофейня Magic Coffee г.{'\n'}Минск, ул. Тимирязева, 67{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.flex2}>
            {dataPayment.map(item => {
              return (
                <ItemPayment
                  key={item.id}
                  name={item.name}
                  uri={item.uri}
                  des={item.des}
                />
              );
            })}
          </View>
          <View style={styles.rowFooter}>
            <Text style={styles.txtCymma}>Сумма</Text>
            <Text style={styles.txtBYN}>BYN 9.00</Text>
          </View>

          <View
            style={[
              styles.footer,
              {paddingHorizontal: 0, justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={styles.txtFooter}>Итоговая стоимость</Text>
              <Text style={styles.txtPriceFooter}>BYN 9.00</Text>
            </View>
            <TouchableOpacity
              style={[styles.btnContinue, {width: '50%'}]}
              onPress={() => {}}>
              <Image
                source={require('../../assets/icons/wallet.png')}
                style={styles.iconBuy}
              />
              <Text style={[styles.txtBtnContinue, {textAlign: 'center'}]}>
                Оплатить{'\n'}сейчас
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(29, 35, 53, 0.51)',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-around',
    paddingTop: 12,
  },
  txtFooter: {
    fontSize: 12,
    color: 'rgba(0, 24, 51, 0.22)',
    marginBottom: 2,
  },
  txtPriceFooter: {
    fontSize: 22,
    fontWeight: '600',
    color: '#001833',
  },
  btnContinue: {
    backgroundColor: '#324A59',
    borderRadius: 30,
    width: '40%',
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBuy: {
    tintColor: '#FFF',
  },
  txtBtnContinue: {
    color: '#FFF',
    marginLeft: 24,
    fontSize: 14,
  },
  contentContainer: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    height: '80%',
    width: '100%',
    padding: 32,
  },
  txtTitle: {
    fontSize: 20,
    color: '#001833',
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  containerIconBuy: {
    width: 47,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    borderRadius: 12,
  },
  infoPayment: {
    marginLeft: 24,
  },
  txtInfo: {
    fontSize: 12,
    color: '#001833',
  },
  txtDesInfo: {
    fontSize: 10,
    color: '#001833',
  },
  flex2: {
    flex: 2,
  },
  rowFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  txtCymma: {
    fontSize: 12,
    color: '#001833',
  },
  txtBYN: {
    fontSize: 12,
    color: '#001833',
    fontWeight: '600',
  },
});
