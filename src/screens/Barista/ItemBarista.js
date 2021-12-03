import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemBarista = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
        navigation.navigate('CoffeeCountry')
    }}>
      <Image source={item.uri} />
      <View style={styles.content}>
        <Text style={styles.txtName}>{item.name}</Text>
        <Text style={styles.txtDes}>{item.des}</Text>
      </View>
      <View style={styles.containerDot}>
        <View
          style={[
            styles.dot,
            {backgroundColor: !!item.status ? '#33E545' : '#FF3030'},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemBarista;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 8,
    paddingRight: 32,
    borderRadius: 22,
    shadowColor: 'rgb(90,108,234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 22,
    elevation: 2,
    backgroundColor: '#FFF',
    marginVertical: 10,
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'center',
    marginLeft: 16,
    flex: 1,
  },
  txtName: {
    fontSize: 15,
    color: '#09051C',
    marginBottom: 8,
  },
  txtDes: {
    fontSize: 14,
    color: '#3B3B3B30',
  },
  containerDot: {
    width: 16,
    justifyContent: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#33E545',
  },
});
