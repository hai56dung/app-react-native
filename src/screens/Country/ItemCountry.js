import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemCountry = ({item, navigation, isSelect, index, setIndexSelect}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('CoffeeType');
        setIndexSelect(index); // cap nhat lai state indexSelect
      }}>
      <View style={styles.containerLeft}>
        <Text
          style={{
            color: isSelect ? '#0A84FF' : '#000000',
            fontSize: 17,
          }}>
          {item.title}
        </Text>
      </View>
      <Image source={require('../../assets/icons/right.png')} />
    </TouchableOpacity>
  );
};

export default ItemCountry;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 11,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
});
