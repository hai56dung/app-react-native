import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Popup from './Popup';
const MyOrder = () => {
  console.log('render MyOrder');
  const refPopup = React.useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.containerItem}>
                <Image source={require('../../assets/imgs/myorder1.png')} />
                <View style={styles.itemInfo}>
                  <Text style={styles.txtName}>Американо</Text>
                  <Text style={styles.txtDes}>
                    single | iced | medium | full ice
                  </Text>
                  <Text style={styles.txtQuantity}>x 1</Text>
                </View>
                <View style={styles.containerPrice}>
                  <Text style={styles.txtPrice}>BYN{'\n'}3.00</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => `${index}`}
          ListHeaderComponent={() => {
            return <Text style={styles.txtHeader}>Мой заказ</Text>;
          }}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <View style={styles.footer}>
          <View>
            <Text style={styles.txtFooter}>Итоговая сумма</Text>
            <Text style={styles.txtPriceFooter}>BYN 9.00</Text>
          </View>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => {
              refPopup.current?.setVisible(true);
            }}>
            <Image
              source={require('../../assets/icons/buy.png')}
              style={styles.iconBuy}
            />
            <Text style={styles.txtBtnContinue}>Далее</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Popup ref={refPopup} />
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerItem: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    paddingRight: 16,
    backgroundColor: '#F7F8FB',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
  },
  itemInfo: {
    marginLeft: 10,
    flex: 1,
    marginRight: 16,
  },
  txtName: {
    fontSize: 12,
    color: '#001833',
    marginBottom: 2,
  },
  txtDes: {
    fontSize: 10,
    color: '#757575',
    marginBottom: 4,
  },
  txtQuantity: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.57)',
  },
  containerPrice: {
    justifyContent: 'center',
  },
  txtPrice: {
    fontSize: 16,
    color: '#001833',
  },
  txtHeader: {
    marginBottom: 24,
    fontSize: 20,
    color: '#001833',
  },
  contentContainerStyle: {
    paddingHorizontal: 24,
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
});
