import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemGift = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderColor: '#F4F5F7',
      }}>
      <View>
        <Text style={{fontSize: 12, color: '#324A59', marginBottom: 5}}>
          Американо
        </Text>
        <Text style={{fontSize: 10, color: 'rgba(50, 74, 89, 0.22)'}}>
          24 июня | 12:30
        </Text>
      </View>
      <Text stye={{fontSize: 16, color: '#324A59'}}>+ 12 баллов</Text>
    </View>
  );
};

export default ItemGift;

const styles = StyleSheet.create({});
