import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HeaderMenu from './HeaderMenu';
import ItemMenu from './ItemMenu';

const _data = [
  {
    id: '0',
    name: 'Американо',
    uri: require('../../assets/imgs/img1.png'),
  },
  {
    id: '1',
    name: 'Капучино',
    uri: require('../../assets/imgs/img2.png'),
  },
  {
    id: '2',
    name: 'Латте',
    uri: require('../../assets/imgs/img3.png'),
  },
  {
    id: '3',
    name: 'Флэт Уайт',
    uri: require('../../assets/imgs/img4.png'),
  },
  {
    id: '4',
    name: 'Раф',
    uri: require('../../assets/imgs/img5.png'),
  },
  {
    id: '5',
    name: 'Эспрессо',
    uri: require('../../assets/imgs/img6.png'),
  },
];

//useEffect
// la 1 hook, 1 function co 2 tham so: tham so 1 la ()=>{} , tham so thu 2 la dep [];
// Khi load 1 component, thi se chay cac useEffect => tinh ung dung: la noi call api, lay data tu server va cap nhat vao state
// khi value trong dep [], thay doi thi se chay lai useEffect do => tinh ung dung: listent su thay doi value
// khi dep [] rong, useEffect chi chay 1 lan duy nhat

const StoreScreen = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const getData = React.useCallback(() => {
    setTimeout(() => {
      setData(_data);
    }, 1000);
  }, []);

  React.useEffect(() => {
    console.log('useEffect store screen');
    getData();
  }, []);

  React.useEffect(() => {
    console.log('DATA IS CHANGE ');
  }, [data]);

  return (
    <View style={styles.container}>
      <HeaderMenu navigation={navigation} />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <ItemMenu item={item} />;
          }}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingHorizontal: 18,
          }}
          numColumns={2}
          ListHeaderComponent={() => {
            return <Text style={styles.txtHeaderList}>Выберите Ваш кофе</Text>;
          }}
        />
      </View>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#324A59',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 7,
  },
  txtHeaderList: {
    fontSize: 16,
    color: '#D8D8D8',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 24,
  },
});
