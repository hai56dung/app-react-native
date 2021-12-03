import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ItemOrderHistory from '../OrderHistory/ItemOrderHistory';

const data = [
  {
    id: '0',
    time: '24 June | 12:30 PM',
    cup: 'Американо',
    location: 'г. Минск, ул. Тимирязева, 67',
    price: 'BYN 3.00',
  },
  {
    id: '1',
    time: '24 June | 12:30 PM',
    cup: 'Мокко',
    location: 'г. Минск, ул. Тимирязева, 67',
    price: 'BYN 3.00',
  },
];

const NewOrder = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ItemOrderHistory item={item} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
      />
    </View>
  );
};

export default NewOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
