import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemOrderHistory = ({item, isHistory}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.txtTime}>{item.time}</Text>
        <View style={styles.row}>
          <Image source={require('../../assets/icons/smaillcup.png')} />
          <Text style={styles.txtDes}>{item.cup}</Text>
        </View>
        <View style={{height: 9}} />
        <View style={styles.row}>
          <Image source={require('../../assets/icons/smalllocation.png')} />
          <Text style={styles.txtDes}>{item.location}</Text>
        </View>
      </View>
      <View>
        <Text
          style={[
            styles.txtPrice,
            {color: isHistory ? 'rgba(50, 74, 89, 0.6)' : '#324A59'},
          ]}>
          {item.price}
        </Text>
        {!!isHistory && (
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Заказать</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ItemOrderHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingTop: 23,
    paddingBottom: 10,
    borderBottomColor: '#F4F5F7',
  },
  txtTime: {
    marginBottom: 10,
    color: 'rgba(50, 74, 89, 0.22)',
    size: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDes: {
    fontSize: 10,
    marginLeft: 11,
    color: '#324A',
  },
  txtPrice: {
    fontSize: 16,
    color: '#324A59',
    fontWeight: '600',
    marginBottom: 5,
  },
  btn: {
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: '#324A59',
    height: 32,
    justifyContent: 'center',
  },
  txtBtn: {
    color: '#FFF',
    fontSize: 10,
  },
});
