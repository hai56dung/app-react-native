import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ItemAdditive from './ItemAdditive';
const data = [
  {id: '0', title: 'Цейлонская корица '},
  {id: '1', title: 'Тертый шоколад'},
  {id: '2', title: 'Жидкий шоколад'},
  {id: '3', title: 'Маршмеллоу '},
  {id: '4', title: 'Взбитые сливки'},
  {id: '5', title: 'Сливки'},
  {id: '6', title: 'Мускатный орех'},
  {id: '7', title: 'Мороженное'},
];

const Additives = ({navigation}) => {
  const [arrayIndexSelect, setArrayIndexSelect] = React.useState([0, 3]);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          return (
            <ItemAdditive
              item={item}
              navigation={navigation}
              isSelect={arrayIndexSelect.findIndex(e => e === index) !== -1}
              index={index}
              setArrayIndexSelect={setArrayIndexSelect}
              arrayIndexSelect={arrayIndexSelect}
            />
          );
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.txtTitle}>Выберите добавку</Text>;
        }}
      />
      <TouchableOpacity style={styles.btnNext}>
        <Text style={{color: '#FFF'}}>Далее</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Additives;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtTitle: {
    marginTop: 16,
    marginBottom: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  btnNext: {
    backgroundColor: '#324A59',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 30,
    margin: 16,
  },
});
