import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ItemBarista from './ItemBarista';

const data = [
  {
    id: '0',
    uri: require('../../assets/imgs/photo1.png'),
    name: 'Виктор',
    des: 'Топ-бариста',
    status: 1,
  },
  {
    id: '1',
    uri: require('../../assets/imgs/photo2.png'),
    name: 'Андрей',
    des: 'Топ-бариста',
    status: 1,
  },
  {
    id: '2',
    uri: require('../../assets/imgs/photo3.png'),
    name: 'Вера',
    des: 'Бариста',
    status: 0,
  },
];

const Barista = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => {
          return <ItemBarista item={item} navigation={navigation} />;
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.txtTitle}>Выберите бариста</Text>;
        }}
      />
    </View>
  );
};

export default Barista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtTitle: {
    marginTop: 16,
    marginLeft: 15,
  },
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
});
